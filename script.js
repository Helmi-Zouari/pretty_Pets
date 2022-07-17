function select(event) {
    let elements= document.getElementsByClassName("animals")
    // console.log(elements.length)
    for(i=0; i<2; i++){
        elements[i].classList.remove("selected_animal")
    }
    event.target.classList.add("selected_animal")
    
    
    // let classes = event.target.classList
    // // console.log(classes);
    // console.log(elements)
}



// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");}


// let hamburgerIcon = document.querySelector('.burger');
// let menuNav = document.querySelector('.main-nav');

// hamburgerIcon.addEventListener('click', () => {
// hamburgerIcon.classList.toggle('open');
// menuNav.classList.toggle('open-nav');
// console.log(menuNav)
// });


let links = document.querySelectorAll('.main-nav > ul > li > a , .link');

links.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.textDecorationLine  = "underline";
        
    });

    link.addEventListener('mouseout', (event) => {
        event.target.style.textDecorationLine = "none";
        
    });
})


let meet_your_match = document.querySelectorAll('.widgets.is-searchResults > .widget img');

meet_your_match.forEach((widget) => {
    widget.addEventListener('mousemove', (event) => {
        event.target.style.transform = "scale(1.1)";
    });

    widget.addEventListener('mouseout', (event) => {
        event.target.style.transform = "scale(1)";
    })
})





let how_it_work = document.querySelectorAll('.widgets.is-howItWorks > .widget img');

how_it_work.forEach((widget) => {
    widget.addEventListener('mousemove', (event) => {
        event.target.style.transform = "scale(1.1)";
    });

    widget.addEventListener('mouseout', (event) => {
        event.target.style.transform = "scale(1)";
    })
})




let trans_pic = document.querySelectorAll('.stories .widgets > .widget img');

trans_pic.forEach((widget) => {
    widget.addEventListener('mousemove', (event) => {
        event.target.style.transform = "scale(1.1)";
    });

    widget.addEventListener('mouseout', (event) => {
        event.target.style.transform = "scale(1)";
    })
})




let search = document.querySelectorAll('button.is-primary');
search.forEach((widget) => {
    widget.addEventListener('mousemove', (event) => {
        event.target.style.transform = "skew(2.5deg, 2.5deg)";
    });

    widget.addEventListener('mouseout', (event) => {
        event.target.style.transform = "skew(0,0)";
    })
})


var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



var btnsecond = document.getElementById("button is-secondary");
btnsecond.forEach((widget) => {
    widget.addEventListener('mouseclick', (event) => {
        event.target.style.transform = "scale(1.1)";
    });
    btnsecond.addEventListener('mouseout', (event) => {
        event.target.style.textDecorationLine = "none";
        
    }); })