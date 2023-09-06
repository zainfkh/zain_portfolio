
    const cursor = new MouseFollower({
        container: document.body,
        speed: 0.3
    });
    
var tl = gsap.timeline();
tl.from('nav', {
    autoAlpha: 0,
    duration: 3,
    y: -100
})
tl.to('.page1 h1', {
    transform: 'translateX(-70%)',
    fontWeight: '100',
    scrollTrigger: {
        trigger: '.page1',
        sroller: 'body',
        //markers:true,
        start: 'top 0%',
        end: "top -200%",
        scrub: 2,
        pin: true
    }
})
tl.to('.page2 video', {
    width: '80%',
    scrollTrigger: {
        trigger: '.page2',
        sroller: 'body',
        // markers:true,
        end: "top -200%",
        scrub: 2,

    }
}, 'anim')
tl.to('.page1', {
    backgroundColor: 'white',
    scrollTrigger: {
        trigger: '.page2',
        //  markers:true,
        start: 'top 100%',
        end: "top -200%",
        toggleActions: 'play none none reverse',
    }
}, 'anim')
tl.to('#main', {
    backgroundColor: 'black',
    color: 'white',
    scrollTrigger: {
        trigger: '.page6',
        // markers:true,
        start: 'top 0%',
        end: "top 0%",
        scrub: 1,
        toggleActions: 'play none none reverse',
    }
})
gsap.fromTo('.page6 h1',{
    opacity:0,
},{
    opacity:1,
    duration:3,
    delay:1,
    scrollTrigger: {
        trigger: '.page6 h1',
    }
})

gsap.fromTo('.page3 img, .page3 p',{
 x:-100,
}, {
    opacity: 1,
    x:0,
    scrollTrigger: {
        trigger: '.page3',
        pin: true,
        scrub: true,
    }
})
gsap.fromTo('.elem', {
    opacity: 0,
    scale: 0.1,
}, {
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.elem', // The element that triggers the animation
        start: 'top 60%', // The animation starts when the top of the element is 80% in view
        // The animation ends when the bottom of the element is 20% in view
        toggleActions: 'play none none reverse', // Play the animation when it enters the trigger area, and reverse it when it leaves
        // Add any other ScrollTrigger options you want to use
    },
    stagger: {
        amount: 1
    },
});
gsap.from('.work__title', {
    opacity: 0,
    x: -100,
    scrollTrigger: {
        trigger: '.work__title',
        toggleActions: 'play none none reverse',
        start: 'top 70%',
    }
})
gsap.from('.page5 h4', {
    x:-100,
    duration:1,
    scrollTrigger: {
        trigger: '.page5',
        toggleActions: 'play none none reverse',
    }
},'jeo')
gsap.from('.techs', {
    autoAlpha:0,
   y:-150,
   duration:1,
    scrollTrigger: {
        trigger: '.page5',
        toggleActions: 'play none none reverse',
    }
},'jeo')
gsap.from('.page3 h1',{
    x:-100,
    scrollTrigger:{
        trigger:'.page3',
        toggleActions: 'play none none reverse',
    }
})
/*gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.create({
    trigger:".page6",
    start:'top top',
   // markers:true,
    end:'+=500px',
    pin:true,
    pinSpacing:false
})*/


var elem = document.querySelectorAll('.elem')
document.querySelectorAll('.elem').forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)
        })
    })
})
var elem = document.querySelectorAll('.elem')
document.querySelectorAll('.elem').forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            ease: Power3,
        })
    })
})
