var hamMenu = document.getElementById('menu-ham');
var menuList = document.getElementById('link-menu');
var logoShow = document.getElementById('logo-show');
hamMenu.addEventListener('click', showMen);
function showMen(e){
  menuList.style.display = 'flex';
  hamMenu.style.display = 'none';
  logoShow.style.display = 'none';
}
 