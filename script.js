(function(){
  // mobile menu toggle
  var menuBtn = document.getElementById('menuBtn');
  var mobilePanel = document.getElementById('mobilePanel');
  menuBtn.addEventListener('click', function(){
    var open = mobilePanel.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobilePanel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobilePanel.classList.remove('open'); });
  });

  // scroll reveal — single quiet fade-in per section
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  // active nav link on scroll
  var sectionIds = ['home','about','work','web3','skills','contact'];
  var sections = sectionIds.map(function(id){ return document.getElementById(id); });
  var navLinks = document.querySelectorAll('nav.links a');
  if('IntersectionObserver' in window){
    var navIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var id = entry.target.id;
          navLinks.forEach(function(link){
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, {rootMargin:'-45% 0px -50% 0px'});
    sections.forEach(function(section){ if(section) navIo.observe(section); });
  }
})();
