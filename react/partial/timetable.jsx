
var React = require('react');
var Article = require('./article.jsx');

var TimetableCol = React.createClass({
	render: function(){
		var applyClass = "timetableCol c"+this.props.cnt;
		if( this.props.content.l )
			applyClass += " course";
		if( this.props.content.easy )
			applyClass += " easy";
		return (
			<td className={applyClass}
				rowSpan={this.props.content.r}
				colSpan={this.props.content.c}
				data-link={this.props.content.l}>
				<Article>
				{
					this.props.content.t
				}
				</Article>
			</td>
		);
	}
});

var TimetableRow = React.createClass({
	render: function(){
		var tablerow = [] , cnt = 0;
		this.props.content.forEach(function(col){
			++cnt;
			tablerow.push(
				<TimetableCol cnt={cnt} content={col} />
			);
		});
		return (
			<tr className={"timetableRow r"+this.props.cnt} >
			{
				tablerow
			}
			</tr>
		);
	}
});

var Timetable = React.createClass({
	render: function(){
		var timetable = [] , cnt = 0;
		this.props.content.forEach(function(row){
			++cnt;
			timetable.push(
				<TimetableRow cnt={cnt} content={row} />
			);
		});
		return (
			<table className="timetable">
			{
				timetable
			}
			</table>
		);
	}
});

module.exports = Timetable;