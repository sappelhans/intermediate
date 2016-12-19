// Meteor.subscribe('recipes');

Template.Recipes.onCreated( function() {
	var self = this;
	Session.set('newRecipe', false);
	self.autorun( function() {
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});

Template.Recipes.events({
	'click .new-recipe' : () => {
		Session.set('newRecipe', true);
	}

})

Template.RecipeSingle.onCreated( function() {
	var self = this;
	self.autorun( function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});