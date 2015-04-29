
var aboutDetailText = [
	{title:"主辦單位" , content:["SITCON 學生計算機年會","聖約翰科技大學"]},
	{title:"活動時間" , content:[
		"第一梯次","104.7.20 ~ 104.7.23",
		"第二梯次","104.8.03 ~ 104.8.06"]},
	{title:"活動地點" , content:["聖約翰科技大學"]}
];
var aboutSitconText = {
	title:"關於 SITCON",
	content:["2012 年中，一群學生在社群浪潮中為相同的理想聚集，秉持「以學生為本、由學生自發舉辦」的核心理念，SITCON 學生計算機年會及同名社群自 2013 年起，陸續舉行年會、定期聚、黑客松、工作坊、夏令營與多場演講，於技術交流之餘，亦在推廣資訊及開源教育上不遺餘力，希望透過技術與知識的激盪，給予學生們一個用自身力量實踐夢想的舞台。"]
};
var aboutCampText = {
	title:"關於夏令營",
	content:["有鑑於資訊科技逐漸成為雲端時代的重要學門，社群與開源精神亦持續抬頭，SITCON 團隊認為將資訊教育向下扎根，為在資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並播灑開源種子，是一件相當重要且值得去做的事情。因此，2014 年暑假，第一屆 SITCON 夏令營於國立政治大學舉辦，課程內容涵括開源碼、資安、Maker、Python、網頁前端等。",
		"2015 年度，以「開源、創新、夥伴精神」為主軸，SITCON 夏令營將於聖約翰科技大學舉辦，延續新手村的概念，配合豐富的課程、座談會及社群闖關，讓學員在程式編寫管理、演算法思維、團隊合作等架構下學習；今年並將更進一步把故事和營隊整合，完整營造整體感，務求讓學員擁有截然不同的營隊體驗。"]
};

var React = require('react');
var Article = require('../partial/article.jsx');
var ruler = require('../partial/ruler.jsx');

var animateApply = "slideIn";
var slideInMixins = {
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
		this.getDOMNode().className +=  " " + animateApply;
	}
};

var AboutCamp = React.createClass({
	mixins: [slideInMixins],
	render: function(){
		return (
			<div className={"aboutCamp "+animateApply+"Pre"}>	
				<h2>{aboutCampText.title}</h2>
				<Article>
					{aboutCampText.content}
				</Article>
			</div>
		);
	}
});

var AboutSitcon = React.createClass({
	mixins:[slideInMixins],
	render: function(){
		return (
			<div className={"aboutSitcon "+animateApply+"Pre"}>
				<h2>{aboutSitconText.title}</h2>
				<Article>
					{aboutSitconText.content}
				</Article>
			</div>
		);
	}
});

var AboutDetail = React.createClass({
	mixins:[slideInMixins],
	render: function(){
		var allDetail = this.props.details.map(function(li,cnt){
			return (
				<div className="detailRow" key={"detailRow"+cnt}>
					<h2>{li.title}</h2>
					<Article>
						{li.content}
					</Article>
				</div>
			);
		})
		return (
			<div className={"aboutDetail "+animateApply+"Pre"}>
				{allDetail}
			</div>
		);
	}
});

var AboutPage = React.createClass({
	render: function(){
		return(
			<div className="aboutPage pageContainer">
				<img className="header" src="img/logo.png" />
				<AboutCamp />
				<AboutSitcon />
				<AboutDetail details={aboutDetailText} />
				<div className="clear"></div>
			</div>
		);
	}
});

React.render(
	<AboutPage />,
	document.getElementById('aboutPage')
);


function aboutPageAnimation(){
	var delay = 100;
	var slideIn = document.querySelectorAll('#aboutPage .'+animateApply+'Pre');
	for(var i=0 ; i<slideIn.length ; ++i){
		slideIn[i].className = slideIn[i].className + " " + animateApply;
	}
	slideIn = null;
}