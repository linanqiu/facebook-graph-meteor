Package.describe({
	summary: "A package for getting user data and friends from a Facebook user"
});

Npm.depends({
	'fbgraph': '0.2.10'
});

Package.on_use(function(api, where) {
	api.use(['minimongo', 'mongo-livedata', 'accounts-facebook', 'accounts-ui'], 'client');

	api.add_files(['facebookPermissions.js'], 'client');
	api.add_files(['facebook.js'], 'server')
});
