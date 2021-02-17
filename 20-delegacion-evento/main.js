const gallery = document.getElementById('gallery')
const galleryItems = document.getElementsByClassName('gallery__item')

gallery.addEventListener('click', (e) => {
    e.target.classList.add('red')
})