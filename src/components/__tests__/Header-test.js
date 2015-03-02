jest.dontMock('../Header');

describe('Header', function() {

	var React,
		Header,
		TestUtils,
		rendered;

	beforeEach(function(){
		React = require('react/addons');
		Header = require('../Header');
		TestUtils = React.addons.TestUtils;

		rendered = TestUtils.renderIntoDocument(
			<Header />
		);
	});

	it('should render to the page', function() {
		var headerComponent = TestUtils.findRenderedDOMComponentWithTag(rendered, 'header');
		expect(headerComponent).toBeDefined();
	});

	it('should have a logo', function() {
		var logoComponent = TestUtils.findRenderedDOMComponentWithClass(rendered, 'logo');
		expect(logoComponent).toBeDefined();
	});
	
});