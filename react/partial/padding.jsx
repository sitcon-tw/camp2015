
var React = require('react');

var PaddingBar = React.createClass({
	render: function(){
		var applyClass = "paddingBlock " + this.props.applyClass;
		return (
			<div className="paddingBar">
				<div className={applyClass}>
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = PaddingBar;