
var React = require('react');

var Article = React.createClass({
	render: function(){
		var allParagraphs = this.props.children.map(function(pText){
			if( pText[0]=='$' )
				return (<p dangerouslySetInnerHTML={{__html: pText.slice(1)}}></p>);
			return (<p>{pText}</p>);
		});
		return (
			<div className={"articleBlock " + this.props.applyClass}>
				{allParagraphs}
			</div>
		);
	}
});

module.exports = Article;