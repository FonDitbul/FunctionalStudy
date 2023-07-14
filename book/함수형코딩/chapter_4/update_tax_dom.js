// before
function update_tax_dom() {
    set_tax_dom(shopping_cart_total * 0.10);
}

// after
function update_tax_dom() {
    var tax = get_tax(shopping_cart_total)
    set_tax_dom(tax);
}

function get_tax(shopping_cart_total) {
    return shopping_cart_total * 0.10
}