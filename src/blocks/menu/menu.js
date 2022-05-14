import './menu.css'
import MainHandler from '../main/MainHandler'
import Overlay from '../main/overlay/overlay'

class Menu {
  constructor(
    {
      control, items, menu,
    },
    overlayObject,
  ) {
    this.menuOpened = false;
    this.overlay = overlayObject;
    this.menuItems = document.querySelector(items);
    this.menuControl = document.querySelector(control);
    this.menu = document.querySelector(menu);
    this.menuMobile = Array.from(this.menu.classList).includes('menu_black');
  }

  click() {
    if (this.menuOpened) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.menuControl.classList.add('menu__mobile_close');
    if (this.menuMobile) this.menuControl.classList.add('menu__mobile_close_black');
    this.overlay.show()
    this.menu.classList.add(!this.menuMobile ? 'menu_on-top' : 'menu_on-top_black');
    this.menuItems.classList.add('menu__items-list_show');
    if (this.menuMobile) this.menuItems.style.background = 'rgba(255,255,255,1)'
    this.menuOpened = true;
  }

  close() {
    this.menuControl.classList.remove('menu__mobile_close');
    this.overlay.hide()
    this.menu.classList.remove('menu_on-top');
    this.menu.classList.remove('menu_on-top_black');
    this.menuItems.classList.remove('menu__items-list_show');
    if (this.menuMobile) this.menuItems.style.background = 'rgba(255,255,255,0)'
    this.menuOpened = false;
  }
}

const overlay = new Overlay();

export const mainMenu = new Menu(
  {
    control: '.menu__mobile',
    items: '.menu__items-list',
    menu: '.menu',
  },
  overlay,
);

export const menuHandler = new MainHandler(
  document.querySelector('.menu__mobile'),
  {
    click: () => {
      mainMenu.click()
    },
  },
);
