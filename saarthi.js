// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
   
    anchorLinks.forEach(function(anchorLink) {
      anchorLink.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });
 
  // Add active class to the current navigation item
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
   
    window.addEventListener("scroll", function() {
      let current = "";
     
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
       
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
     
      const navItems = document.querySelectorAll("nav ul li a");
      navItems.forEach(function(item) {
        item.classList.remove("active");
        if (item.getAttribute("href").slice(1) === current) {
          item.classList.add("active");
        }
      });
    });
  });

  //popup
  let popup=document.getElementById("popup");
  function openPopup(){
    popup.classList.add("open-popup");
    
  }
  