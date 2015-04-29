
var partIn = [
	{group:"主辦單位",applyClass:"mainPart",parts:[
		{name:"學生計算機年會",logo:"sitconLogo.png"},
		{name:"中研院・資創中心・自由軟體鑄造場",logo:"openfoundLogo.png"}
	]},
	{group:"協辦單位",applyClass:"secondPart",parts:[
		{name:"政治大學資訊科學系",logo:"blackLogo.png"}
	]},
	{group:"媒體夥伴",applyClass:"mediaPart",parts:[
		{name:"PIXNET DIGITAL MEDIA",logo:"pixnetLogo.png"}
	]},
	{group:"贊助單位",applyClass:"sponsorPart",parts:[
		{name:"MUZIK ONLINE",logo:"muzikLogo.png"},
		{name:"天瓏資訊圖書",logo:"tenlonLogo.PNG"},
		{name:"GitCafe",logo:"gitcafeLogo.jpg"}
	]}
];

var React = require('react');

var PartIn = React.createClass({
	render: function() {
		return (
			<div className="partIn">
				<img src={"img/logos/"+this.props.detail.logo} />
				<div className="partInName">
					{this.props.detail.name}
				</div>
			</div>
		);
	}
});

var PartInGroup = React.createClass({
	render: function() {
		var allPartIn = [];
		this.props.partIn.forEach(function(p,cnt){
			allPartIn.push(
				<PartIn detail={p} key={cnt} />
			);
		})
		return (
			<div className={"partInGroup "+this.props.applyClass}>
				<div className="groupHeader">
					<h2>{this.props.groupName}</h2>
					<div className="groupHeaderDecoration">
						<div className="maskH2">{this.props.groupName}</div>
						<div className="maskBg"></div>
					</div>
				</div>
				{allPartIn}
			</div>
		);
	}
});

var SponsorPage = React.createClass({
	render: function() {
		var allGroup = [];
		this.props.groups.forEach(function(g,cnt){
			allGroup.push(
				<PartInGroup key={cnt}
					groupName={g.group} partIn={g.parts} applyClass={g.applyClass} />
			);
		})
		return (
			<div className="sponsorPage pageContainer">
				{allGroup}
			</div>
		);
	}
});

React.render(
	<SponsorPage groups={partIn} />,
	document.getElementById('sponsorPage')
);