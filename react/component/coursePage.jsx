
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
		{t:["遊戲登入"],type:"easy"},
		{t:["傳說中的訓練課程（上）","Web","林大中"],type:"course",r:3,l:"web"},
		{t:["傳說中的訓練課程（下）","Web","林大中"],type:"course",r:3,l:"web"},
		{t:["轉職說明","視界咖啡館"],type:"activity",r:3}
	],
	[
		{t:["09:30","~","10:30"]},
		{t:["新手教程"],type:"easy"}
	],
	[
		{t:["10:30","~","12:00"]},
		{t:["角色設定"],type:"activity"}
	],
	[
		{t:["12:00","~","13:30"]},
		{t:["小惡魔信箱"],c:4,type:"easy"}
	],
	[
		{t:["13:30","~","14:30"]},
		{t:["消失的歷史","Git","Denny Huang"],type:"course",r:3,l:"git"},
		{t:["來自友邦的邀請信","開源社群精神","Bob"],type:"course",l:"community"},
		{t:["任務小技巧","Security","HrJ"],type:"course",r:3,l:"security"},
		{t:["決戰時刻"],type:"activity"}
	],
	[
		{t:["14:30","~","15:30"]},
		{t:["建立在名為信任的橋樑","SITCON 故事館"],type:"course",l:"story"},
		{t:["終焉之時"],type:"activity",r:2}
	],
	[
		{t:["15:30","~","17:00"]},
		{t:["戰備外援"],type:"course"},
	],
	[
		{t:["17:00","~","18:30"]},
		{t:["小惡魔信箱"],c:3,type:"easy"},
		{t:["最後的道別"],type:"easy"}
	],
	[
		{t:["18:00","~","21:00"]},
		{t:["革命軍的序幕"],type:"activity"},
		{t:["與各邦的聯合晚宴"],type:"activity"},
		{t:["最終的試煉"],type:"activity"},
		{t:["勇者。再會"],type:"easy",r:2}
	],
	[
		{t:["21:00","~","22:00"]},
		{t:["小隊時間","宵夜"],type:"easy",c:3}
	]
];

var React = require('react');
var CourseStore = require('../stores/courseStore.jsx');
var Timetable = require('../partial/timetable.jsx');
var CourseFeature = require('./courseFeature.jsx');

var CoursePage = React.createClass({
	render: function(){
		return (
			<div className="coursePage pageContainer">
				<h2>課 程</h2>
				<div className="tableContainer">
					<Timetable content={timetableContent} />
				</div>
				<CourseFeature />
			</div>
		);
	}
});

React.render(
	<CoursePage />,
	document.getElementById('coursePage')
);


/* below is course's info panel */

function getCoursePanelState(){
	return {
		pageData: CourseStore.nowCourse(),
		showmode: CourseStore.nowShow()
	};
}

var CoursePanel = React.createClass({
	getInitialState: function(){
		return getCoursePanelState();
	},
	componentDidMount: function() {
		CourseStore.addShowListener(this.showPanel);
		CourseStore.addCloseListener(this.closePanel);
	},
	componentWillUnmount: function() {
		CourseStore.removeShowListener(this.showPanel);
		CourseStore.removeCloseListener(this.closePanel);
	},
	render: function(){
		return (
			<div className="coursePanel darken">
				<div className="relative">
					<img className="panelClose" src="img/close.png"
						  onClick={this.closePanel} />
					<img className="panelCover" src="img/infoCover.png" />
					{this.state.pageData}
				</div>
				<div className="closeArea" onClick={this.closePanel}></div>
			</div>
		);
	},
	showPanel: function(){
		this.setState( getCoursePanelState() );
		document.getElementById('coursePanel').style.display = "block";
		document.body.style.overflowY = "hidden";
	},
	closePanel: function(){
		document.getElementById('coursePanel').style.display = "none";
		document.body.style.overflowY = "auto";
	}
});

React.render(
	<CoursePanel />,
	document.getElementById('coursePanel')
);