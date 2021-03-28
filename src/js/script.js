'use strict';

import "../scss/style.scss";

const headerRight = document.querySelector('.header__right'),
      promo = document.querySelector('.promo'),
      carts = document.querySelectorAll('.cart');

import ShowMenu from './modules/ShowMenu';
import RemoveCart from './modules/RemoveCart';

new ShowMenu(headerRight, promo);
new RemoveCart(carts, '.cart__link-svg');