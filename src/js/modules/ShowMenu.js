export default class ShowMenu {

    constructor(navClass, promo) {
        this._navClass = navClass;
        this._promo = promo;
        this._linkClose = this._navClass.querySelector('.hamburger-menu__link-close'); //иконка закрытия меню
        this._menuLink = this._navClass.querySelector('.header__label'); //иконка меню
        this._svgColor = this._navClass.querySelector('.header__menu--checked-svg'); //svg-path
        this._checkbox = this._navClass.querySelector('.header__checkbox');
        this._nav = this._navClass.querySelector('.hamburger-menu');

        this._svgColor.setAttribute('fill', '#E8E8E8'); //Изменяем цвет иконки бургер меню в открытом положении

        this._divBackground = document.createElement('div');
        this._divBackground.classList.add('promo__hidden');

        this.show();
    }

    show() {

        //действие на кнопку закрытия меню

        this._linkClose.addEventListener('click', (event) => {
            console.log(event.target);
            if (this._checkbox.checked) {
                this._checkbox.checked = false;
                this._svgColor.setAttribute('fill', '#E8E8E8');
                this._divBackground.remove();
            }
        });

        //закрытие меню на body

        document.querySelector('body').addEventListener('mousedown', () => {
            if (this._checkbox.checked) {
                this._checkbox.checked = false;
                this._svgColor.setAttribute('fill', '#E8E8E8');
                this._divBackground.remove();
                if (this._promo) {
                    this._divBackground.remove();
                }
            }
        });

        //Отменяем событие по умолчанию для hamburger-menu

        this._nav.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        this._menuLink.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        //Затемняем или убираем затемнение promo если есть на странице 

        if (this._promo) {
            this._menuLink.addEventListener('click', () => {
                if (this._checkbox.checked == false) {
                    this._promo.append(this._divBackground);
                } else {
                    this._divBackground.remove();
                }
            });
        }

    }
}