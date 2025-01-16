/**
* Template Name: iLanding
* Template URL: https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
* Updated: Nov 12 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


})();


var modal = document.getElementById("myModal");
var bb=document.getElementById('blogg');

var service=1;
var services= [
    {
      "name": "Hardware Sales and Solutions",
      "sub_services": [
        {
          "name": "Computers and Laptops Sales Services",
          "description": "Offering a wide selection of laptops and desktops for business, personal, or educational needs, with extended warranties and reliable after-sales support."
        },
        {
          "name": "High-Performance Gaming Computers",
          "description": "Custom-built gaming rigs optimized for superior performance, speed, and graphics to meet the demands of gaming enthusiasts and professionals."
        }
      ]
    },
    {
      "name": "Networking and Infrastructure",
      "sub_services": [
        {
          "name": "Networking Solutions",
          "description": "Design, installation, and maintenance of reliable network systems to keep your business connected and efficient."
        },
        {
          "name": "NAS (Network-Attached Storage)",
          "description": "Storage solutions to manage, share, and secure your data efficiently for personal or organizational use."
        },
        {
          "name": "CCTV Solutions",
          "description": "Advanced surveillance systems for enhanced security and real-time monitoring."
        },
        {
          "name": "Biometric Solutions",
          "description": "Implementation of fingerprint, facial recognition, and other biometric systems for secure access control."
        }
      ]
    },
    {
      "name": "IT Strategy and Consulting",
      "sub_services": [
        {
          "name": "IT Consulting for New Companies",
          "description": "Strategic guidance for startups to set up IT infrastructure and align technology with business goals."
        },
        {
          "name": "IT Consulting for Existing Companies",
          "description": "Expert advice to upgrade, optimize, and modernize current IT systems for enhanced efficiency."
        }
      ]
    },
    {
      "name": "Software Development and SaaS Solutions",
      "sub_services": [
        {
          "name": "Custom Software Development",
          "description": "Development of dynamic websites, web portals, and bespoke software to suit your business requirements."
        },
        {
          "name": "Mobile App Development",
          "description": "Building robust Android and iOS applications for enhanced customer engagement and operational efficiency."
        },
        {
          "name": "SaaS (Software as a Service)",
          "description": "Cloud-based applications designed for scalability, productivity, and seamless integration into your workflow."
        }
      ]
    },
    {
      "name": "Cloud and DevOps",
      "sub_services": [
        {
          "name": "Cloud Services",
          "description": "Assistance in cloud migration, hosting, and management to enhance scalability and reduce costs."
        },
        {
          "name": "DevOps Solutions",
          "description": "End-to-end CI/CD pipeline setup, automation, and agile practices for faster and reliable software delivery."
        },
        {
          "name": "DevSecOps Services",
          "description": "Integration of security into DevOps pipelines to ensure robust systems with a focus on compliance and protection."
        }
      ]
    },
    {
      "name": "Cybersecurity Solutions",
      "sub_services": [
        {
          "name": "Threat Detection and Prevention",
          "description": "Monitoring and addressing vulnerabilities in real time to keep your data safe."
        },
        {
          "name": "Vulnerability Assessment and Penetration Testing (VAPT)",
          "description": "Identifying and mitigating risks to secure your critical systems."
        },
        {
          "name": "Cybersecurity Training and Awareness",
          "description": "Training employees on best practices to prevent breaches and attacks."
        }
      ]
    }
  ];


// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function showService(val) {
  bb.style.display='none';
  var head=document.getElementById('m-heading');
var list=document.getElementById('service-list');
var mm=document.getElementById('modal-content-t');
mm.style.paddingLeft='1em';
    mm.style.paddingRight='1em';
  if(val==0){
    mm.style.paddingLeft='0px';
    mm.style.paddingRight='0px';
    modal.style.display = "block";
bb.style.height='100%';
bb.style.width='100%';
    list.innerHTML='';
    bb.style.display='block';
    head.innerHTML='Blogs';
    return;
  }
service=val;
head.innerHTML=services[service-1].name;

for(let i=0;i<services[service-1].sub_services.length;i++){
  let li=document.createElement("li");
  let ii=document.createElement("i");
  ii.classList.add(["bi","bi-check-circle-fill"]);
  li.appendChild(ii);
  let bb=document.createElement("b");
  bb.innerHTML=services[service-1].sub_services[i].name;
  li.appendChild(bb);
  let pp=document.createElement("p");
  pp.innerHTML=services[service-1].sub_services[i].description;
  li.appendChild(pp);
              list.appendChild(li);    
             
}
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

// Function to go back (e.g., close the modal and navigate to previous page)
function goBack() {
// Replace with your actual back navigation logic (e.g., window.history.back())
modal.style.display = "none"; 
bb.style.display='none';
// window.history.back(); // Uncomment this line for browser back button functionality
}