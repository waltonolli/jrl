function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById("menu-bar");
  const targetElement = event.target;


  if (!menu.contains(targetElement)) {
    menuOnClick()
    menu.classList.remove('ativo');
    console.log('Menu fechado!');
  }
});