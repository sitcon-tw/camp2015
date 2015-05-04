
var React = require('react');
var ruler = require('./ruler.jsx');

var barContent = [
	{ page:"SITCON 夏令營", dest:"coverPage" },
	{ page:"關於", dest:"aboutPage" },
	{ page:"錄取", dest:"enrollPage" },
	{ page:"報名", dest:"paywayPage" },
	{ page:"課程", dest:"coursePage" },
	{ page:"工作團隊", dest:"staffPage" },
	{ page:"贊助", dest:"sponsorPage" }
];

var BarResponsive = React.createClass({
	componentDidMount: function(){
		this.getDOMNode().addEventListener('click', this.open , false);
	},
	bindOpen: function(){
		this.getDOMNode().addEventListener('click', this.open , false);
		window.removeEventListener('click', this.close , false);
	},
	bindClose: function(){
		window.addEventListener('click', this.close , false);
		this.getDOMNode().removeEventListener('click', this.open , false);
	},
	open: function(){
		$('.barButtonBlock').css('display','block');
		var that = this;
		setTimeout( function(){
			that.bindClose();
			that = null;
		},500);
	},
	close: function(){
		$('.barButtonBlock').css('display','none');
		var that = this;
		setTimeout( function(){
			that.bindOpen();
			that = null;
		},500);
	},
	render: function() {
		return (
			<div className="barResponsive">
				MENU
			</div>
		);
	}
});

var BarButton = React.createClass({
	scrollTo: function(){
		var target = this.props.dest;
		$('html,body').animate({
			scrollTop: ruler.getTopY( document.getElementById(target) )
		} , 1000);
	},
	render: function(){
		if( this.props.now=="true" )
			return (
				<div className="barButton nowPage" onClick={this.scrollTo}>
					{this.props.children}
				</div>
			);
		else 
			return (
				<div className="barButton" onClick={this.scrollTo}>
					{this.props.children}
				</div>
			);
	}
});

var barButtonScrollMixin = {
	componentDidMount: function(){
		window.addEventListener('scroll', this.checkWhichPage, false);
	},
	componentWillUnmount: function(){
		window.removeEventListener('scroll', this.checkWhichPage, false);
	}
};

var BarButtonBlock = React.createClass({
	mixins: [barButtonScrollMixin],
	getInitialState: function(){
		return {
			nowPage: ""
		};
	},
	checkWhichPage: function(){
		var btns = this.props.buttons;
		var nowPage = " ";
		for(var i=btns.length-1 ; i>0 ; --i){
			if( ruler.haveReached( document.getElementById(btns[i].dest) ) ){
				nowPage = btns[i].dest;
				break;
			}
		}
		if( nowPage == this.state.nowPage )
			return;
		this.setState( { nowPage:nowPage } );
	},
	render: function(){
		var nowPage = this.state.nowPage;
		var allBarButtons = this.props.buttons.map(function(button,cnt){
			var now = "false";
			if( button.dest == nowPage )
				now = "true";
			if( cnt == 0 )
				return (
					<div className="barButtonSubBlock" key={cnt}>
						<BarButton now={now} dest={button.dest}>
							{button.page}
						</BarButton>
					</div>
				);
			else
				return (
					<div className="barButtonSubBlock" key={cnt}>
						<div className='barButtonSep'>|</div>
						<BarButton  now={now} dest={button.dest}>
							{button.page}
						</BarButton>
					</div>
				);
		});
		return (
			<div className="barButtonBlock">
				{allBarButtons}
			</div>
		);
	}
});

var NavbarScrollMixin = {
	componentDidMount: function(){
		window.addEventListener('scroll', this.checkFixing, false);
	},
	componentWillUnmount: function(){
		window.removeEventListener('scroll', this.checkFixing, false);
	}
};
var NavbarResizeMixin = {
	componentDidMount: function(){
		window.addEventListener('resize', this.checkFixing, false);
	},
	componentWillUnmount: function(){
		window.removeEventListener('resize', this.checkFixing, false);
	}
};

var Navbar = React.createClass({
	mixins: [NavbarScrollMixin , NavbarResizeMixin],
	getDefaultProps: function(){
		return {
			abs: {
				position: "absolute",
				top: "-60px"
			},
			fix: {
				position: "fixed",
				top: "0px"
			},
			anchor: document.getElementById('coverPage')
		}
	},
	getInitialState: function(){
		return {
			mode: "abs"
		};
	},
	checkFixing: function(){
		if( ruler.getScrollY() >= 
				ruler.getBottomY(this.props.anchor)-60 ){
			if( this.state.mode != "fix" )
				this.setState({ mode: "fix" });
		}
		else{
			if( this.state.mode != "abs" )
				this.setState({ mode: "abs" });
		}
	},
	render: function(){
		return (
			<div ref="navbar" className="navbar" style={ this.props[ this.state.mode ] }>
				<BarResponsive />
				<BarButtonBlock buttons={barContent} />
			</div>
		);
	}
});

module.exports = Navbar;