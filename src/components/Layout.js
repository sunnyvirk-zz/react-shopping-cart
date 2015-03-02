import React from 'react';
import Header from './Header';
import Basket from './Basket';

export default React.createClass({
	render() {
		return (
			<div id="content" className="wrapper">
				<div className='flex-columns'>
					<div className='flex-column'>
					 	<div className='flex-rows'>
					    	<Header />
					    	<div className='content-body flex-row'>
					      		<div className='scroll-area'>
					        		<h1>Page area</h1>
					      		</div>
					    	</div>
					    	<footer>
								<h2>The footer component</h2>
							</footer>
					  	</div>
					</div>
					<aside className='flex-fixed-column basket'>
						<div className='scroll-area'>
					    	<Basket />
					  	</div>
					</aside>
				</div>
			</div>
		);
	}
});
