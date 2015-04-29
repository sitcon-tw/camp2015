
module.exports = {
	topPage: document.getElementById("coverPage"),
	getHeight: function(domObj){
		return domObj.offsetHeight;
	},
	getScrollTopY: function(domObj){
		var cntDistance = 0;
		while( domObj && domObj.offsetTop ){
			cntDistance += domObj.offsetTop;
			domObj = domObj.offsetParent;
		}
		return cntDistance;
	},
	getScrollBottomY: function(domObj){
		return this.getScrollTopY(domObj) - this.getHeight(this.topPage);
	},
	getTopY: function(domObj){
		return domObj.offsetTop;
	},
	getBottomY: function(domObj){
		return domObj.offsetTop + domObj.offsetHeight;
	},
	getScrollY: function(){
		if (self.pageYOffset)
			return self.pageYOffset;
		else if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
		else if (document.body)// all other Explorers
			return document.body.scrollTop;
	},
	// for navbar to know which page now
	haveReached: function(domObj){
		if( this.getScrollY() >= 
				this.getTopY(domObj)-250 )
			return true;
		return false;
	},
	// for every page to trigger admisson animation
	haveReaching: function(domObj){
		if( this.getScrollY() >= 
				this.getScrollTopY(domObj)-this.getHeight(document.body)/4*3 )
			return true;
		return false;
	}
};