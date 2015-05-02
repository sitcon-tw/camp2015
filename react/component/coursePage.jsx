
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
var Article = require('../partial/article.jsx');


var feedbackData = [
	{
		title:"哲安" , subtitle:"（本屆夏令營課程長）" , 
		content:["在我來看，無疑去年夏令營是辦得相當成功的，有人藉此認識了社群、有人開始積極參與社群活動，這些都在在證明這點。但是去年身為學員，總覺得有些地方還可以做得更好，於是今年趁著機會加入籌備團隊，目的要讓學員取得比去年更棒的體驗與享受。" ]
	},
	{
		title:"PCC" , subtitle:"（本屆夏令營活動組員）" ,
		content:["去年的 SITCON 夏令營 是我真正開始認識並參與開源社群活動的開始，在活動中也學到了很多，更重要的是認識了許多來自 SITCON 的朋友們。在之後，我有幸可以參與到很多不同的社群活動/研討會，覺得自己應該要開始真正做出貢獻，因此順勢加入了今年的夏令營籌備團隊，希望能把夏令營辦個更好，帶領更多人接觸開源社群的世界。"]
	},
	{
		title:"Penny" , subtitle:"" ,
		content:[""]
	}
];
var StudentFeedback = React.createClass({
	render: function() {
		var allFeedbacks = this.props.feedbackData.map(function(data,cnt){
			return(
				<div className="studentFeedbackBlock" key={cnt}>
					<h2>
						<strong>{data.title}</strong>
						<span>{data.subtitle}</span>
					</h2>
					<Article>
						{data.content}
					</Article>
				</div>
			);
		});
		return (
			<div className="studentFeedback">
				{allFeedbacks}
			</div>
		);
	}
});

var CoursePage = React.createClass({
	render: function(){
		return (
			<div className="coursePage pageContainer">
				<h2>課 程</h2>
				<Timetable content={timetableContent} />

				<StudentFeedback feedbackData={feedbackData}/>
			</div>
		);
	}
});

React.render(
	<CoursePage />,
	document.getElementById('coursePage')
);