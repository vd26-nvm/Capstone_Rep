window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
        nav.style.backgroundColor = '#212227';

      } else {
        nav.style.backgroundColor = 'transparent';

      }
  
   
  });