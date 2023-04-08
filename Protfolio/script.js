// document.addEventListener("mousemove", parallax);
// function parallax(e) {}

// translateY(${y}px)
// document.addEventListener("click" , parallax1);
// function parallax1(e){

//     let con = document.getElementsByClassName('.layer')

//     con.style.height = '20px'
//  }

// function parallax(e){
// this.querySelectorAll('.layer').forEach(Layer => {
// const speed = Layer.getAttribute('data-speed');
// const x=(window.innerWidth- e.pageX*speed)/100
// const y=(window.innerHeight- e.pageY*speed)/100
// console.log(x, y)
// Layer.style.transform = 'translateX(10px)'

// })

document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".layer").forEach(move => {
        var moving_value = move.getAttribute("data-speed");
        var x = e.pageX * moving_value/50;
        var y = e.pageY * moving_value/50;
        console.log(x,y)
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

