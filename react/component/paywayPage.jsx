
 

var paywayParagraphs = [
	"$ <span class='left'>\
			活動費用\
		</span>\
		<span class='right'>\
			新台幣 5000 元整\
		</span>",
	"$ <span class='left'>\
			優惠\
		</span>\
		<span class='right'>\
			三人以上之團體報名，會統一於營期結束時，退回優待的差價，您可以一次匯多個人的費用。\
		</span>",
	"$ <span class='left'>\
			補助\
		</span>\
		<span class='right'>\
			<a>報名費用補助辦法</a>\
		</span>",
	" "," "," ",
	"本次營隊報名費繳款方式有兩種",
	"$ <ol>\
			<li>ATM 轉帳：使用金融卡轉帳，單日最高三萬元。</li>\
			<li>臨櫃匯款：至郵局或銀行填寫匯款單，寫妥銀行、帳號、戶名、金額。</li>\
		</ol>",
	"繳費帳戶",
	"$ <span class='quo'>\
			銀行：花旗銀行（代碼 021）\
		</span><span class='quo'>\
			分行：敦化分行\
		</span>\
		<span class='quo'>\
			帳號：67067-43365</span>\
		<span class='quo'>\
			戶名：郭杰穎（代碼 021）\
		</span>",
	" "," "," ",
	"注意事項",
	"$ <ol>\
			<li>完成繳費後請至<a>http://goo.gl/oQR7jJ</a>填寫回報表單，我們才知道你有完成匯款噢！</li>\
			<li>需填寫匯款帳戶的戶名、帳號末五碼及匯款日期，我們在收到後會回信通知。活動結束後，我們也會將收費情況公佈於網站上。</li>\
		</ol>"
];

var React = require('react');
var Article = require('../partial/article.jsx');

var PaywayPage = React.createClass({
	render: function(){
		return(
			<div className="paywayPage pageContainer">
				<h2>繳 費</h2>
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