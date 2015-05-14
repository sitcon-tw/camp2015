
var says = [
	{
		who:'Orin Chen',
		url:'http://blog.orinx.com/sitcon-summer-camp-2014-moztw-booth/',
		show:'很開心現場有朋友對我們的 MozTW 連續聚 很有興趣，希望能夠借由這次活動招募到更多社群成員！'
	},
	{
		who:'揪凱',
		url:'http://home.gamer.com.tw/creationDetail.php?sn=2518171',
		show:'我真的覺得這趟旅行很值得，謝謝我的隊輔香菇跟味增	謝謝參與這個營隊的人，謝謝所有的工作人員	讓我的第一次有這麼棒的體驗(？	不管是在視覺、聽覺設備上，都做得很好	還有聽風大大，每一餐都吃那麼好，我覺得豪開心喔:P'
	}
];

var React = require('react');

var OtherSay  =React.createClass({
	render: function(){
		return (
			<div className="otherSay">
				<p>
					{this.props.which.show}
				</p>
				<a target="_blank" href={this.props.which.url}>&gt; 完整閱讀</a>
				<div className="whosay">{this.props.which.who}</div>
			</div>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<div className="Footer">
				<footer>{"學生計算機年會籌備團隊"}</footer>
				<div className="followUs">
					<a target="_blank" href="https://www.facebook.com/SITCONCamp">
						<img src="img/fb.png" title="fb" />
					</a>
					<a target="_blank" href="https://www.flickr.com/photos/sitcon/sets/">
						<img src="img/flickr.png" title="flickr" />
					</a>
					<a target="_blank" href="https://www.youtube.com/channel/UCMXFGmpqKAowZMbvz2O2aEw">
						<img src="img/youtube.png" title="youtube" />
					</a>
					<a target="_blank" href="http://sitcon.org/2015/#/">
						<img src="img/sitcon.png" title="sitcon" />
					</a>
				</div>
				<div className="otherSayBlock">
					<OtherSay which={says[0]}/>
					<OtherSay which={says[1]}/>
				</div>
			</div>
		);
	}
});

React.render(
	<Footer />,
	document.getElementById('footer')
);