
var React = require('react');

var CouseHackathon = React.createClass({
	render: function(){
		return (
			<div className="courseFeature">
				<div className="header">
					<h2>Hackathon</h2>
					<h4>Feature</h4>
					<img src="img/alert.png"></img>
				</div>
				<p>黑客松（Hackathon）是「黑客」（Hack；原指早期為電腦系統找尋不完美的地方，或是探索不同的解法，來改善電腦系統）跟「馬拉松」（Marathon）的組合字，顧名思義，也就像是程式設計、工程界的馬拉松。由有興趣的一群人在有限的時間內，發揮自己的專長做出一個有特色的專案。</p>
				<p>今年， SITCON 夏令營將為學員打造一場專屬的小型黑客松，取代傳統的晚會、唱歌跳舞等活動，以小隊為單位，在吃吃喝喝的同時，一起發揮創意、運用課程中所學，做出與眾不同的作品呈現！</p>
			</div>
		);
	}
});

var CourseWorldCafe = React.createClass({
	render: function(){
		return (
			<div className="courseFeature">
				<div className="header">
					<h2>視界咖啡館</h2>
					<h4>Feature</h4>
					<img src="img/alert.png"></img>
				</div>
				<p>世界咖啡館 ( The World Café ) 是一種腦力激盪的討論程序，SITCON 夏令營以此為創意發想，參考並設計出「視界咖啡館」活動，邀請到各領域及社群前輩，將傳統座談會形式改以小組討論的樣貌呈現，並與學員分享工作經驗、學習過程、面對困難的解決方式或希望給予 SITCON 夏令營學員的建議，提出值得學員思考、了解的觀點。期望透過縮短講師及學員間的距離，鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。</p>
			</div>
		);
	}
});

var CourseFeature = React.createClass({
	render: function(){
		return (
			<div className="courseFeatureBlock">
				<CouseHackathon />
				<CourseWorldCafe />
			</div>
		);
	}
});

module.exports = CourseFeature;