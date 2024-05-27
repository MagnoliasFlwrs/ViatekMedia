// gallery-modal
const galleryModal = document.querySelector('.gallery-modal');
const galleryModalImage = document.querySelector('.gallery-body .gallery-img img');
const galleryModalCloseBtn = document.querySelector('.gallery-modal .close-modal span');
const galleryThumbs = document.querySelectorAll('.image-container img');
const overlay = document.querySelector('.overlay')

function showGalleryModal() {
    galleryThumbs.forEach(el=> {
        el.addEventListener('click' , ()=> {
            galleryModalImage.src = el.src;
            galleryModal.classList.add('open');
            overlay.classList.add('open');
        })
    })
}
function closeGalleryModal() {
    galleryModalCloseBtn.addEventListener('click' , ()=> {
        galleryModal.classList.remove('open');
        overlay.classList.remove('open');
    })
    overlay.addEventListener('click' , ()=> {
        galleryModal.classList.remove('open');
        overlay.classList.remove('open');
    })
}

showGalleryModal();
closeGalleryModal();