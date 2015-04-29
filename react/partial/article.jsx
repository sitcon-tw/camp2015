
var React = require('react');

var Article = React.createClass({
	render: function(){
		var animatePreClass = this.props.animatePreClass;
		if( !animatePreClass ) animatePreClass = "";

		var allParagraphs = this.props.children.map(function(pText,cnt){
			if( pText[0]=='$' )
				return (
					<p className={animatePreClass} key={cnt}
						dangerouslySetInnerHTML={{__html: pText.slice(1)}}>
					</p>
				);
			return (<p className={animatePreClass}  key={cnt}> {pText} </p>);
		});

		var applyClass = this.props.applyClass;
		if( !applyClass ) applyClass = "";

		return (
			<div className={"articleBlock " + applyClass}>
				{allParagraphs}
			</div>
		);
	}
});

module.exports = Article;