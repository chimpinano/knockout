ko.bindingHandlers.addToCart = {
    init: function (el, valAccessor, allBindings, vm, bindingContext) {
        $(el).on('click', function () {
            var exists = ko.utils.arrayFirst(cart.items(), function (item) {
                return vm.id === item.product().id;
            });

            if (!exists) {
                var node = new CartNode(vm);
                cart.items().push(node);
            } else {
                var qtty = cart.items()[cart.items().indexOf(exists)].quantity();
                cart.items()[cart.items().indexOf(exists)].quantity(qtty + 1);
            }
        });
    }
};

function CartNode(product) {
    var self = this;
    self.quantity = ko.observable(1);
    self.product = ko.observable(product);
    self.subtotal = ko.computed(function(){
        return self.product().price * self.quantity();
    });
}

function Cart() {
    var self = this;
    self.isVisible = ko.observable(true);
    self.items = ko.observableArray([]);
    self.itemExists = function (item) {
        return ( this.items().indexOf(item) !== -1 );
    };
}

var cart = new Cart();

ko.applyBindings(categories, document.getElementById('bs-example-navbar-collapse-1'));
ko.applyBindings(products, document.getElementById('isotopeBody'));
ko.applyBindings(cart, document.getElementById('cartProductsWrapper'))