jest.dontMock('../Layout');
jest.dontMock('../Header');
jest.dontMock('../Basket');
jest.dontMock('../../stores/Basket-store');

describe('Layout', function() {
	var React,
		Layout,
		TestUtils,
		layout;

	beforeEach(function(){
		React = require('react/addons');
		Layout = require('../Layout');
		TestUtils = React.addons.TestUtils;

		layout = TestUtils.renderIntoDocument(
			<Layout />
		);
	});

	it('should render to the page', function() {
	    var divWrapper = TestUtils.findRenderedDOMComponentWithClass(layout, 'wrapper');
	    expect(divWrapper).toBeDefined();
	});

	it('should have a header component', function() {
		var Header = require('../Header');
		var headerComponent = TestUtils.findRenderedComponentWithType(layout, Header);
		expect(headerComponent).toBeDefined();
	});

	it('should have a footer component', function() {
		var footerComponent = TestUtils.findRenderedDOMComponentWithTag(layout, 'footer');
		expect(footerComponent).toBeDefined();
	});

	it('should have a basket component', function() {
		var Basket = require('../Basket');
		var basketComponent = TestUtils.findRenderedComponentWithType(layout, Basket);
		expect(basketComponent).toBeDefined();
	});
});
