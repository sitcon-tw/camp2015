
var React = require('react');

var Waveline = React.createClass({
	triggerWave: function(){

	},
	render: function(){
		return (
			<div className="waveline">
				<img ref="img1" src={"img/waveline.png"} />
			</div>
		);
	}
});

module.exports = Waveline;