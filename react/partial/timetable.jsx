
var React = require('react');
var CourseAction = require('../actions/courseAction.jsx');
var Article = require('./article.jsx');

var TimetableCol = React.createClass({
	render: function(){
		var applyClass = "timetableCol c"+this.props.cnt;
		if( this.props.content.type )
			applyClass += " "+this.props.content.type;
		if( this.props.content.l )
			return (
				<td className={applyClass+" link"}
					rowSpan={this.props.content.r}
					colSpan={this.props.content.c}
					onClick={this.handleClick}>
					<Article>
					{
						this.props.content.t
					}
					</Article>
				</td>
			);
		else
			return (
				<td className={applyClass}
					rowSpan={this.props.content.r}
					colSpan={this.props.content.c}>
					<Article>
					{
						this.props.content.t
					}
					</Article>
				</td>
			);
	},
	handleClick: function(){
		CourseAction.show( this.props.content.l );
	}
});

var TimetableRow = React.createClass({
	render: function(){
		var tablerow = [];
		this.props.content.forEach(function(col,cnt){
			tablerow.push(
				<TimetableCol cnt={cnt} content={col} key={cnt} />
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
		var timetable = [];
		this.props.content.forEach(function(row,cnt){
			timetable.push(
				<TimetableRow cnt={cnt} content={row} key={cnt} />
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