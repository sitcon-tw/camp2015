
var staffTaChi = [
	[
		"總召組" , "崑元、Clarence"
	],
	[
		"行政組" , "PineApple、零葉、Penny、阿威"
	],
	[
		"行銷組" , "小燁、Mouse、蝦子"
	],
	[
		"活動組" , "莫風、味噌、泰泰、Queenie、糖萱、PCC"
	],
	[
		"隊輔組" , "JefferySAC"
	],
	[
		"財務組" , "蛋糕、魚丸"
	],
	[
		"課程組" , "ZAL、洋蔥、LegBone、靈夢、松鼠"
	],
	[
		"文創組" , "工藤、Sunset、Kelvin、安迪、菲、央"
	],
	[
		"美生組" , "阿貓、拔辣"
	]
];

var React = require('react');
var ruler = require('../partial/ruler.jsx');
var Table = require('../partial/table.jsx');
var Article = require('../partial/article.jsx');

var feedbackData = [
	{
		title:"ZAL" , subtitle:"（本屆夏令營課程長）" , 
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
				<h2>{"去年學員心得"}</h2>
				{allFeedbacks}
			</div>
		);
	}
});

var StaffPage = React.createClass({
	getDefaultProps: function(){
		return { calledAnimation: false };
	},
	componentDidMount: function(){
		window.addEventListener('scroll', this.checkReached, false);
	},
	checkReached: function(){
		if( !ruler.haveReached( this.getDOMNode() ) )
			return;
		if( this.props.calledAnimation )
			return;
		this.props.calledAnimation = true;
		window.removeEventListener('scroll', this.checkReached, false);
		staffPageAnimation();
	},
	render: function(){
		return (
		<div>
			<div className="staffPage pageContainer">
				<div className="left">
					<h2>工作團隊</h2>
					<Table applyClass="staffPageTable" rowClass="slideInUpPre">
						{staffTaChi}
					</Table>
					<img src={"img/boy.png"} />
				</div>

				
			</div>

			<StudentFeedback feedbackData={feedbackData}/>
		</div>
		);
	}
});

React.render(
	<StaffPage />,
	document.getElementById('staffPage')
);

function staffPageAnimation(){
	var slideInUp = document.querySelectorAll('#staffPage .row');
	for(var i=0 ; i<slideInUp.length ; ++i){
		slideInUp[i].className = slideInUp[i].className + 
			" delay" + (i);
	}
	for(var i=0 ; i<slideInUp.length ; ++i)
		slideInUp[i].className = slideInUp[i].className + " slideInUp";
	slideInUp = null;
}