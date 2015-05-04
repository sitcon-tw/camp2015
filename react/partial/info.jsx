
var React = require('react');

var Info = React.createClass({
	getDefaultProps: function(){
		return {
			htmlID: "",
			clickTriggerId: ""
		};
	},
	componentDidMount: function(){
		document
			.getElementById(this.props.clickTriggerId)
			.addEventListener('scroll', this.open, false);
		this.refs.closeBtn.getDOMNode()
			.addEventListener('scroll', this.close, false);
	},
	open: function(){
		this.getDOMNode().className = 
			this.getDOMNode().className.replace('closeMode') + 'openMode';
	},
	close: function(){
		this.getDOMNode().className = 
			this.getDOMNode().className.replace('openMode') + 'closeMode';
	},
	render: function() {
		return (
			<div className="infoPanel closeMode" id={this.props.htmlID}>
				<div className="infoClose" ref="closeBtn"></div>
				<div className="infoContent">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Info;