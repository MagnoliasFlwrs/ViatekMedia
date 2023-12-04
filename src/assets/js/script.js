//burger-menu

const openBurgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBurgerBtns = document.querySelectorAll('.close-menu');
const body = document.querySelector('body')

function showMobileMenu() {
    openBurgerBtn.addEventListener('click' , ()=> {
        mobileMenu.classList.add('open');
        body.style.overflow = 'hidden';
    })
}
function closeMobileMenu() {
    closeBurgerBtns.forEach(el=> {
        el.addEventListener('click' , ()=> {
            mobileMenu.classList.remove('open');
            body.style.overflow = 'auto';
        })
    })
}
showMobileMenu();
closeMobileMenu();

//burger submenu
const dropdownLink = document.querySelector('.dropright');
const dropdown2lvlLinks = document.querySelectorAll('.dropright-2lvl');
const mobileBack = document.querySelector('.back');
const mobileBack2lvl = document.querySelectorAll('.back2lvl');

console.log(mobileBack)

function openBurgerSubmenu() {
    dropdownLink.addEventListener('click' , ()=> {
        dropdownLink.querySelector('.submenu').classList.add('active');
    })
    dropdown2lvlLinks.forEach(el => {
        el.addEventListener('click' , (e)=>{
            e.target.closest('li').querySelector('.submenu2lvl').classList.add('active');
        })
    })
}

function goBackBurgerSubmenu(){
    mobileBack.addEventListener('click' , (e)=>{
        e.stopPropagation();
        dropdownLink.querySelector('.submenu').classList.remove('active')
    })
    mobileBack2lvl.forEach(el=> {
        el.addEventListener('click' , (e)=>{
            e.stopPropagation();
            e.target.closest('li').querySelector('.submenu2lvl').classList.remove('active');
        })
    })
}
openBurgerSubmenu();
goBackBurgerSubmenu();


let technologySwiper = document.querySelector('.technology-swiper');
if (technologySwiper) {
    const swiper = new Swiper(technologySwiper, {
        loop: true,
        navigation: {
            nextEl: '.tech-btn-next',
            prevEl: '.tech-btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            450: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5.5,
                spaceBetween: 20,
            },
            1100: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 7,
                spaceBetween: 30,
            }
        }
    });
}

let factsSwiper = document.querySelector('.facts-swiper');

if (factsSwiper) {
    const swiper = new Swiper(factsSwiper, {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}

let customersSwiper = document.querySelector('.customers-swiper');

if (customersSwiper) {
    const swiper = new Swiper(customersSwiper, {
        loop: true,
        navigation: {
            nextEl: '.customers-btn-next',
            prevEl: '.customers-btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            450: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });
}
let vacanciesSwiper =  document.querySelector('.vacancies-swiper');
if (vacanciesSwiper) {
    const swiper = new Swiper(vacanciesSwiper, {
        loop: true,
        navigation: {
            nextEl: '.vacancies-button-next',
            prevEl: '.vacancies-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
}
let plusSwiper = document.querySelector('.plus-swiper');
if (plusSwiper) {
    let swiper = new Swiper(plusSwiper, {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
      });
}

let caseSwiper = document.querySelector('.case-swiper');
if (caseSwiper) {
    let swiper = new Swiper(caseSwiper, {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            726: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
      });
}
let shopPlusSwiper = document.querySelector('.shop-plus-swiper');
if (shopPlusSwiper) {
    let swiper = new Swiper(shopPlusSwiper, {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".shop-plus-next",
          prevEl: ".shop-plus-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1250: {
                slidesPerView: 6,
                spaceBetween: 20,
            }
        }
      });
}

let integrationPlusSwiper = document.querySelector('.integration-plus-swiper');
if (integrationPlusSwiper) {
    let swiper = new Swiper(integrationPlusSwiper, {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
      });
}
let priceSwiper = document.querySelector('.price-swiper');
if (priceSwiper) {
    let swiper = new Swiper(priceSwiper, {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".price-button-next",
          prevEl: ".price-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
      });
}
//contact-form

const displayFormBtn = document.querySelector('.display-form-btn');
const contactsForm = document.querySelector('.contact-us-form form');
const contactFormInputs = document.querySelectorAll('.contact-us-form form input');
const contactsFormTextarea = document.querySelector('.contact-us-form form textarea');

if (displayFormBtn && contactsForm) {
    displayFormBtn.addEventListener('click' , ()=> {
        let div = displayFormBtn.closest('.form-wrapper-head');
        div.classList.toggle('active');
        contactsForm.classList.toggle('active');
    })
    contactFormInputs.forEach(el=> {
        el.addEventListener('input' , ()=> {
            if (!el.classList.contains('agreement-check')) {
                if (el.value ) {
                    el.nextElementSibling.style.display='none';
                }
                else {
                    el.nextElementSibling.style.display='block';
                }
            }

        })
    })
    contactsFormTextarea.addEventListener('input' , ()=> {
        if (contactsFormTextarea.value) {
            contactsFormTextarea.nextElementSibling.style.display='none';
        }
        else {
            contactsFormTextarea.nextElementSibling.style.display='block';
        }
    })
}


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animate-row');
  for (let elm of elements) {
    observer.observe(elm);
  }

  window.onload = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('element-show');

                observer.unobserve(entry.target);
            }
        })
    }, options)
    let elements = document.querySelectorAll('.animate-row');
    elements.forEach(i => {
        observer.observe(i)
    })
}