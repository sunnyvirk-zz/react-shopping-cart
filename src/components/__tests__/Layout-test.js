jest.dontMock('../Layout');

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
		var headerComponent = TestUtils.findRenderedDOMComponentWithTag(layout, 'header');
		expect(headerComponent).toBeDefined();
	});

	it('should have a footer component', function() {
		var footerComponent = TestUtils.findRenderedDOMComponentWithTag(layout, 'footer');
		expect(footerComponent).toBeDefined();
	});

	it('shoudl have a basket component', function() {
		var asideComponent = TestUtils.findRenderedDOMComponentWithTag(layout, 'aside');
		expect(asideComponent).toBeDefined();
	});
});
