(()=>{
 const root=document.getElementById('dice-style-preview');
 const count=root.querySelector('select');
 const faces=root.querySelector('.dice-faces');
 const positions={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};
 let rolls=0,total=0,values=[6,6,6,6];
 function draw(){faces.replaceChildren();for(let i=0;i<Number(count.value);i++){const face=document.createElement('div');face.className='dice-face';face.setAttribute('role','img');face.setAttribute('aria-label','Ζάρι '+(i+1)+': '+values[i]);for(const p of positions[values[i]]){const pip=document.createElement('span');pip.className='dice-pip';pip.style.gridArea=Math.ceil(p/3)+' / '+((p-1)%3+1);face.append(pip);}faces.append(face);}}
 function results(sum){root.querySelector('[data-result="rolls"]').textContent=rolls;root.querySelector('[data-result="sum"]').textContent=sum;root.querySelector('[data-result="total"]').textContent=total;}
 root.querySelector('.dice-roll').addEventListener('click',()=>{values=Array.from({length:4},()=>Math.floor(Math.random()*6)+1);const sum=values.slice(0,Number(count.value)).reduce((a,b)=>a+b,0);rolls++;total+=sum;draw();results(sum);});
 root.querySelector('.dice-reset').addEventListener('click',()=>{rolls=0;total=0;values=[6,6,6,6];draw();results(0);});
 count.addEventListener('change',draw);
 draw();
})();
