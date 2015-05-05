
var paywayParagraphs = [
	"$ <span class='left'>\
			活動費用\
		</span>\
		<span class='right'>\
			新台幣 5500 元整\
		</span>",
	"$ <span class='left'>\
			補助辦法\
		</span>\
		<span class='right'>\
			<a id='linkHelpFinancial' target='_blank' href='data/SITCONCamp2015helpFinanial.pdf'>報名費用補助辦法</a>\
		</span>",
	"$ <span class='left'>\
			開放報名\
		</span>\
		<span class='right'>\
			2015 . 05 . 15\
		</span>",
	"$ <span class='left'>\
			報名截止\
		</span>\
		<span class='right'>\
			2015 . 05 . 30\
		</span>",
	" ",
	"$ 本次營隊報名採用KKTIX <a id='linkDetailProc' target='_blank' href='data/SITCONCamp2015takePartIn.pdf'>詳細報名流程</a>",
	"$ <div class='registBlock'>\
			<a target='_blank' class='regist1' href='http://sitcon.kktix.cc/events/camp-2015-first-1'>\
				<p>我要報名第一梯次</p>\
				<p>07.20 ~ 07.23</p>\
			</a>\
			<a target='_blank' class='regist2' href='http://sitcon.kktix.cc/events/camp-2015-second-1'>\
				<p>我要報名第二梯次</p>\
				<p>08.03 ~ 08.06</p>\
			</a>\
		</div>",
	"注意事項",
	"$ <ol>\
			<li>兩梯次時間都能參與的學員可兩梯次之活動均報名，唯同一報名人至多僅予錄取一梯次學員資格。</li>\
			<li>正取學員之邀請碼不得轉讓他人使用。</li>\
			<li>繳費後方為完成報名程序，正取學員需於公告名單後幾日完成報名，逾期名額將釋放給候補學員。</li>\
			<li>後續通知及行前注意事項均將透過學員填寫之電子信箱聯繫，請務必保持收信以免影響個人權益。</li>\
			<li>任何相關問題請寄信至 <a href='mailto:ask@sitcon.camp'>ask@sitcon.camp</a> ，我們將盡快與您連絡。</li>\
		</ol>"
];

var React = require('react');
var Article = require('../partial/article.jsx');
//var Info = require('../partial/info.jsx');

var HelpFinancial = React.createClass({
	render: function(){
		return(
			<div className="HelpFinancialContent">
				<iframe src="http://docs.google.com/gview?url=http://ssinrc.org" frameborder="0">
				</iframe>
			</div>
		);
	}
});

var PaywayPage = React.createClass({
	render: function(){
/*

				<Info htmlID="helpFinancial" clickTriggerId="linkHelpFinancial">
					<HelpPayWay />
				</Info>
*/
		return(
			<div className="paywayPage pageContainer">
				<h2>報 名</h2>
				<Article applyClass={"paywayArticle"}>
					{paywayParagraphs}
				</Article>
			</div>
		);
	}
});

React.render(
	<PaywayPage />,
	document.getElementById('paywayPage')
);