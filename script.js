
function home() {
    gsap.set(".slidesm", {
        scale: 5
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    })

    tl.to(".vdodiv", {
        "--clip": "0%",
        ease: Power2,

        duration: 2
    }, "a1").to(".slidesm", {
        scale: 1,
        ease: Power2,
        duration: 2
    }, "a1")
        .to(".lsm", {
            xPercent: -10,
            ease: Power2,
            stagger: 0.3

        }, "a2")
        .to(".rsm", {
            xPercent: 20,
            ease: Power2,
            stagger: 0.03

        }, "a2")


}
home()
function p3() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",

            scrub: 1
        },
        xPercent: -310,
        ease: Power2
    })
}
p3()
function team() {
    gsap.set(".pic",{
        scale:0
    } )
    document.querySelectorAll(".listelem").forEach((el) => {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".pic"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power2,
                duration: .5,
                scale: 1
            })
        })
        el.addEventListener("mouseleave", function () {
            gsap.to(this.querySelector(".pic"), {
                opacity: 0,
                ease: Power2,
                duration: 0.5,
                scale: 0
            })
        })
    });
}
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
team()
function capsules() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 60%",
            markers: false,
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}
capsules()
function para() {


    let clutter = ""
    document.querySelector(".textPara").textContent.split("").forEach((el) => {
        if (el == " ") {
            clutter += `<span></span>`
        }
        clutter += `<span>${el}</span>`
    })

    document.querySelector(".textPara").innerHTML = clutter
    gsap.set(".textPara span", {
        opacity: .1
    })
    gsap.to(".textPara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 50%",
            // markers:true,
            end: "bottom 85%",
            scrub: 2

        },
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: Power4

    })
    ///

    var clutter2 = ""
    document.querySelector(".textPara2").textContent.split("").forEach((el) => {
        if (el == " ") {
            clutter2 += `<span>&nbsp</span>`
        }
        clutter2 += `<span>${el}</span>`
    })

    document.querySelector(".textPara2").innerHTML = clutter
    gsap.set(".textPara2 span", {
        opacity: .1
    })
    gsap.to(".textPara2 span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top -70%",
            markers: false,
            end: "bottom -30%",
            scrub: 2

        },
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: Power4

    })
}
para()
function color() {
    document.querySelectorAll(".section")
        .forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 50%",

                end: "bottom 50%",
                onEnter: () => {
                    document.body.setAttribute("theme", el.dataset.color)
                },
                onEnterBack: (e) => {
                    document.body.setAttribute("theme", el.dataset.color)
                },
            })
        })
}
color()
function box() {
    var box = document.querySelectorAll(".box")
    box.forEach((el) => {

        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 60%",
                // markers:true,
                end: "bottom 50%",
                scrub: 1
            },
            scale: 1,
            ease: Power2,
            duration: .1, backgroundColor: 'black',
            color: 'white'
        })



        // el.addEventListener("mouseenter",()=>{
        //     gsap.to(el, 
        //         { duration: .5, backgroundColor: 'black',
        //     color: 'white'})
        // })
        // el.addEventListener("mouseleave",()=>{
        //     gsap.to(el, 
        //         { duration: .5, backgroundColor: '#AEDEE0',
        //     color: 'black'})
        // })
    })
}
box()