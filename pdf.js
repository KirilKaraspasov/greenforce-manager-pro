'use strict';
// Offline A4 document renderer. All text and images are rendered locally.
async function renderDocumentPages(title,text,options={}){
 const W=1240,H=1754,M=96,BOTTOM=1600,pages=[],brand='#08110b',green='#527b13',lime='#86be00';let canvas,ctx,y;
 const dark=options.theme==='dark',paper=dark?brand:'#fff',ink=dark?'#f4f6ef':'#20251f',muted=dark?'#c3d0b8':'#65745d',accent=dark?lime:green;
 const company=options.company||{},contact=[company.phone,company.email].filter(Boolean).join(' | '),imageCache=new Map();
 async function loadImage(src){if(imageCache.has(src))return imageCache.get(src);const img=new Image();img.src=src;await img.decode();imageCache.set(src,img);return img}
 function newPage(){canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;ctx=canvas.getContext('2d');ctx.fillStyle=paper;ctx.fillRect(0,0,W,H);ctx.fillStyle=brand;ctx.fillRect(0,0,W,90);ctx.fillStyle=lime;ctx.fillRect(0,0,17,90);ctx.fillStyle='#fff';ctx.font='bold 25px sans-serif';ctx.fillText('GREENFORCE',M,55);ctx.textAlign='right';ctx.fillStyle='#bed795';ctx.font='17px sans-serif';ctx.fillText('ОЗЕЛЕНЯВАНЕ',W-M,55);ctx.textAlign='left';y=150}
 function flush(){pages.push({canvas,cover:false});canvas=null}
 function room(height){if(y+height>BOTTOM){flush();newPage()}}
 function lines(value,font='23px sans-serif',width=W-2*M){ctx.font=font;const output=[];for(const raw of String(value??'').split('\n')){if(!raw.trim()){output.push('');continue}let line='';for(let word of raw.split(/\s+/)){while(ctx.measureText(word).width>width){if(line){output.push(line);line=''}let len=1;while(len<word.length&&ctx.measureText(word.slice(0,len+1)).width<=width)len++;output.push(word.slice(0,len));word=word.slice(len)}let next=line?line+' '+word:word;if(ctx.measureText(next).width>width&&line){output.push(line);line=word}else line=next}output.push(line)}return output}
 function paragraph(value,font='23px sans-serif',color=ink,spacing=32){for(const line of lines(value,font)){room(spacing);ctx.font=font;ctx.fillStyle=color;ctx.fillText(line,M,y);y+=spacing}y+=13}
 function heading(value){room(110);y+=10;paragraph(value,'bold 29px sans-serif',accent,38)}
 function table(block){const widths=(block.widths||block.headers.map(()=>1/block.headers.length)).map(w=>w*(W-2*M)),pad=16,font='21px sans-serif',step=30;let hasHeader=false;
  function header(){room(65);ctx.fillStyle=brand;ctx.fillRect(M,y-23,W-2*M,51);ctx.fillStyle='#fff';ctx.font='bold 20px sans-serif';let x=M;block.headers.forEach((t,i)=>{ctx.fillText(t,x+pad,y+8);x+=widths[i]});y+=59;hasHeader=true}
  header();block.rows.forEach((row,index)=>{const cells=row.map((t,i)=>lines(t,font,widths[i]-2*pad));let offset=0,total=Math.max(1,...cells.map(x=>x.length));while(offset<total){if(y+step+2*pad>BOTTOM){flush();newPage();hasHeader=false}if(!hasHeader)header();let take=Math.min(total-offset,Math.floor((BOTTOM-y-2*pad)/step));if(take<1){flush();newPage();hasHeader=false;continue}const height=take*step+2*pad;ctx.fillStyle=dark?(index%2?'#17251b':'#0e1b13'):(index%2?'#eff4e8':'#fff');ctx.fillRect(M,y-23,W-2*M,height);ctx.strokeStyle=dark?'#31462d':'#dae2d5';ctx.strokeRect(M,y-23,W-2*M,height);let x=M;cells.forEach((cell,i)=>{ctx.fillStyle=ink;ctx.font=font;for(let j=0;j<take;j++)if(cell[offset+j])ctx.fillText(cell[offset+j],x+pad,y+pad+j*step);x+=widths[i]});y+=height;offset+=take}});y+=25}
 if(options.cover){newPage();ctx.fillStyle=brand;ctx.fillRect(0,0,W,H);const img=await loadImage(options.cover.image);ctx.drawImage(img,0,0,W,520);ctx.fillStyle=lime;ctx.fillRect(0,520,42,H-520);y=630;const white=(t,size=32)=>{ctx.fillStyle='#fff';ctx.font=`${size>=45?'bold ':''}${size}px sans-serif`;for(const line of lines(t,ctx.font,W-2*M)){ctx.fillText(line,M,y);y+=size*1.35}};white(options.cover.title.toLocaleUpperCase('bg'),49);y+=12;ctx.fillStyle=lime;ctx.font='bold 27px sans-serif';ctx.fillText('GREENFORCE ОЗЕЛЕНЯВАНЕ',M,y);y+=42;white('Максимум зеленина. Минимум усилия.',23);y+=35;ctx.strokeStyle=lime;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(M,y);ctx.lineTo(W-M,y);ctx.stroke();y+=110;white(options.cover.price,76);white(options.cover.priceLabel||'на месец',26);y+=30;for(const[label,value]of options.cover.facts){ctx.fillStyle=lime;ctx.font='bold 23px sans-serif';ctx.fillText(label.toLocaleUpperCase('bg'),M,y);y+=40;white(value,26);y+=32}ctx.fillStyle='#a6b59d';ctx.font='19px sans-serif';ctx.fillText(options.cover.owner||'',M,H-150);ctx.fillText(contact,M,H-115);pages.push({canvas,cover:true});canvas=null;}
 newPage();
 if(options.blocks){for(const b of options.blocks){if(b.kind==='break'){flush();newPage()}else if(b.kind==='heading')heading(b.text);else if(b.kind==='table')table(b);else if(b.kind==='signature'){room(200);y+=25;paragraph(b.text,'22px sans-serif')}else paragraph(b.text)}}else{paragraph(title,'bold 35px sans-serif',dark?'#fff':brand,44);paragraph(text)}
 flush();
 // Uniform square photos: centered cover crop, four per page, centered final single.
 for(const group of options.photos||[]){
  if(!group.images.length)continue;
  const cols=2,perPage=4,gap=25,size=(W-2*M-gap)/cols;
  for(let start=0;start<group.images.length;start+=perPage){
   newPage();heading(group.title+(start?' - продължение':''));
   const count=Math.min(perPage,group.images.length-start);
   for(let slot=0;slot<count;slot++){
    const row=Math.floor(slot/cols),col=slot%cols,rowCount=Math.min(cols,count-row*cols),rowWidth=rowCount*size+(rowCount-1)*gap,x=(W-rowWidth)/2+col*(size+gap),top=230+row*(size+45),img=await loadImage(group.images[start+slot]);
    const crop=Math.min(img.width,img.height),sx=(img.width-crop)/2,sy=(img.height-crop)/2;
    ctx.drawImage(img,sx,sy,crop,crop,x,top,size,size);
    ctx.fillStyle=dark?'#c3d0b8':'#52634c';ctx.font='20px sans-serif';const caption=group.captions?.[start+slot]||'Снимка '+(start+slot+1),captionLines=lines(caption,'20px sans-serif',size);ctx.fillText(captionLines[0]+(captionLines.length>1?'…':''),x,top+size+27);
   }
   flush();
  }
 }

 pages.forEach((p,i)=>{const c=p.canvas.getContext('2d');if(!p.cover){c.strokeStyle=lime;c.lineWidth=1;c.beginPath();c.moveTo(M,H-95);c.lineTo(W-M,H-95);c.stroke();c.fillStyle=muted;c.font='17px sans-serif';c.fillText(contact||'GreenForce Озеленяване',M,H-62);c.textAlign='right';c.fillText(`${i+1} / ${pages.length}`,W-M,H-62)}});
 return pages.map(p=>p.canvas);
}
async function createPDF(title,text,options={}){const pages=await renderDocumentPages(title,text,options);return imagePagesPDF(pages.map(canvas=>Uint8Array.from(atob(canvas.toDataURL('image/jpeg',.92).split(',')[1]),x=>x.charCodeAt(0))))}
function imagePagesPDF(pages){const W=1240,H=1754;const enc=new TextEncoder(),parts=[],offsets=[0];let offset=0;
 function push(v){const bytes=typeof v==='string'?enc.encode(v):v;parts.push(bytes);offset+=bytes.length}
 function obj(n,body){offsets[n]=offset;push(n+' 0 obj\n');if(Array.isArray(body))body.forEach(push);else push(body);push('\nendobj\n')}
 push('%PDF-1.4\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Count '+pages.length+' /Kids ['+pages.map((_,i)=>(3+i*3)+' 0 R').join(' ')+'] >>');
 pages.forEach((bytes,i)=>{const n=3+i*3;obj(n,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im${i} ${n+1} 0 R >> >> /Contents ${n+2} 0 R >>`);obj(n+1,[`<< /Type /XObject /Subtype /Image /Width ${W} /Height ${H} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${bytes.length} >>\nstream\n`,bytes,'\nendstream']);const stream=`q 595.28 0 0 841.89 0 0 cm /Im${i} Do Q`;obj(n+2,`<< /Length ${enc.encode(stream).length} >>\nstream\n${stream}\nendstream`)});
 const start=offset;push('xref\n0 '+offsets.length+'\n0000000000 65535 f \n');for(let i=1;i<offsets.length;i++)push(String(offsets[i]).padStart(10,'0')+' 00000 n \n');push(`trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF`);return new Blob(parts,{type:'application/pdf'});
}
