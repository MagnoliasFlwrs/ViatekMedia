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

