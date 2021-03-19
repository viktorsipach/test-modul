window.onload = () => {
    addClickMenuHandler();
};

const addClickMenuHandler = () => {
    document.querySelector('.navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation__link')) {
            let color = e.target.dataset.color;
            let clickedLink = e.target;
            removeSelectedLink();
            selectClickedLink(clickedLink, color);
        }
    })
};

const removeSelectedLink = () => {
    let links = document.querySelectorAll('.navigation__link');
    links.forEach(link => {
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        link.classList.remove('active_link');
    });
};

const selectClickedLink = (link, color) => {
    link.classList.add('active_link');
    const activeLink = document.querySelector('.active_link');
    const text = activeLink.classList[1];
    activeLink.style.backgroundColor = color;
    changeAside(text, color);
   
};

const changeAside = (text,color) => {
    const asideColor = document.querySelector('.aside__color');
    const asideText = document.querySelector('.aside__text');
    asideColor.style.backgroundColor = color;
    asideText.innerHTML = text;
    asideText.style.color = color;
}
