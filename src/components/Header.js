import React from 'react';

let Header = React.createClass({
	render() {
		return (
			<header>
				<div className="logo">
					<a href='/'><h1><img src="img/logo.png" /></h1></a>
				</div>
			</header>
		);
	}
});

export default Header;
