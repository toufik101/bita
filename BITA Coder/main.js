const Navlist = document.querySelector('.nav__list');
const navIcon1 = document.querySelector('.nav__icon__1');
const navIcon2 = document.querySelector('.nav__icon__2');
navIcon1.addEventListener('click',()=>{
    navIcon2.style.display = 'block';
    navIcon1.style.display = 'none';
    Navlist.style.display = 'block';
});
navIcon2.addEventListener('click',()=>{
    navIcon2.style.display = 'none';
    navIcon1.style.display = 'block';
    Navlist.style.display = 'none';

})

//>>--------------------/       Navber   END    /--------------------->>


// circles skills
