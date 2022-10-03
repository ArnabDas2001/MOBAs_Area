
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.ovimg2').forEach(ovimg2 => {
        const speed = ovimg2.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        ovimg2.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}