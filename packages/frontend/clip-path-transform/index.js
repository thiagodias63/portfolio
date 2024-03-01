const profilePhoto = document.querySelector('.profile-photo');
window.addEventListener('scroll', (e) => {
    console.log(e);
    const scrollY = window.scrollY;
    if (scrollY > 150) profilePhoto.style.clipPath = `circle(${scrollY}px at center)`
});