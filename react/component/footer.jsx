
var React = require('react');

var Footer = React.createClass({
	render: function() {
		return (
			<div className="Footer">
				<footer>{"學生計算機年會籌備團隊"}</footer>
			</div>
		);
	}
});

React.render(
	<Footer />,
	document.getElementById('footer')
);