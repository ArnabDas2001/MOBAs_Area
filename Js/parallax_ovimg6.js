
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.ovimg6').forEach(ovimg6 => {
        const speed = ovimg6.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        ovimg6.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}