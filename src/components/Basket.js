import React from 'react';

export default React.createClass({
	render() {
		return (
			<div className='shopping-basket'>
				<div className='basket-header'>
		          <div className='basket-title'>
		            <em className='icon fa fa-shopping-cart'></em>
		            <div className='basket-info'>
		              <div className='price'><span>£0.00</span></div>
		              <div className='num-items'><span>0 items</span></div>
		            </div>
		          </div>
				</div>
		        <div className='basket-contents'>
		        
		        </div>
				<div className='basket-footer'>
					<a href="#" className="button primary large" title="Checkout">Checkout</a>					
				</div>		        				
			</div>
		);
	}
});
