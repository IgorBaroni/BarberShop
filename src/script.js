// Animações
gsap.registerPlugin(ScrollTrigger);

gsap.to('.logo', {opacity: 1, duration: 1, delay: 0.5})
gsap.to('.navbar .nav_item', {opacity: 1, duration: 1, delay: 0.6, stagger: 0.1})

gsap.to('.home .content .title', {opacity: 1, duration: 1, delay: 1})
gsap.to('.home .content .description', {opacity: 1, duration: 1, delay: 1.2})
gsap.to('.home .content .btn ', {opacity: 1, duration: 1, delay: 1.4})
gsap.to('.home .image', {opacity: 1, duration: 1, delay: 1.2})

  const fadeInAnimationCortes = gsap.timeline({
    scrollTrigger: {
      trigger: ".cortes", 
      start: "top 160%", 
      end: "top 30%", 
      scrub: 1,
      once: true
    }
  });

  fadeInAnimationCortes.to('.cortes', {opacity: 1});
  fadeInAnimationCortes.to('.cortes .content', {opacity: 1});
  fadeInAnimationCortes.to('.cortes .cards .card', {opacity: 1});

  const fadeInAnimationLocal = gsap.timeline({
    scrollTrigger: {
      trigger: ".local", 
      start: "top 80%", 
      end: "top 40%", 
      scrub: 1,
      once: true
    }
  });

  fadeInAnimationLocal.to('.local .content', {opacity: 1});
  fadeInAnimationLocal.to('.local .content .mapa', {opacity: 1, stagger: 0.2});

  const fadeInAnimationContato = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact", 
      start: "top 40%", 
      end: "top 40%", 
      scrub: 1,
      once: true
    }
  });

  fadeInAnimationContato.to('.contact .content', {opacity: 1, delay: 3});
  fadeInAnimationContato.to('.contact .content .forms', {opacity: 1, delay: 3});




// Navbar

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu').addEventListener('click', () =>{
    navbar.classList.add('active');
})

document.querySelector('#close').addEventListener('click', () =>{
    navbar.classList.remove('active');
})



// Início

document.getElementById('inicio').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

document.getElementById("scheduleButton").addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth"
    });
})

// Cortes

document.getElementById('corte').addEventListener('click', () => {
    document.getElementById('cortes').scrollIntoView({
        behavior: "smooth"
    });
});

// Localização

document.getElementById('localizacao').addEventListener('click', () => {
    document.getElementById('local').scrollIntoView({
        behavior: "smooth"
    });
});

// Contato

document.getElementById('contato').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth"
    });
});

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = (today.getDate()+1).toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

document.getElementById("date").min = getCurrentDate();

document.getElementById("messageButton").addEventListener('click', () => {
    var userName = document.getElementById("userName").value;
    var userDate = document.getElementById("date").value;

    if (!userName || userName.length < 3) {
        alert("Informe um nome válido!");
    }
    else if (!userDate) {
        alert("Informe uma data válida!");
    }
    else {
        userName = capitalizeFirstLetter(userName);
        userDate = document.getElementById("date").value;

        let [year, month, day] = userDate.split("-");
        var formatedDate = `${day}/${month}/${year}`;

        var message = "Olá, meu nome é " + encodeURIComponent(userName) + " e gostaria de agendar um corte em " + formatedDate + ".";

        var phoneNumber = "55123456789";

        var link = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;

        window.open(link, '_blank');

    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

});
