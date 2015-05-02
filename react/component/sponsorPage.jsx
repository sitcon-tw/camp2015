
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
var ruler = require('../partial/ruler');

var popInMixins = {
	getDefaultProps: function(){
		return { calledAnimation: false };
	},
	componentDidMount: function(){
		window.addEventListener('scroll', this.checkReached, false);
	},
	checkReached: function(){
		if( !ruler.haveReaching( this.getDOMNode() ) )
			return;
		if( this.props.calledAnimation )
			return;
		this.props.calledAnimation = true;
		window.removeEventListener('scroll', this.checkReached, false);
		this.getDOMNode().className +=  " popIn";
	}
};

var PartIn = React.createClass({
	mixins: [popInMixins],
	render: function() {
		return (
			<div className={"partIn popInPre "+this.props.colorPick}>
				<img src={"img/logos/"+this.props.detail.logo} />
				<div className="partInName">
					<strong>{this.props.detail.name}</strong>
					<div className="partInNameBg"></div>
				</div>
			</div>
		);
	}
});

var PartInGroup = React.createClass({
	render: function() {
		var allPartIn = [];
		var colorPick = this.props.colorPick;
		this.props.partIn.forEach(function(p,cnt){
			allPartIn.push(
				<PartIn detail={p}
					colorPick={colorPick} key={cnt} />
			);
		})
		return (
			<div className={"partInGroup "+this.props.applyClass}>
				<div className={"groupHeader "+colorPick}>
					<div className="upBar">
						<div className="downBorder borderFloatLeft"></div>
						<div className="downBorder borderFloatRight"></div>
					</div>
					<h2>
						{this.props.groupName}
						<div className="middleBar"></div>
					</h2>
					<div className="downBar">
						<div className="upBorder borderFloatLeft"></div>
						<div className="upBorder borderFloatRight"></div>
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
			var colorPick = "red";
			if( cnt%2 )
				colorPick = " blue";
			allGroup.push(
				<PartInGroup key={cnt}
					groupName={g.group} partIn={g.parts} 
					colorPick={colorPick} applyClass={g.applyClass} />
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