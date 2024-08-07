
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        entry.target.style.backgroundColor = intersecting ? "aqua" : ""
    
    
})
} ,{threshold:0.5} // mettre un delai quand la page est visible a 50% elle change de couleur
)

observer.observe(document.getElementById("section1"))

observer.observe(document.getElementById("section2"))

observer.observe(document.getElementById("section3"))



