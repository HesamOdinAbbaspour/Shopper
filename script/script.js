(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = 2025,
        nextYear = yyyy + 1,
        dayMonth = "12/31/",
        event = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > event) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(event).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true
    });
    $(document).ready(function () {
      $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
      });
    });
    

let slider= document.getElementById("slider")
let slide1= document.getElementById("slide1")
let slide2= document.getElementById("slide2")
let slide3= document.getElementById("slide3")
let slide4= document.getElementById("slide4")
let i =0
setInterval(()=>{
    let body_width = document.body.clientWidth
    if(body_width < 730){
        document.getElementById("dot1").addEventListener("click", function(){
            if(i==(-300)){
                i= -400
                slide3.style.transform= "translatex(400%)"
            }else if(i==300){
                i= 400
                slide1.style.transform= "translatex(-400%)"
            }else {
                i=0
                slide1.style.transform= "translatex(0)"
                slide2.style.transform= "translatex(0)"
                slide3.style.transform= "translatex(0)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
        document.getElementById("dot2").addEventListener("click", function(){
            if(i==-300){
                i= -100
                slide1.style.transform= "translatex(400%)"
                slide2.style.transform= "translatex(0)"
            }
            else if(i==200){
                i=300
                slide2.style.transform= "translatex(-400%)"
            }else if(i==400){
                i=300
            }else {
                i= -100
                slide2.style.transform= "translatex(0)"
                slide3.style.transform= "translatex(0)"
                slide4.style.transform= "translatex(0)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
        document.getElementById("dot3").addEventListener("click", function(){
            if(i==100){
                i= 200
                slide3.style.transform= "translatex(-400%)"
            }else if(i==300){
                i=200
                slide1.style.transform= "translatex(0)"
            }
            else{
                i= -200
                slide1.style.transform= "translatex(400%)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
        document.getElementById("dot4").addEventListener("click", function(){
            if(i==0){
                i= 100
                slide4.style.transform= "translatex(-400%)"
            }else if(i==200){
                i=33.33
                slide2.style.transform= "translatex(0)"
            }else if(i==400){
                i= -300
                slide4.style.transform= "translatex(0)"
                slide1.style.transform= "translatex(400%)"
                slide2.style.transform= "translatex(400%)"
                slide3.style.transform= "translatex(0)"
            }
            else {
                i= -300
                slide1.style.transform= "translatex(400%)"
                slide2.style.transform= "translatex(400%)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
    }else {
        document.getElementById("dot1").addEventListener("click", function(){
            if(i==(-100)){
                i= -133.33
                slide3.style.transform= "translatex(400%)"
            }else if(i==100){
                i= 133.33
                slide1.style.transform= "translatex(-400%)"
            }else {
                i=0
                slide1.style.transform= "translatex(0)"
                slide2.style.transform= "translatex(0)"
                slide3.style.transform= "translatex(0)"
            }
            slider.style.transform= "translatex("+ i +"%)"
            console.log(i)
        })
        document.getElementById("dot2").addEventListener("click", function(){
            if(i==-100){
                i= -33.33
                slide1.style.transform= "translatex(400%)"
                slide2.style.transform= "translatex(0)"
            }
            else if(i==66.67){
                i=100
                slide2.style.transform= "translatex(-400%)"
            }else if(i==133.33){
                i=100
            }else {
                i= -33.33
                slide2.style.transform= "translatex(0)"
                slide3.style.transform= "translatex(0)"
                slide4.style.transform= "translatex(0)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
        document.getElementById("dot3").addEventListener("click", function(){
            if(i==33.33){
                i= 66.67
                slide3.style.transform= "translatex(-400%)"
            }else if(i==100){
                i=66.67
                slide1.style.transform= "translatex(0)"
            }
            else{
                i= -66.67
                slide1.style.transform= "translatex(400%)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
        document.getElementById("dot4").addEventListener("click", function(){
            if(i==0){
                i= 33.33
                slide4.style.transform= "translatex(-400%)"
            }else if(i==66.67){
                i= 33.33
                slide2.style.transform= "translatex(0)"
            }else{
                i= -100
                slide4.style.transform= "translatex(0)"
                slide1.style.transform= "translatex(400%)"
                slide2.style.transform= "translatex(400%)"
                slide3.style.transform= "translatex(0)"
            }
            slider.style.transform= "translatex("+ i +"%)"
        })
    
    }
},100)
let dots= document.querySelectorAll(".dots")
dots.forEach(function(dot){
    dot.addEventListener("click", ()=>{
        removeDot()
        dot.classList.add("red-dot")
    })
})
function removeDot() {
    dots.forEach((dot)=>{
        dot.classList.remove("red-dot")
    })
}