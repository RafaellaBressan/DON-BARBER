// Scroll suave
document.querySelectorAll("a[href^='#']").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const id=link.getAttribute("href");

const section=document.querySelector(id);

if(section){
section.scrollIntoView({
behavior:"smooth"
})
}

})

});

// Animação aparecendo
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

})

});

document.querySelectorAll(".card,.review,.grid img,.team").forEach(el=>{

el.style.opacity=0;
el.style.transform="translateY(40px)";
el.style.transition=".7s";

observer.observe(el);

});

// Loader

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 800);

  }, 1200);

});

// Menu

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

menu.onclick=()=>{

nav.classList.toggle("active");

}

// Lightbox

const imagens=document.querySelectorAll(".grid img");

const light=document.createElement("div");

light.className="lightbox";

document.body.appendChild(light);

imagens.forEach(img=>{

img.onclick=()=>{

light.classList.add("show");

light.innerHTML=`<img src="${img.src}">`;

}

});

light.onclick=()=>light.classList.remove("show");