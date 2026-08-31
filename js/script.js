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