const fs = require("fs");
const path = require("path");

// Chemin vers le dossier contenant les fichiers JSON
const dataDir = path.join(__dirname, "src", "data");

// Lister tous les fichiers dans le dossier
fs.readdir(dataDir, (err, files) => {
	if (err) {
		console.error("Erreur lors de la lecture du dossier:", err);
		return;
	}

	// Parcourir chaque fichier
	files.forEach((file) => {
		// Vérifier si le fichier est un fichier JSON
		if (path.extname(file) === ".json") {
			const filePath = path.join(dataDir, file);

			// Lire le contenu du fichier JSON
			fs.readFile(filePath, "utf8", (err, data) => {
				if (err) {
					console.error("Erreur lors de la lecture du fichier:", err);
					return;
				}

				// Parser le contenu JSON
				let jsonData;
				try {
					jsonData = JSON.parse(data);
				} catch (err) {
					console.error("Erreur lors du parsing du JSON:", err);
					return;
				}

				// Ajouter la clé "ref" à chaque objet
				jsonData.forEach((obj) => {
					obj.ref = ""; // Vous pouvez définir la valeur souhaitée ici
				});

				// Convertir les données JSON en chaîne de caractères
				const updatedData = JSON.stringify(jsonData, null, 2);

				// Écrire les données mises à jour dans le fichier
				fs.writeFile(filePath, updatedData, "utf8", (err) => {
					if (err) {
						console.error("Erreur lors de l'écriture du fichier:", err);
						return;
					}
					console.log(`Fichier ${file} mis à jour avec succès.`);
				});
			});
		}
	});
});
