
var React = require('react');

var Footer = React.createClass({
	render: function() {
		return (
			<div className="Footer">
				<footer>{"學生計算機年會籌備團隊"}</footer>
				<div className="followUs">
					<a target="_blank" href="https://www.facebook.com/SITCONCamp">Facebook</a>
					<a target="_blank" href="https://www.flickr.com/photos/sitcon/sets/">Flickr</a>
					<a target="_blank" href="https://www.youtube.com/channel/UCMXFGmpqKAowZMbvz2O2aEw">Youtube</a>
					<a target="_blank" href="http://sitcon.org/2015/#/">SITCON 2015</a>
				</div>
			</div>
		);
	}
});

React.render(
	<Footer />,
	document.getElementById('footer')
);