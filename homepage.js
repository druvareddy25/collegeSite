const panels=document.querySelectorAll('.panel')


panels.forEach(panel=>{
    panel.addEventListener('mousemove',()=>{
        removeActiveclasses()
        panel.classList.add('active')
    })
})

function removeActiveclasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}

document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slides1[slideIndex-1].style.display = "block";  
}
function scrollFunction1() {
    let e = document.getElementsByClassName("aboutus");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }
  function scrollFunction2() {
    let e = document.getElementById("aboutus");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'center'
    });
  }
  document.getElementById("form").reset();

  window.addEventListener("load", function() {
    const form = document.getElementById('form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });