export default class RemoveCart {

    constructor(carts, buttonName) {
        this._carts = carts;
        this._count = this._carts.length;
        this._buttonName = buttonName;
        this.createEmptyDiv();
        this.deleteItem();
    }

    deleteItem() {
        this._carts.forEach(item =>{
            const btn = item.querySelector(this._buttonName);
            btn.addEventListener('click', () => {
                    if (this._count == 1) {
                        item.replaceWith(this._divEmpty);
                    } else {
                        item.remove();
                        this._count--;
                    }
            });
        });
    }

    createEmptyDiv() {
        this._divEmpty = document.createElement('div');
        this._divEmpty.classList.add('cart', 'cart__empty');
        this._divEmpty.innerHTML = '<h2 class="cart__title">Cart is empty</h2>';
    }
}