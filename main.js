(()=>{"use strict";const t={resetPage(){document.body.innerHTML=""},renderStartPage(){const t=document.createElement("div");t.setAttribute("id","start-container");const e=document.createElement("p");e.setAttribute("id","title"),e.textContent="CLUK!",t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","button-container"),t.appendChild(n);const o=document.createElement("button");o.setAttribute("id","start-button"),o.innerText="START GAME";const r=document.createElement("button");r.setAttribute("id","difficulty-button"),r.innerText="DIFFICULTY: EASY";const d=document.createElement("button");d.setAttribute("id","mode-button"),d.innerText="MODE: TIMER",n.append(o,r,d),document.body.appendChild(t)},renderGamePage(){const t=document.createElement("div");t.id="game-container",document.body.append(t)},renderLetters(t){const e=document.querySelector("#game-container");e.innerHTML="";for(let n=0;n<t.length;n++){const o=document.createElement("p");o.innerText=t[n].letter,o.className="letter",o.style.left=t[n].x+"px",o.style.top=t[n].y+"px",e.appendChild(o)}}},e={letters:[],positions:[],totalScore:0,time:.5,difficulty:0,mode:"timer",spawnRandomLetter(){const t=Math.floor(26*Math.random()),e={letter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(t),point:0,x:0,y:0};let n,o=Math.floor(Math.random()*(window.innerWidth-32))+16,r=Math.floor(Math.random()*(window.innerHeight-32))+16;do{o=Math.floor(Math.random()*(window.innerWidth-32))+16,r=Math.floor(Math.random()*(window.innerHeight-32))+16,n=!1;for(let t=0;t<this.positions.length;t++){const e=this.positions[t];Math.sqrt((e.x-o)**2+(e.y-r)**2)<16&&(n=!0)}}while(n);e.x=o,e.y=r,this.letters.push(e),console.log(e)},startGame(t){let e=60*this.time,n=setInterval((()=>{0!=e?(this.spawnRandomLetter(),e--):clearInterval(n)}),t)},removeLetter(){this.letters.shift()}};t.renderStartPage(),document.getElementById("start-button").addEventListener("click",(function(){t.resetPage(),t.renderGamePage(),e.startGame(1e3),setInterval((function(){t.renderLetters(e.letters)}),100),document.addEventListener("keydown",(t=>{const n=document.querySelector(".letter");null!==n&&n.innerText===t.key.toUpperCase()&&(n.remove(),e.removeLetter())}))})),document.getElementById("difficulty-button").addEventListener("click",console.log("hey")),document.getElementById("mode-button").addEventListener("click",console.log("hey"))})();