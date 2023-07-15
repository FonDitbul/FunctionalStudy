// before
function update_shipping_icons() {
    var buy_buttons = get_buy_buttons_dom();
    for(var i = 0; i < buy_buttons.length; i++) {
        var button = buy_buttons[i];
        var item = button.item;
        if(item.price + shopping_cart_total >= 20) {
            button.show_free_shipping_icno();
        } else {
            button.hide_free_shipping_icno();
        }
    }
}

// after = answer
function update_shipping_icons() {
    var buy_buttons = get_buy_buttons_dom();
    for(var i = 0; i < buy_buttons.length; i++) {
        var button = buy_buttons[i];
        var item = button.item;
        if(isShowFreeIcon(item.price, shopping_cart_total, 20)) {
            button.show_free_shipping_icno();
        } else {
            button.hide_free_shipping_icno();
        }
    }
}

function isShowFreeIcon(price, shopping_cart_total, count) {
    return price + shopping_cart_total >= count
}