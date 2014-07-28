Package.describe({
	summary: "A package for getting user data and friends from a Facebook user"
});

Package.on_user(function(api, where) {
	api.user(['minimongo', 'mongo-livedata', 'templating'], 'client');

	api.add_files(['facebookPermissions.js'], 'client');
	api.add_files(['facebook.js'], 'server')
});