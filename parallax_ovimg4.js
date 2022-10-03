
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.ovimg4').forEach(ovimg4 => {
        const speed = ovimg4.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        ovimg4.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}