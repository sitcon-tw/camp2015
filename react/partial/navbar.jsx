
var React = require('react');

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
			scrollTop: getScrollBottomY( document.getElementById(target) )
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
		var nowPage = btns[0].dest;
		for(var i=btns.length-1 ; i>0 ; --i){
			var pageScrollTopY = 
			  getScrollTopY( document.getElementById(btns[i].dest) );
			if( getScrollY() >= pageScrollTopY + 80 ){
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
	getInitialState: function(){
		return {
			bottom: 0
		};
	},
	checkFixing: function(){
		console.log( getScrollY() + " " + getHeight(this.getDOMNode()) );
		if( getScrollY() >= getHeight(this.getDOMNode()) ){
			var bottom = 
			  getScrollY() - getScrollBottomY(document.getElementById('padding3'))
			  					- getHeight(this.getDOMNode());

			if( bottom < 0 || isMobile.any() )
				bottom = -1; 
			if( this.state.position=="fixed" && this.state.bottom==bottom )
				return;
			this.setState({
				position: "fixed",
				bottom: bottom+"px"
			});
		}
		else{
			if( this.state.position != "static" )
				this.setState({
					position: "static"
				});
		}
	},
	render: function(){
		return (
			<div className="navbar" style={this.state}>
				<BarButtonBlock buttons={barContent} />
			</div>
		);
	}
});

module.exports = Navbar;