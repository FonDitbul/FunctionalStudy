// before
function inline_variable (anOrder) {
  let basePrice = anOrder.basePrice
  return basePrice > 1000
}

// after
function inline_variable_after (anOrder) {
  return anOrder.basePrice > 1000;
}
