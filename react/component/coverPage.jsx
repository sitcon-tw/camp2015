
var React = require('react');

var CoverPage = React.createClass({
	render: function(){
		//<Waveline />
		return (	
			<div className="coverPage">
				<img className="bg" src="img/background.png"/>
				<div className="front">
					<img className="top" src="img/top.png"/>
					<img className="mid" src="img/mid.png"/>
					<img className="btn" src="img/btn.png"/>
				</div>
				<div className="role">
					<img className="boy" src="img/headerBoy.png"/>
					<img className="girl" src="img/headerGirl.png"/>
				</div>
			</div>
		);
	}
});

React.render(
	<CoverPage />,
	document.getElementById('coverPage')
);