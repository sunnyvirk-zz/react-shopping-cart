jest.autoMockOff();

describe('Basket Store', function() {

	var BasketActions,
		BasketStore;

	beforeEach(function(){
		BasketActions = require('../../actions/Basket-actions');
		BasketStore = require('../../stores/Basket-store');
		BasketStore.getInitialState();
	});

	it('should be defined', function() {
		expect(BasketStore).toBeDefined();
	});

	it('should have getInitialState()', function() {
		expect(BasketStore.getInitialState).toBeDefined();
	});

	it('should have onAddItem()', function() {
		expect(BasketStore.onAddItem).toBeDefined();
	});

	it('should have onRemoveItem()', function() {
		expect(BasketStore.onRemoveItem).toBeDefined();
	});

	it('should have onIncreaseItem()', function() {
		expect(BasketStore.onIncreaseItem).toBeDefined();
	});

	it('should have onDecreaseItem()', function() {
		expect(BasketStore.onDecreaseItem).toBeDefined();
	});

	it('should have updateBasket()', function() {
		expect(BasketStore.updateBasket).toBeDefined();
	});

	it('should have basket count of 0)', function() {
		expect(BasketStore.basket.length).toEqual(0);
	});

	describe('Add one item', function() {

		beforeEach(function(){
			BasketActions.addItem({
				title: "Product 1",
				price: 100
			});
			jest.runOnlyPendingTimers();		
		});

		it('should have basket count of 1', function() {
			expect(BasketStore.basket.length).toEqual(1);
		});

		it('should have a name attr of Product 1', function() {
			expect(BasketStore.basket[0].title).toEqual('Product 1');
		});

		it('should have a price of 100', function() {
			expect(BasketStore.basket[0].price).toEqual(100);
		});

		afterEach(function() {
			BasketStore.basket.length = 0;
		});

	});
	
});