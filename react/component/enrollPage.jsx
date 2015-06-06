

/*var tmpContent = ["人生總充滿著不可思議，覺得不可能的事情也許下一秒就發生在眼前，即使如此我們還是會笑、會難過、會吵架，也會將努力灑落在夢想與希望的種子上。",
"有些害羞內向的鎮長、和藹可親的副鎮長、喜歡小道消息的執行官、認真負責的訓練官，和其他好多好多的大家都是同為新手鎮努力的一份子，過程中也許有一點溫馨、有一點搞笑，還帶點苦澀，但這是我們的故事，要一起來嗎？"];
*/
var enrolledName = [
	"洪Ｏ吟","蔡Ｏ名","張Ｏ傑","陳Ｏ均","謝Ｏ芳","吳Ｏ志","藍Ｏ彬","陳Ｏ霖","張Ｏ涵","陳Ｏ熙","李Ｏ廉","吳Ｏ翰","周Ｏ融","吳Ｏ丞","陳Ｏ立","林Ｏ滕","蕭Ｏ欣","陳Ｏ豪","許Ｏ維","高Ｏ哲","江Ｏ貞","劉Ｏ呈","羅Ｏ祐","方Ｏ元","蘇Ｏ嘉","吳Ｏ展","林Ｏ丞","干Ｏ軍","王Ｏ堯","鄧Ｏ擇","黃Ｏ寧","蔡Ｏ衡","柯Ｏ澤","李Ｏ元","黃Ｏ豪","廖Ｏ喆","嚴Ｏ峰","任Ｏ丞","張Ｏ成","周Ｏ宇","張Ｏ貴","楊Ｏ雨","闕Ｏ","施Ｏ維","朱Ｏ緯","廖Ｏ寬","郭Ｏ桓","李Ｏ陞","游Ｏ澔","李Ｏ穎","張Ｏ碩","林Ｏ廷","張Ｏ騰","郭Ｏ均","劉Ｏ平","張Ｏ懷","黃Ｏ雅","林Ｏ君","潘Ｏ霖","楊Ｏ辰","廖Ｏ誼","陳Ｏ","張Ｏ翔","張Ｏ瑞","彭Ｏ棱","蘇Ｏ安","李Ｏ陞","鄭Ｏ遠","隋Ｏ華","沈Ｏ哲","林Ｏ逸","羅Ｏ齊","白Ｏ婷","林Ｏ翔","陳Ｏ安","林Ｏ鴻","莊Ｏ伊","陳Ｏ霖","吳Ｏ軒","蘇Ｏ揚","張Ｏ芝","李Ｏ安","SeＯn","郭Ｏ平","陳Ｏ儒","劉Ｏ祥","李Ｏ哲","彭Ｏ倫","許Ｏ甄","邱Ｏ一","林Ｏ彥","蘇Ｏ嘉","廖Ｏ涵","許Ｏ瑋","張Ｏ菖","王Ｏ堯"
];
var enrolledNameTable = [];
for(var i=0,tmp=[] ; i<enrolledName.length ; i+=5){
	enrolledNameTable.push(
		enrolledName.slice( i , i+5 )
	);
}

var React = require('react');
var ruler = require('../partial/ruler.jsx');
var Table = require('../partial/table.jsx');

var EnrollPage = React.createClass({
	getDefaultProps: function(){
		return { calledAnimation: false };
	},
	componentDidMount: function(){
		window.addEventListener('scroll', this.checkReached, false);
	},
	checkReached: function(){
		if( !ruler.haveReached( document.getElementById('enrollPage') ) )
			return;
		if( this.props.calledAnimation )
			return;
		this.props.calledAnimation = true;
		window.removeEventListener('scroll', this.checkReached, false);
		enrollPageAnimation();
	},
	render: function(){
		/*

						<div className="tmpContent">
							<strong>{tmpContent[0]}</strong>
							<strong>{tmpContent[1]}</strong>
							<strong className="claimDate">
								<p>公告錄取</p>
								<p>06 . 05</p>
							</strong>
						</div>

		*/
		return (
			<div className="enrollPage">
				<div className="pageContainer">
					<div className="left">
						<h2>錄取團員</h2>
						<Table applyClass="enrollPageTable" colClass="popInPre">
							{enrolledNameTable}
						</Table>
						<img className="girl" src={"img/girl.png"} />
					</div>
				</div>
			</div>
		);
	}
});

React.render(
	<EnrollPage />,
	document.getElementById('enrollPage')
);

function enrollPageAnimation(){
	var popIn = document.querySelectorAll('#enrollPage .col');
	for(var i=0 ; i<popIn.length ; ++i){
		popIn[i].className = popIn[i].className + 
			" delayRand" + 
			( 1+Math.floor((Math.random()*19)) );
	}
	for(var i=0 ; i<popIn.length ; ++i)
		popIn[i].className = popIn[i].className + " popIn";
	popIn = null;
}
