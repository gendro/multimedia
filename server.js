var http = require('http');
var fs = require('fs');
var path = require('path');

function ejecutar(){
	function onRequest(req, res){
		var rutaArchivo = '.' + ((req.url=='/')?'/multimedia.html':req.url);
		console.log(rutaArchivo);
		
		var ext = path.extname(rutaArchivo);
		var contentType = 'text/html';
		switch(ext){
			case '.css':
				contentType = 'text/css';
				break;
			case '.js':
				contentType = 'text/javascript';
				break;
		}
		
		path.exists(rutaArchivo, function(existe){
			if(existe){
				fs.readFile(rutaArchivo, function(error, contenido){
					if(error){
						res.writeHead(500);
						res.end();
					}else{
						res.writeHead(200, {'Content-Type':contentType});
						res.end(contenido);
					}
				})
			}else{
				res.writeHead(404);
				res.end();
			}
		});
	}
	var server = http.createServer(onRequest).listen(5000);
	console.log('Servidor corriendo en puerto 5000')
}


exports.ejecutar = ejecutar;