Package.describe({
	summary: "A package for getting user data and friends from a Facebook user"
});

Package.on_use(function(api, where) {
	api.use(['minimongo', 'mongo-livedata'], 'client');

	api.add_files(['facebookPermissions.js'], 'client');
	api.add_files(['facebook.js'], 'server')
});