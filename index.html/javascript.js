const cardContainers = [...document.querySelectorAll('.cardcontainer')];
const nxtBtn = [...document.querySelectorAll('.nextbtn')];
const preBtn = [...document.querySelectorAll('.prebtn')];

cardContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', ()=> {
 item.scrollLeft += containerWidth;

    })

    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
    })
    
});


  
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Starting
showSlide(currentIndex);
setInterval(nextSlide, 5000);




// Firebase


let Usercreds = JSON.parse(sessionStorage.getItem("user-creds"))
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"))
let button23 = document.getElementById("signinup")
let GreetHead = document.getElementById('greetings');
let Signout = () => {
    sessionStorage.removeItem["user-creds"]
    sessionStorage.removeItem("user-info")
    window.location.href = 'Signin.html'

}
let Checkcred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = 'SignUp.html'
      else{
        GreetHead.innerHTML = `Welcome!! ${UserInfo.firstname }`;
      }
    
    
}
window.addEventListener('load', Checkcred);
// button23.addEventListener('click', Signout)

// Gretings

let MsgHead = document.getElementById('msg');

let SignoutBtn = document.getElementById('signoutbutton')

// MsgHead.innerText = `user with email "${Usercreds.email}" logged in`;

