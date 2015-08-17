ko.bindingHandlers.addToCart = {
    init: function (el, valAccessor, allBindings, vm, bindingContext) {
        $(el).on('click', function () {
            cart.addOrUpdateItem(vm);
        });
    }
};

var cart = new Cart();

ko.applyBindings(categories, document.getElementById('bs-example-navbar-collapse-1'));
ko.applyBindings(products, document.getElementById('isotopeBody'));
ko.applyBindings(cart, document.getElementById('cartProductsWrapper'));