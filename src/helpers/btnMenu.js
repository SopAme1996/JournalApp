export const btnMenu = () => {
    const btn_menu = document.getElementById('menu');
    const sideBar = document.getElementById('journal');
    btn_menu.classList.forEach(valor => {
        if (valor === 'fa-arrow-alt-circle-right') {
            btn_menu.className = 'fa fa-arrow-alt-circle-left';
            sideBar.className = 'journal__sidebar openMenu';
        } else if (valor === 'fa-arrow-alt-circle-left') {
            btn_menu.className = 'fa fa-arrow-alt-circle-right';
            sideBar.className = 'journal__sidebar';
        }
    });


}