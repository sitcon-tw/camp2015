
var timetableContent = [
	[
		{t:[" "]},
		{t:["day1"]},
		{t:["day2"]},
		{t:["day3"]},
		{t:["day4"]}
	],
	[
		{t:["08:30","~","09:30"]},
		{t:["開始報到"],type:"easy"},
		{t:["web"],type:"course",r:3},
		{t:["WEB"],type:"course",r:3},
		{t:["視界咖啡館"],type:"activity",r:3}
	],
	[
		{t:["09:30","~","10:30"]},
		{t:["開幕式"],type:"easy"}
	],
	[
		{t:["10:30","~","12:00"]},
		{t:["小隊破冰"],type:"activity"}
	],
	[
		{t:["12:00","~","13:30"]},
		{t:["小惡魔信箱","午餐"],c:3,type:"easy"},
		{t:["午餐"],type:"easy"}
	],
	[
		{t:["13:30","~","14:30"]},
		{t:["Git"],type:"course",r:3},
		{t:["社群精神"],type:"course"},
		{t:["Security（資安）"],type:"course",r:3},
		{t:["社群闖關"],type:"activity"}
	],
	[
		{t:["14:30","~","15:30"]},
		{t:["SITCON心路歷程"],type:"course"},
		{t:["hackathon發表","故事時間"],type:"activity",r:2}
	],
	[
		{t:["15:30","~","17:00"]},
		{t:["戰備外援"],type:"course"},
	],
	[
		{t:["17:00","~","18:30"]},
		{t:["小惡魔信箱","晚餐"],c:3,type:"easy"},
		{t:["閉幕","賦歸"],type:"easy"}
	],
	[
		{t:["18:00","~","21:00"]},
		{t:["夜教"],type:"activity",c:2},
		{t:["Hackathon"],type:"activity"},
		{t:[" "],type:"easy",r:2}
	],
	[
		{t:["21:00","~","22:00"]},
		{t:["小隊時間","宵夜"],type:"easy",c:3}
	]
];

var React = require('react');
var Timetable = require('../partial/timetable.jsx');

var CoursePage = React.createClass({
	/*
				<div className="comingSoon">Coming Soon...</div>
	*/
	render: function(){
		return (
			<div className="coursePage pageContainer">
				<h2>課 程</h2>
				<Timetable content={timetableContent} />
			</div>
		);
	}
});

React.render(
	<CoursePage />,
	document.getElementById('coursePage')
);