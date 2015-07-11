
var staffTaChi = [
	[
		"總召組" , "崑元、Clarence、Penny"
	],
	[
		"行政組" , "PineApple、零葉、阿威"
	],
	[
		"行銷組" , "小燁、Mouse、蝦子"
	],
	[
		"活動組" , "莫風、味噌、泰泰、Queenie、PCC"
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
	],
	[
		"隊輔組" , "JefferySAC、Emma、Beauty、小米、阿哲"
	],
	[
		" " , "小寒、球球、芥龍、葉子、子期、Jeffrey Lin、YW"
	],
	[
		" " , "悅悅、虎胡、寶寶、拉布、Choukai、克莉絲汀、ADR"
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
		title:"Penny" , subtitle:"（本屆夏令營執行秘書）" ,
		content:["猶記去年，仍為初學者的我，滿載而歸地離開了 SITCON 第一屆夏令營。今年，我滿載著熱沈，十分榮幸的參與了第二屆夏令營的籌備。廣拓了視野，亦學習了許多，深感自己成長了不少呢！期盼這幾個月的努力，能使我們第二屆成員再度收益良多。"]
	}
];

var StudentFeedback = React.createClass({
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
		studentFeedbackAnimation();
	},
	render: function() {
		var allFeedbacks = this.props.feedbackData.map(function(data,cnt){
			return(
				<div className="studentFeedbackBlock slideInUpPre" key={cnt}>
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
		if( !ruler.haveReaching( this.refs.inAnchor.getDOMNode() ) )
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
					<Table applyClass="staffPageTable" rowClass="slideInUpPre"  ref="inAnchor">
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

var staffPageAnimateOk = false;

function staffPageAnimation(){
	setTimeout( function(){ staffPageAnimateOk = true } , 800 );
	var slideInUp = document.querySelectorAll('#staffPage .staffPage .slideInUpPre');
	for(var i=0 ; i<slideInUp.length ; ++i){
		slideInUp[i].className = slideInUp[i].className + 
			" delay" + (i);
	}
	for(var i=0 ; i<slideInUp.length ; ++i)
		slideInUp[i].className = slideInUp[i].className + " slideInUp";
	slideInUp = null;
}

function studentFeedbackAnimation(){
	if( !staffPageAnimateOk ){
		setTimeout( function(){ studentFeedbackAnimation(); } , 100 );
		return;
	}
	var slideInUp = document.querySelectorAll('#staffPage .studentFeedback .slideInUpPre');
	for(var i=0 ; i<slideInUp.length ; ++i){
		slideInUp[i].className = slideInUp[i].className + 
			" delay" + (2+i*2);
	}
	for(var i=0 ; i<slideInUp.length ; ++i)
		slideInUp[i].className = slideInUp[i].className + " slideInUp";
	setTimeout( function(){
		for(var i=0 ; i<slideInUp.length ; ++i)
			slideInUp[i].className = slideInUp[i].className + " borderShow";
		slideInUp = null;
	} ,600 );
}