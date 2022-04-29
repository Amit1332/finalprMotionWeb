// gsap.set("#banner",{
//     top:"55vw"
// })


gsap.to("#banner",{
    scrollTrigger:{
        trigger:".two",
        start:"top 95%",
        end:"top 30%",
        scrub:3,
    },
    top:"-65vw",
    duration:4,
    rotate:-170,
    ease:Power1.easeOut
})


// gsap.to("#ftext",{
//     scrollTrigger:{
//         trigger:".two",
//         start:"5% 75%",
//         end:"20% 50%",
//         scrub:2,
//     },
//     duration:4,
//     rotate:240,
//     // ease:Expo.easeIn
// })
// gsap.to("#stext",{
//     scrollTrigger:{
//         trigger:".two",
//         start:"5% 75%",
//         end:"20% 50%",
//         scrub:2,
//     },
//     duration:4,
//     rotate:270,
//     // ease:Expo.easeIn
// })

// gsap.to("#ttext",{
//     scrollTrigger:{
//         trigger:".two",
//         start:"5% 75%",
//         end:"5% 20%",
//         scrub:2,
//         // markers:true
//     },
//     duration:4,
//     rotate:-270,
//     // ease:Expo.easeIn
// })

// gsap.to("#innercir",{
//     scrollTrigger:{
//         trigger:".two",
//         start:"5% 75%",
//         end:"20% 50%",
//         scrub:2,
//     },
//     duration:2,
//     rotate:-360,
//     scale:1.5,
//     color:"black"
    
//     // ease:Expo.easeIn
// })
// gsap.from("#rtext h2",{
//     scrollTrigger:{
//         trigger:".cass",
//         start:"center center",
//         // end:"5% 30%",
//         scrub:2,
//         // markers:true
//     },
//     duration:2,
//     x:100,
//     opacity:0
    
//     // ease:Expo.easeIn
// })

// let tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:".three",
//         start:"center center",
//         // end:"20% 50%",
//         scrub:2,
//         pin:true,
//         markers:true

//     }
// })
// tl.from(".three .photo",{
//     y:300,
//     duration:1,
//     opacity:0,
//     rotate:720,
    
// })
// tl.to(".three .photos",{
//     left:"60%",
//     // duration:1,


// })
// tl.to(".abc",{
//     left:"-100%",
//     // duration:1,


// })
// let tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".four",
//         start:"center center",
//         pin:true,
//         scrub:2
//     }
// })
// tl2.to(".poster",{
//     y:-40,
//     stagger:.3,
//     opacity:1

// } ,"a")
// tl2.to(".poster",{
//     y:0,
//     stagger:.3,
//     delay:1,
//     opacity:0

// } ,"a")

// tl2.to(".manythanks h1 span",{
//     y:-80,
//     stagger:.2
   

// },"a")

// tl2.to(".manythanks h1 span",{
//     y:0,
//     stagger:.2
   

// },"a")

// let sig1=document.querySelector(".sig1")
// let sig2=document.querySelector(".sig2")
// let sig3=document.querySelector(".sig3")
// let sig4=document.querySelector(".sig4")


// document.querySelector("#first").addEventListener("mousemove",function(dets){
//     sig1.style.left= `${dets.clientX}px`
//     sig1.style.top= `${dets.clientY}px`
//     sig1.style.display="block"
    
  

// })
// document.querySelector("#first").addEventListener("mouseleave",function(dets){
//     sig1.style.left= `${dets.clientX}px`
//     sig1.style.top= `${dets.clientY}px`
//     sig1.style.display="none"

  

// })


// document.querySelector("#second").addEventListener("mousemove",function(dets){
//     sig2.style.left= `${dets.clientX}px`
//     sig2.style.top= `${dets.clientY}px`
//     sig2.style.display="block"
    


  

// })
// document.querySelector("#second").addEventListener("mouseleave",function(dets){
//     sig2.style.left= `${dets.clientX}px`
//     sig2.style.top= `${dets.clientY}px`
//     sig2.style.display="none"
   

  

// })
// document.querySelector("#third").addEventListener("mousemove",function(dets){
//     sig3.style.left= `${dets.clientX}px`
//     sig3.style.top= `${dets.clientY}px`
//     sig3.style.display="block"


  

// })
// document.querySelector("#third").addEventListener("mouseleave",function(dets){
//     sig3.style.left= `${dets.clientX}px`
//     sig3.style.top= `${dets.clientY}px`
//     sig3.style.display="none"

  

// })


// let audio =document.querySelector("audio")
// document.querySelector(".ri-medal-line").addEventListener("click",function(){
//     audio.play()
//     this.style.color="yellow"
//     this.style.transform="scale(1.2)"
// })
// document.querySelector(".ri-medal-line").addEventListener("mouseleave",function(){
//     audio.pause()
//     this.style.color="crimson"
//     this.style.transform="scale(1)"


// })


// document.querySelectorAll(".ttxt h2").forEach(element => {
//     element.addEventListener("mousemove",function(dets){
//             gsap.to(".img-1",{
                
//             x:dets.target.dataset.index*-100 + "%",
//             ease:Expo.easeOut,
//             duration:1.5,
//             opacity:1
//             })
//     })
//     element.addEventListener("mouseleave",function(dets){
//         gsap.to(".img-1",{
//         opacity:0
//         })
// })
   
// });



ScrollTrigger.create({
    onUpdate:function myfuck(dets){
      gsap.to(".prg",{
          width:Math.floor(dets.progress*100)+'%'
      })
    }
})






























