/* CREATION DU SERVEUR WEB */
let http = require('http'); //appel du module http (pour la creation du serveur)
let fs = require('fs'); //file system module (pour la manipulation des fichiers)

let server = http.createServer();

server.on('request', (request, response) => {
	console.log('[request] -> true'); //request log
	fs.readFile('index.html', (err, data) => {
		//lecture du fichier "index.html"
		if (err) {
			//gestion d'exception/erreur
			response.writeHead(400);
			response.end('File not found !');
		} else {
			response.writeHead(200, { 'Content-Type': 'text/html' }); //entete de type html
			response.write(data); //retourner les donnEes de "index.html"
		}
		response.end(); //met fin a la connexion
	});
});

//le port a ecouter par le serveur - NOTE: Error: EACCES si le port est deja utilisE
server.listen(8080);
