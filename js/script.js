//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top< offset +height){
            //active navbar Links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })



    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

}



//Slide Control

// document.getElementById('nextBtn').onclick=()=>{
//     let lists = document.querySelectorAll('.card');
//     document.getElementById('slide').appendChild(lists[0]);
// }

document.getElementById('nextBtn').onclick = () => {
    let slide = document.getElementById('slide');
    let firstCard = slide.querySelector('.card');
    slide.appendChild(firstCard.cloneNode(true));
    slide.removeChild(firstCard);
}

  
document.getElementById('preBtn').onclick =()=>{
    let lists = document.querySelectorAll('.card');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


// document.getElementById('preBtn').onclick = () => {
//     let slide = document.getElementById('slide');
//     let lastCard = slide.querySelector('.card:last-child');
//     slide.insertBefore(lastCard.cloneNode(true), slide.firstChild);
//     slide.removeChild(lastCard);
//   }
  
