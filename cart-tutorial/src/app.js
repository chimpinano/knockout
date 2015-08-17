ko.bindingHandlers.addToCart = {
    init: function (el, valAccessor, allBindings, vm, bindingContext) {
        $(el).on('click', function () {
            cart.addOrUpdateItem(vm);
        });
    }
};

ko.bindingHandlers.priceFormated = {
    init: function (el, valAcc, allBindings, vm, bindContext) {
        var price = '$ ' + vm.price().toFixed(2);
        $(el).text(price);
    }
};

var cart = new Cart();

ko.applyBindings(categories, document.getElementById('bs-example-navbar-collapse-1'));
ko.applyBindings(products, document.getElementById('isotopeBody'));
ko.applyBindings(cart, document.getElementById('cartProductsWrapper'));