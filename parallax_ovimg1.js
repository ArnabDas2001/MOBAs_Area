
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.ovimg1').forEach(ovimg1 => {
        const speed = ovimg1.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        ovimg1.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}