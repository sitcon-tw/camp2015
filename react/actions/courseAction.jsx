
var Dispatcher = require('../dispatcher.jsx');

var CourseAction = {
	show: function(whichCourse){
		Dispatcher.dispatch({
			actionType: 'showCourse',
			which: whichCourse
		});
	},
	close: function(){
		Dispatcher.dispatch({
			actionType: 'close'
		});
	}
};

module.exports = CourseAction;