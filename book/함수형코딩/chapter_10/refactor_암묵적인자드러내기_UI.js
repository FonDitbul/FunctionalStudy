// before
function incrementQuantityByName(cart, name) {
    var item = cart[name];
    var quantity = item['quantity'];
    var newQuantity = quantity + 1;
    var newItem = ObjectSet(item, 'quantity', newQuantity);
    var newCart = ObjectSet(cart, name, newItem);
    return newCart;
}

function incrementSizeByName(cart, name) {
    var item = cart[name];
    var size = item['size'];
    var newSize = size + 1;
    var newItem = ObjectSet(item, 'size', newSize);
    var newCart = ObjectSet(cart, name, newItem);
    return newCart;
}

// after
function incrementByName(cart, name, field) {
    var item = cart[name];
    var itemField = item[field];
    var newItemField = itemField + 1;
    var newItem = ObjectSet(item, field, newItemField);
    var newCart = ObjectSet(cart, name, newItem);
    return newCart;
}