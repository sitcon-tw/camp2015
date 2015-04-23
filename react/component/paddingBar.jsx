
var React = require('react');
var PaddingBlock = require('../partial/padding.jsx');

React.render(
	<PaddingBlock applyClass="red" />,
	document.getElementById('pdBar1')
);

React.render(
	<PaddingBlock applyClass="blue" />,
	document.getElementById('pdBar2')
);

React.render(
	<PaddingBlock applyClass="red" />,
	document.getElementById('pdBar3')
);

React.render(
	<PaddingBlock applyClass="blue" />,
	document.getElementById('pdBar4')
);