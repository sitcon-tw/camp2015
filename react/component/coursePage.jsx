
var timetableContent = [
	[
		{t:[" "]},
		{t:["day1"]},
		{t:["day2"]},
		{t:["day3"]},
		{t:["day4"]}
	],
	[
		{t:["08:00","~","08:30"]},
		{t:[" "],type:"easy"},
		{t:["勇者，登入！","每日晨間任務"],c:3,type:"activity"}
	],
	[
		{t:["08:30","~","09:00"]},
		{t:["角色，創建！","報到"],type:"activity"},
		{t:["早餐"],c:3,type:"easy"}
	],
	[
		{t:["09:00","~","09:30"]},
		{t:["開幕"]},
		{t:["Open Source 新手上路"],r:2,l:" ",type:"course"},
		{t:["輕鬆學會網頁前端","網頁教學","聽風"],r:5,l:" ",type:"course"},
		{t:["出征，預備！","蓄勢待發"],r:2,type:"activity"}
	],
	[
		{t:["09:30","~","10:00"]},
		{t:["勇者，組隊！","認識夥伴"],type:"activity"},
	],
	[
		{t:["10:00","~","11:00"]},
		{t:["我把源碼都放在那了！","Kirby Wu"],l:" ",type:"course"},
		{t:["資訊自學能力培養 座談會","Legist 強","MouseMs","Denny Huang","RSChiang","Richard Lee","陳恭老師"],r:3,l:" ",type:"activity"},
		{t:["e-Tutor 線上協同學習平台"],type:"course"}
	],
	[
		{t:["11:00","~","11:10"]},
		{t:["休息"],type:"easy"},
		{t:["休息"],type:"easy"}
	],
	[
		{t:["11:10","~","12:00"]},
		{t:["我把源碼都放在那了！","Kirby Wu"],l:" ",type:"course"},
		{t:["創新世界的力量","洞悉大數據密碼","朱皇韋"],type:"course"}
	]
];

var React = require('react');
var Timetable = require('../partial/timetable.jsx');

var CoursePage = React.createClass({
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