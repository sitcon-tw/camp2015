
var React = require('react');

var Col = React.createClass({
	render: function(){
		var colClass = (this.props.colClass)?
				this.props.colClass : "";
		return (
			<div className={"col c"+this.props.cnt+" "+colClass}>
				{this.props.children}
			</div>
		);
	}
});

var Row = React.createClass({
	render: function(){
		var rowClass = (this.props.rowClass)?
				this.props.rowClass : "";
		var colClass = (this.props.colClass)?
				this.props.colClass : "";
		var allCols = this.props.children.map(function(col,cnt){
			return (
				<Col cnt={cnt} key={cnt} colClass={colClass}>
					{col}
				</Col>
			);
		});
		return (
			<div className={"row r"+this.props.cnt+" "+rowClass}>
				{allCols}
			</div>
		);
	}
});

var Table = React.createClass({
	render: function(){
		var rowClass = (this.props.rowClass)?
				this.props.rowClass : "";
		var colClass = (this.props.colClass)?
				this.props.colClass : "";
		var allRows = this.props.children.map(function(row,cnt){
			return(
				<Row cnt={cnt} key={cnt} colClass={colClass} rowClass={rowClass}>
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