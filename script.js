
function home() {
    gsap.set(".slidesm",{
    scale:5
})  
    var tl =  gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end : "bottom bottom",
            scrub:1
    }
    })
    
    tl.to(".vdodiv",{
        "--clip":"0%",
        ease:Power2,
       
        duration:2
    },"a1").to(".slidesm",{
       scale:1,
        ease:Power2,
        duration:2
    },"a1")
    .to(".lsm",{
       xPercent:-10,
       ease:Power2,
       stagger:0.3
     
     },"a2")
    .to(".rsm",{
       xPercent:20,
       ease:Power2,
       stagger:0.03
     
     },"a2")
    
    
}
home()
function p3() {
   gsap.to(".slide",{
    scrollTrigger:{
        trigger:".real",
        start:"top top",
        end : "bottom bottom", 
        markers:true,
        scrub:1
    },
    xPercent:-310,
    ease:Power2
   }) 
}
p3()
document.querySelectorAll(".listelem").forEach((el)=>{
    el.addEventListener("mousemove",function(dets){
    gsap.to(this.querySelector(".pic"),{
        opacity:1,
        x: gsap.utils.mapRange(0, window.innerWidth,-200,200,dets.clientX ),
        ease:Power2,
        duration:.5
    })
    })
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".pic"),{
            opacity:0,
        ease:Power2,
        duration:0.5
        })
    })
});
