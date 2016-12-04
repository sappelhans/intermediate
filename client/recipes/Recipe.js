Template.Recipe.events({
	'click .toggle-menu': function() {
		console.log('click');
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	}
});