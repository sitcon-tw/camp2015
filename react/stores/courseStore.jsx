
var React = require('react');

var Dispatcher = require('../dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var courses = {
	git: require('./courseGit.jsx'),
	web: require('./courseWeb.jsx'),
	community: require('./courseCommunity.jsx'),
	security: require('./courseSecurity.jsx'),
	story: require('./courseStory.jsx')
};
var modeShow = false;
var nowWhich = "web";

function show(which){
	modeShow = true;
	nowWhich = which;
}
function close(){
	modeShow = false;
}

var CourseStore = assign({}, EventEmitter.prototype, {
	nowCourse: function(){
		return courses[nowWhich];
	},
	nowShow: function(){
		return modeShow;
	},
	emitShow: function(){
		this.emit('show');
	},
	emitClose: function(){
		this.emit('close');
	},
	addShowListener: function(callback){
		this.on('show',callback);
	},
	removeShowListener: function(callback){
		this.removeListener('show',callback);
	},
	addCloseListener: function(callback){
		this.on('close',callback);
	},
	removeCloseListener: function(callback){
		this.removeListener('close',callback);
	}
});

Dispatcher.register(function(action){
	var str;

	switch(action.actionType){
		case 'showCourse':
			show( action.which );
			CourseStore.emitShow();
			break;

		case 'close':
			close();
			CourseStore.emitClose();
			break;

		default:

	}
});

module.exports = CourseStore;