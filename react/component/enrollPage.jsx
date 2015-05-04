
var tmpContent = ["人生總充滿著不可思議，覺得不可能的事情也許下一秒就發生在眼前，即使如此我們還是會笑、會難過、會吵架，也會將努力灑落在夢想與希望的種子上。",
"有些害羞內向的鎮長、和藹可親的副鎮長、喜歡小道消息的執行官、認真負責的訓練官，和其他好多好多的大家都是同為新手鎮努力的一份子，過程中也許有一點溫馨、有一點搞笑，還帶點苦澀，但這是我們的故事，要一起來嗎？"];

var enrolledName = [];//["廖Ｏ喬","翁Ｏ皓","蔡Ｏ芳","馬Ｏ豪","鐘Ｏ欣","駱Ｏ頡","謝Ｏ翰","吳Ｏ達","徐Ｏ裴","陳Ｏ睿","唐Ｏ玲","魏Ｏ洋","鄭Ｏ劭","陳Ｏ中","鄒Ｏ銘","周Ｏ宇","郭Ｏ塘","田Ｏ瑄","邱Ｏ甄","尤Ｏ衡","楊Ｏ恩","謝Ｏ濬","蔡Ｏ華","卓Ｏ凱","林Ｏ平","翁Ｏ宸","蔡Ｏ華","胡Ｏ安","湯Ｏ擎","簡Ｏ翰","湯Ｏ摯","張Ｏ奕","張Ｏ翔","黃Ｏ豪","何Ｏ儒","陳Ｏ宇","陳Ｏ晴","陳Ｏ昇","陳Ｏ宏","辜Ｏ豪","丁Ｏ傑","邱Ｏ蓉","廖Ｏ涵","李Ｏ儒","潘Ｏ元","楊Ｏ勳","林Ｏ安","林Ｏ期","劉Ｏ瑜","陳Ｏ山","陳Ｏ蓁","施Ｏ文","陳Ｏ文","李Ｏ中","王Ｏ乾","劉Ｏ福","劉Ｏ倫","張ＯＯ甫","蔡Ｏ霖","蔡Ｏ璇","林Ｏ富","張Ｏ庭","陳Ｏ華","蔡Ｏ文","尤Ｏ凱","鄭Ｏ霖"];
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
		//enrollPageAnimation();
	},
	render: function(){
		/*

						<Table applyClass="enrollPageTable" colClass="popInPre">
							{enrolledNameTable}
						</Table>

		*/
		return (
			<div className="enrollPage">
				<div className="pageContainer">
					<div className="left">
						<h2>錄取團員</h2>
						<div className="tmpContent">
							<strong>{tmpContent[0]}</strong>
							<strong>{tmpContent[1]}</strong>
						</div>
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