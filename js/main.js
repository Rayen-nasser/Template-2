document.getElementById('toggle-menu').addEventListener('click', function() {
  var menu = document.getElementById("toggle-menu");
  menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  var anchorElements = document.querySelectorAll('.sections li a');

  anchorElements.forEach(function(element) {
    element.addEventListener('click', function(event) {
      var menu = document.getElementById("toggle-menu");
      menu.classList.remove("active");
    });
  });
});


let sections = document.querySelectorAll(".sections li a")

sections.forEach((a)=>{
  a.addEventListener("click",sectionsActive)
})

function sectionsActive(){
    sections.forEach((a)=>{
        a.classList.remove("active")
        this.classList.add("active")
    })
}

///////// profolio (filter images)
document.addEventListener("DOMContentLoaded", function() {
  var shuffleItems = document.querySelectorAll(".shuffle li");
  var imageBoxes = document.querySelectorAll(".imgs-container .box img");

  shuffleItems.forEach(function(item) {
    item.addEventListener("click", function() {
      var category = item.getAttribute("data-cat");

      // Remove active class from all shuffle items
      shuffleItems.forEach(function(item) {
        item.classList.remove("active");
      });
      // Add active class to the clicked shuffle item
      item.classList.add("active");
      // Show or hide image boxes based on the selected category
      imageBoxes.forEach(function(box) {
        if (category === "all" || box.classList.contains(category)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
////////////////// slider 

document.addEventListener("DOMContentLoaded", function() {
    var images = ['./image/disgn-feature1.jpeg', './image/disgn-feature2.jpeg','./image/disgn-feature3.jpeg', './image/disgn-feature4.jpeg','./image/disgn-feature5.jpeg'];
    var currentImageIndex = 0;
    var landing = document.querySelector('.landing');
    var bullets = document.querySelectorAll('.bullets li');
    var changeBackgroundIcons = document.querySelectorAll('.change-background');
  
    function changeBackgroundImage() {
      landing.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
      landing.style.transition = " 1s"
      bullets.forEach(function(bullet, index) {
        bullet.classList.remove('active');
        if (index === currentImageIndex) {
          bullet.classList.add('active');
        }
      });
    }
  
    changeBackgroundIcons.forEach(function(icon) {
      icon.addEventListener('click', function() {
        if (icon.classList.contains('fa-angle-right')) {
          currentImageIndex = (currentImageIndex + 1) % images.length;
        } else {
          currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }
        changeBackgroundImage();
      });
    });
  
    bullets.forEach(function(bullet, index) {
      bullet.addEventListener('click', function() {
        currentImageIndex = index;
        changeBackgroundImage();
      });
    });
  
    changeBackgroundImage(); // initial background image
  });
  

