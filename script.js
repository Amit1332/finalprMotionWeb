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
    top:"-15vw",
    duration:4,
    rotate:-170,
    ease:Power1.easeOut
})


gsap.to("#ftext",{
    scrollTrigger:{
        trigger:".two",
        start:"5% 75%",
        end:"20% 50%",
        scrub:2,
    },
    duration:4,
    rotate:240,
    // ease:Expo.easeIn
})
gsap.to("#stext",{
    scrollTrigger:{
        trigger:".two",
        start:"5% 75%",
        end:"20% 50%",
        scrub:2,
    },
    duration:4,
    rotate:270,
    // ease:Expo.easeIn
})

gsap.to("#ttext",{
    scrollTrigger:{
        trigger:".two",
        start:"5% 75%",
        end:"5% 20%",
        scrub:2,
        // markers:true
    },
    duration:4,
    rotate:-270,
    // ease:Expo.easeIn
})

gsap.to("#innercir",{
    scrollTrigger:{
        trigger:".two",
        start:"5% 75%",
        end:"20% 50%",
        scrub:2,
    },
    duration:2,
    rotate:-360,
    scale:1.5,
    color:"black"
    
    // ease:Expo.easeIn
})
gsap.from("#rtext h2",{
    scrollTrigger:{
        trigger:".two",
        start:"5% 75%",
        end:"5% 30%",
        scrub:2,
        // markers:true
    },
    duration:2,
    x:300,
    opacity:0
    
    // ease:Expo.easeIn
})


gsap.from(".three .photo",{
    scrollTrigger:{
        trigger:".two",
        start:"40% 70%",
        end:"20% 50%",
        scrub:2,
        // markers:true
    },
    y:300,
    duration:3,
    opacity:0,
    rotate:360,
   
    
    // ease:Expo.easeIn
})
// gsap.to(".three .photos",{
//     scrollTrigger:{
//         trigger:".two",
//         start:"40% 69%",
//         end:"60% 50%",
//         scrub:2,
//         markers:true
//     },
    
    
//     // left:"50%",
//    marginLeft:"0vw",
//     duration:3,
//     marginRight:"0vw",
   
    
//     // ease:Expo.easeIn
// })


























