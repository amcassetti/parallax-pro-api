var express = require('express');
var app = express();

var CDN = "https://storage.googleapis.com/parallax-pro-bucket";

var Categories = [{
	id: 'ci',
	name: 'Cityscapes',
	icon: CDN+'/images/ps/thumb/ci1thumb.jpg'
}];

var Wallpapers = [
	{
		id: 'ci1',
		category: 'ci',
		name: '',
		image_url: CDN+'/images/ps/rgba/ci1rgba.jpg',
		depth_url: CDN+'/images/ps/rgba/ci1z.jpg'
	},
	{
		id: 'ci2',
		category: 'ci',
		name: '',
		image_url: CDN+'/images/ps/rgba/ci2rgba.jpg',
		depth_url: CDN+'/images/ps/rgba/ci2z.jpg'
	},
	{
		id: 'ci3',
		category: 'ci',
		name: '',
		image_url: CDN+'/images/ps/rgba/ci3rgba.jpg',
		depth_url: CDN+'/images/ps/rgba/ci3z.jpg'
	},
	{
		id: 'ci4',
		category: 'ci',
		name: '',
		image_url: CDN+'/images/ps/rgba/ci4rgba.jpg',
		depth_url: CDN+'/images/ps/rgba/ci4z.jpg'
	}
];


app.get('/categories', function(req, res){
  	res.status(200).send(Categories);
});

app.get('/wallpapers', function(req, res){

  	res.status(200).send(Wallpapers);
});

var server = app.listen(process.env.PORT || 8081, function(){
    var port = server.address().port;
    console.log('App listening on port '+port);
});

module.exports = app;
