
var React = require('react');

var Col = React.createClass({
	render: function(){
		return (
			<div className={"col c"+this.props.cnt}>
				{this.props.children}
			</div>
		);
	}
})

var Row = React.createClass({
	render: function(){
		var cnt = 0;
		var allCols = this.props.children.map(function(col){
			++cnt;
			return (
				<Col cnt={cnt}>
					{col}
				</Col>
			);
		});
		return (
			<div className={"row r"+this.props.cnt}>
				{allCols}
			</div>
		);
	}
});

var Table = React.createClass({
	render: function(){
		var cnt = 0;
		var allRows = this.props.children.map(function(row){
			++cnt;
			return(
				<Row cnt={cnt}>
					{row}
				</Row>
			);
		});
		return (
			<div className={this.props.applyClass}>
				{allRows}
			</div>
		);
	}
});

module.exports = Table;