
var coc = {
	title: "行為準則 / Code of Conduct",
	content: [
		"SITCON 夏令營期許成為年輕學子踏入資訊世界的引路人，同時我們也致力於為每位成員提供更友善、開放的環境。相信每位進入 SITCON 夏令營的學員及夥伴都值得被尊重，而我們亦將盡力提供最安全的環境，讓參與 SITCON 夏令營的每個人能夠尊重個體間的差異、在社群中相互扶助、並鼓勵所有人揮灑屬於自己的生命色彩。 因此，若有幸能在 SITCON 夏令營與您見面，無論您是以學員、贊助商、工作人員、或是講者的身份參加，我們都希望您配合遵守以下的行為準則：",
		"$ <ul>",
		"$ <li>* 尊重每一位參與者，將對方的感受放在心上。<li>",
		"$ <li>* 避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的言語及手勢。<li>",
		"$ <li>* 多關心周遭的所有同伴，適度詢問對方是否需要協助。<li>",
		"$ <li>* 當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助。<li>",
		"$ <li>* 在夏令營裡多交朋友，珍惜彼此相聚的時光！<li>",
		"$ </ul>",
		"以下的行為是不被容忍的：",
		"$ <ul>",
		"$ <li>* 針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯。<li>",
		"$ <li>* 任何形式的性騷擾、言語及肢體霸凌。</li>",
		"$ <li>* 公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論、影像、或錄影。</li>",
		"$ <li>* 無故干擾課程、議程或活動的正常進行，無視工作人員或他人的制止。</li>",
		"$ <li>* 干擾、攻擊現場提供之網路，未經同意側錄封包或散佈隱私資訊。</li>",
		"$ <li>* 任何違反法律的行為。</li>",
		"$ </ul>",
		"為了確保每位參與者的安全，我們將恪守以上規則。對於違反行為準則者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 SITCON 夏令營工作人員的協助。我們誠摯的邀請來到 SITCON 夏令營的朋友一同履行以上承諾，將 SITCON 夏令營打造為更友善、溫暖的所在；讓每一位參與者，都能在夏令營的活動和相處中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜、試圖給予所有學員的，屬於學生社群的真正精神。"
	]
};
var aboutDetailText = [
	{title:"主辦單位" , content:["SITCON 學生計算機年會","聖約翰科技大學","OCF財團法人開放文化基金會"]},
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
		this.getDOMNode().className +=  " slideIn";
	}
};

var AboutCamp = React.createClass({
	mixins: [slideInMixins],
	render: function(){
		return (
			<div className={"aboutCamp slideInPre"}>	
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
			<div className={"aboutSitcon slideInPre"}>
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
			<div className={"aboutDetail slideInPre"}>
				{allDetail}
			</div>
		);
	}
});

var CoC = React.createClass({
	mixins:[slideInMixins],
	render: function(){
		return (
			<div className={"coc slideInPre"}>
				<h2>{coc.title}</h2>
				<Article>
					{coc.content}
				</Article>
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
				<CoC />
			</div>
		);
	}
});

React.render(
	<AboutPage />,
	document.getElementById('aboutPage')
);