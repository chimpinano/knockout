ko.bindingHandlers.addToCart = {
	init: function(el, valAccessor, allBindings, vm, bindingContext){
		$(el).on('click', function(){
			if(cart.itemExists(vm)){
				cart.items()[cart.items.indexOf(vm)].quantity++;
			} else {
				vm.quantity = 1;
				cart.items.push(vm);
			}
			
		});
	}
}

var cart = {
	items: ko.observableArray(),
	itemExists: function(item){
		var self = this;
		if( self.items.indexOf(item) !== -1 ){
			console.log('exists');
			return true;
		} else {
			console.log('dont exists');
			return false;
		}
	}
};



ko.applyBindings(categories, document.getElementById('bs-example-navbar-collapse-1'));
ko.applyBindings(products, document.getElementById('isotopeBody'));
ko.applyBindings(cart, document.getElementById('cartProductsWrapper'))