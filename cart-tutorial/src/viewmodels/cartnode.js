function CartNode(product) {
    var self = this;
    self.product = ko.observable(product);
    self.subtotal = ko.pureComputed(function () {
        return self.product().price * self.quantity();
    });
}