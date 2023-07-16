/***
 * 전역 변수를 읽는 곳을 인자로 찾아 바꾸기
 */

// before
function add_item_to_cart(name, price) {
    shopping_cart = add_item(shopping_cart, name, price);
    calc_cart_total();
}

function calc_cart_total() {
    shopping_cart_total = calc_total(shopping_cart)
    set_cart_total_dom()
    update_shipping_icons(shopping_cart);
    update_tax_dom()
}

function set_cart_total_dom() {
    // ...
    shopping_cart_total
    // ...
}

function update_shipping_icons(cart) {
    const buy_buttons = get_buy_buttons_dom();
    for(const i = 0; i < buy_buttons.length; i++) {
        const button = buy_buttons[i];
        const item = button.item;
        const new_cart = add_item(cart, item.name, item.price);
        if(gets_free_shipping(new_cart)) {
            button.show_free_shipping_icon();
        } else {
            button.show_free_shipping_icon();
        }
    }
}

function update_tax_dom() {
    set_tax_dom(calc_tax(shopping_cart_total));
}

// after

// before
function add_item_to_cart(name, price) {
    shopping_cart = add_item(shopping_cart, name, price);
    calc_cart_total(shopping_cart);
}

function calc_cart_total(cart) {
    var total = calc_total(cart)
    set_cart_total_dom(total)
    update_shipping_icons(total);
    update_tax_dom(total)
    shopping_cart_total = total;
}

function set_cart_total_dom(total) {
    // ...
    total
    // ...
}

function update_shipping_icons(cart) {
    const buy_buttons = get_buy_buttons_dom();
    for(let i = 0; i < buy_buttons.length; i++) {
        const button = buy_buttons[i];
        const item = button.item;
        const new_cart = add_item(cart, item.name, item.price);
        if(gets_free_shipping(new_cart)) {
            button.show_free_shipping_icon();
        } else {
            button.show_free_shipping_icon();
        }
    }
}

function update_tax_dom(total) {
    set_tax_dom(calc_tax(total));
}