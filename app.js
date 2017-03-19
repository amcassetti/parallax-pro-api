var express = require('express');
var app = express();

var CDN = "https://storage.googleapis.com/parallax-pro-bucket";

var Categories = [
	{
		id: 'an',
		name: 'Animals',
		icon: CDN+'/images/ps/thumb/an1thumb.jpg'
	},
	{
		id: 'ci',
		name: 'Cityscape',
		icon: CDN+'/images/ps/thumb/ci1thumb.jpg'
	}, 
	{
		id: 'la',
		name: 'Landscape',
		icon: CDN+'/images/ps/thumb/la1thumb.jpg'
	}, 
	{
		id: 'na',
		name: 'Nature',
		icon: CDN+'/images/ps/thumb/na1thumb.jpg'
	}
];

var Wallpapers = [
	// cityscape
	{
		id: 'ci1',
		category: 'ci',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/ci1thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/ci1rgba.jpg',
		depth_url: CDN+'/images/ps/z/ci1z.jpg'
	},
	{
		id: 'ci2',
		category: 'ci',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/ci2thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/ci2rgba.jpg',
		depth_url: CDN+'/images/ps/z/ci2z.jpg'
	},
	{
		id: 'ci3',
		category: 'ci',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/ci3thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/ci3rgba.jpg',
		depth_url: CDN+'/images/ps/z/ci3z.jpg'
	},
	{
		id: 'ci4',
		category: 'ci',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/ci4thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/ci4rgba.jpg',
		depth_url: CDN+'/images/ps/z/ci4z.jpg'
	},

	// landscape
	{
		id: 'la1',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la1thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la1rgba.jpg',
		depth_url: CDN+'/images/ps/z/la1z.jpg'
	},
	{
		id: 'la2',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la2thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la2rgba.jpg',
		depth_url: CDN+'/images/ps/z/la2z.jpg'
	},
	{
		id: 'la3',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la3thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la3rgba.jpg',
		depth_url: CDN+'/images/ps/z/la3z.jpg'
	},
	{
		id: 'la4',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la4thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la4rgba.jpg',
		depth_url: CDN+'/images/ps/z/la4z.jpg'
	},
	{
		id: 'la5',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la5thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la5rgba.jpg',
		depth_url: CDN+'/images/ps/z/la5z.jpg'
	},
	{
		id: 'la6',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la6thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la6rgba.jpg',
		depth_url: CDN+'/images/ps/z/la6z.jpg'
	},
	{
		id: 'la7',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la7thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la7rgba.jpg',
		depth_url: CDN+'/images/ps/z/la7z.jpg'
	},
	{
		id: 'la8',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la8thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la8rgba.jpg',
		depth_url: CDN+'/images/ps/z/la8z.jpg'
	},
	{
		id: 'la9',
		category: 'la',
		name: '',
		thumb_url: CDN+'/images/ps/thumb/la9thumb.jpg',
		rgba_url: CDN+'/images/ps/rgba/la9rgba.jpg',
		depth_url: CDN+'/images/ps/z/la9z.jpg'
	}
];


app.get('/categories', function(req, res){

  	res.status(200);
  	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ res: Categories }));

});

app.get('/categories/:id', function(req, res){

	let catWalls = Wallpapers.filter(function(c){
		return c.id = req.params.id
	});

  	res.status(200);
  	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ res: catWalls }));
});

app.get('/wallpapers/popular', function(req, res){

  	res.status(200);
  	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ res: Wallpapers }));
});

app.get('/wallpapers/new', function(req, res){

  	res.status(200);
  	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ res: Wallpapers.reverse() }));
});

var server = app.listen(process.env.PORT || 8081, function(){
    var port = server.address().port;
    console.log('App listening on port '+port);
});

module.exports = app;
