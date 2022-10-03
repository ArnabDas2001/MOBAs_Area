
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.ovimg3').forEach(ovimg3 => {
        const speed = ovimg3.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        ovimg3.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}