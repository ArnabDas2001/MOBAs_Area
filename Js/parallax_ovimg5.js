
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.ovimg5').forEach(ovimg5 => {
        const speed = ovimg5.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        ovimg5.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}