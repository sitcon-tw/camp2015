
var React = require('react');
var ruler = require('./ruler.jsx');

var barContent = [
	{ page:"SITCON 夏令營", dest:"coverPage" },
	{ page:"關於", dest:"aboutPage" },
	{ page:"錄取", dest:"enrollPage" },
	{ page:"付費", dest:"paywayPage" },
	{ page:"課程", dest:"coursePage" },
	{ page:"員工", dest:"staffPage" },
	{ page:"贊助", dest:"sponsorPage" }
];

var WebName = React.createClass({
	render: function(){
		return (
			<div className="webName">{this.props.children}</div>
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
			var pageTopY = ruler.getTopY( document.getElementById(btns[i].dest) );

			if( ruler.getScrollY() >= pageTopY-250 ){
				nowPage = btns[i].dest;
				break;
			}
		}
		if( nowPage == this.state.nowPage )
			return;
		this.setState( { nowPage:nowPage } );
	},
	render: function(){
		var cnt = 0;
		var nowPage = this.state.nowPage;
		var allBarButtons = this.props.buttons.map(function(button){
			var now = "false";
			if( button.dest == nowPage )
				now = "true";
			if( cnt++ == 0 )
				return (
					<div className="barButtonBlock">
						<BarButton now={now} dest={button.dest}>
							{button.page}
						</BarButton>
					</div>
				);
			else
				return (
					<div>
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
				top: "-80px"
			},
			fix: {
				position: "fixed",
				top: "0px"
			}
		}
	},
	getInitialState: function(){
		return {
			mode: "abs"
		};
	},
	checkFixing: function(){
		if( ruler.getScrollY() >= ruler.getHeight(document.body)-80 ){
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
			<div className="navbar" style={ this.props[ this.state.mode ] }>
				<BarButtonBlock buttons={barContent} />
			</div>
		);
	}
});

module.exports = Navbar;