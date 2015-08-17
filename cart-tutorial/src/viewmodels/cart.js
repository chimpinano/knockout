function Cart() {

    var self = this;

    self.isVisible = ko.observable(true);
    self.items = ko.observableArray();

    self.addOrUpdateItem = function (vm) {
        var exists = ko.utils.arrayFirst(cart.items(), function (item) {
            return vm.id === item.id();
        });

        if (!exists) {
            //add new
            vm.quantity = 1;
            cart.items.push(ko.mapping.fromJS(vm));
        } else {
            var quantity = cart.items()[cart.items.indexOf(exists)].quantity();
            cart.items()[cart.items.indexOf(exists)].quantity(quantity + 1);
        }


    };

    self.grandTotal = ko.pureComputed(function () {
        console.log(self.items());
        var total = 0;
        ko.utils.arrayForEach(self.items(), function (item) {
            total += item.price() * item.quantity();
        });
        return total;
    });


    self.items.subscribe(function () {
        console.log('gawdawd')
    }, null, 'afterChange');

};