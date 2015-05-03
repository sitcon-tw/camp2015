
var tmpContent = [];//["加入我們吧！！","公佈日期2015.06.10"];

var enrolledName = ["廖Ｏ喬","翁Ｏ皓","蔡Ｏ芳","馬Ｏ豪","鐘Ｏ欣","駱Ｏ頡","謝Ｏ翰","吳Ｏ達","徐Ｏ裴","陳Ｏ睿","唐Ｏ玲","魏Ｏ洋","鄭Ｏ劭","陳Ｏ中","鄒Ｏ銘","周Ｏ宇","郭Ｏ塘","田Ｏ瑄","邱Ｏ甄","尤Ｏ衡","楊Ｏ恩","謝Ｏ濬","蔡Ｏ華","卓Ｏ凱","林Ｏ平","翁Ｏ宸","蔡Ｏ華","胡Ｏ安","湯Ｏ擎","簡Ｏ翰","湯Ｏ摯","張Ｏ奕","張Ｏ翔","黃Ｏ豪","何Ｏ儒","陳Ｏ宇","陳Ｏ晴","陳Ｏ昇","陳Ｏ宏","辜Ｏ豪","丁Ｏ傑","邱Ｏ蓉","廖Ｏ涵","李Ｏ儒","潘Ｏ元","楊Ｏ勳","林Ｏ安","林Ｏ期","劉Ｏ瑜","陳Ｏ山","陳Ｏ蓁","施Ｏ文","陳Ｏ文","李Ｏ中","王Ｏ乾","劉Ｏ福","劉Ｏ倫","張ＯＯ甫","蔡Ｏ霖","蔡Ｏ璇","林Ｏ富","張Ｏ庭","陳Ｏ華","蔡Ｏ文","尤Ｏ凱","鄭Ｏ霖"];
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