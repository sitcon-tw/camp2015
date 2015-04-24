
module.exports = {
	getHeight: function(domObj){
		return domObj.offsetHeight;
	},
	getScrollTopY: function(domObj){
		return this.getTopY(domObj) - document.body.offsetHeight;
	},
	getScrollBottomY: function(domObj){
		return this.getBottomY(domObj) - document.body.offsetHeight;
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
	}
};