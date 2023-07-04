function scrollToAbout(event) {
    event.preventDefault();
    var aboutSection = document.querySelector('#about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function scrollToAbout(event) {
    event.preventDefault();
    var contactSection = document.querySelector('#contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function scrollToAbout(event) {
    event.preventDefault();
    var educationSection = document.querySelector('#eduaction-section');
    educationSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  window.onscroll = function(){ scrollFunction()};

    function scrollFunction(){
      var scrollToTopBtn = document.getElementById("scrollToTopbtn");
      if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200){
        scrollToTopBtn.style.display="block";
      }else{
        scrollToTopBtn.style.display="none";
      }
    }
    function scrollToTop(){
      document.documentElement.scrollTop=0;
      document.body.scrollTop = 0;
    }