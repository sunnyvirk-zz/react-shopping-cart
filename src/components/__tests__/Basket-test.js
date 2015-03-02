jest.dontMock('../Basket');

describe('Basket', function() {

	var React,
		Basket,
		TestUtils,
		rendered;

	beforeEach(function(){
		React = require('react/addons');
		Basket = require('../Basket');
		TestUtils = React.addons.TestUtils;

		rendered = TestUtils.renderIntoDocument(
			<Basket />
		);
	});

	it('should render to the page', function() {
		var basketComponent = TestUtils.findRenderedDOMComponentWithClass(rendered, 'shopping-basket');
		expect(basketComponent).toBeDefined();
	});

	describe('basket information', function() {
		var basketInfo,
			basketPrice,
			numItems,
			basketContents;

		beforeEach(function(){
			basketInfo = TestUtils.findRenderedDOMComponentWithClass(rendered, 'basket-info');
		});

		describe('if basket is empty', function() {
			it('should have a price total which is £0.00', function() {
				basketPrice = TestUtils.findRenderedDOMComponentWithClass(basketInfo, 'price');
				expect(basketPrice.getDOMNode().textContent).toEqual('£0.00');
			});

			it('should have 0 items listed', function() {
				numItems = TestUtils.findRenderedDOMComponentWithClass(basketInfo, 'num-items');
				expect(numItems.getDOMNode().textContent).toEqual('0 items');
			});

			it('should display no items in the basket', function(){
				basketContents = TestUtils.findRenderedDOMComponentWithClass(rendered, 'basket-contents');
				expect(basketContents.getDOMNode().textContent).toEqual('');
			});
		});

	});
	
});
