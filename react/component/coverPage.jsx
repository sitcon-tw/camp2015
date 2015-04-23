
var React = require('react');
var Waveline = require('../partial/waveline.jsx');

var CoverPage = React.createClass({
	render: function(){
		//<Waveline />
		return (	
			<div className="coverPage">
				<div className="coverTop"></div>
				<div className="pageContainer">
					<h1>點燃未來之光!</h1>
					<h2>SITCON新手城</h2>
				</div>
				<div className="coverBottom">
					<div className="skew"></div>
					<div className="flat"></div>
				</div>
			</div>
		);
	}
});

React.render(
	<CoverPage />,
	document.getElementById('coverPage')
);