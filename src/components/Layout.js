import React from 'react';

export default React.createClass({
	render() {
		return (
			<div id="content" className="wrapper">
				<div className='flex-columns'>
					<div className='flex-column'>
					 	<div className='flex-rows'>
					    	<header>
								<h2>The header component</h2>
							</header>
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
					    	<h2>Basket area</h2>
					  	</div>
					</aside>
				</div>
			</div>
		);
	}
});
