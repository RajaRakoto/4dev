/* libs */
import * as fs from "fs";
import * as path from "path";

/* converts */
import { note1, note2, note3, note4, note5 } from "@/constants";

/* types */
import type { I_Collection } from "@/@types";

// ==========================

/**
 * @description Write data to a file
 * @param filePath Output file path
 * @param data Data to write to the file
 */
export function writeToFile(
	filePath: string,
	data: object | I_Collection[],
): void {
	fs.writeFileSync(filePath, JSON.stringify(data));
}

/**
 * @description Read data from a file
 * @param filePath Input file path
 */
export function readFromFile(filePath: string): object | I_Collection[] {
	const data = fs.readFileSync(filePath, "utf-8");
	return JSON.parse(data);
}

/**
 * @description Combine all JSON files in a directory
 * @param directoryPath The path to the directory containing the JSON files
 */
export function combineJSONfilesFromDirectory(
	directoryPath: string,
): I_Collection[] {
	let combinedObjects: I_Collection[] = [];
	const files = fs.readdirSync(directoryPath);

	files.forEach((file) => {
		if (path.extname(file) === ".json") {
			const data = fs.readFileSync(path.join(directoryPath, file), "utf-8");
			try {
				const json = JSON.parse(data);
				combinedObjects = combinedObjects.concat(json);
			} catch (error) {
				console.error(`Error: parsing JSON file -> ${file}:\n${error}`);
			}
		}
	});

	return combinedObjects;
}

/**
 * @description Get all keywords from the collections
 * @param data Collections data
 */
export function getAllKeywords(data: I_Collection[]): string[] {
	let keywords: string[] = [];
	data.forEach((collection) => {
		keywords = keywords.concat(collection.keywords);
	});
	return Array.from(new Set(keywords)).sort();
}

/**
 * @description Get the names of all JSON files in a directory
 * @param directoryPath The path to the directory containing the JSON files
 */
export function getJSONfilesNameFromDirectory(directoryPath: string): string[] {
	const files = fs.readdirSync(directoryPath);
	const jsonFiles = files.filter((file) => path.extname(file) === ".json");
	return jsonFiles.map((file) => path.basename(file, ".json")).sort();
}

/**
 * @description Transform a note into a star rating system
 * @param note
 */
export function getFormatedNote(note: number): string {
	switch (note) {
		case -1:
			return "unclassifiable";
		case 0:
			return "unclassified";
		case 1:
			return note1;
		case 2:
			return note2;
		case 3:
			return note3;
		case 4:
			return note4;
		case 5:
			return note5;
		default:
			return "unclassified";
	}
}

/**
 * @description Create a table separator
 * @param columns Number of columns
 */
export function getTableSeparator(columns: number): string {
	if (columns <= 0) {
		throw new Error("error: columns must be greater than 0");
	}
	return "| " + Array.from({ length: columns }, () => " :-- ").join("|") + " |";
}

/**
 * @description Transform text to markdown tag
 * @param text Input of text to transform
 */
export function getFormatedTag(text: string): string {
	let transformedText = text.replace(/\(|\)/g, "-");
	transformedText = transformedText.replace(/\+|&/g, "--");
	transformedText = transformedText.replace(/ /g, "-");
	transformedText = "#-" + transformedText.toLowerCase();
	return transformedText;
}

/**
 * @description Extract all collections by category
 * @param data Collections data
 * @param category Category to extract from the collections
 */
export async function getAllCollectionsByCategory(
	data: I_Collection[],
	category: string,
): Promise<I_Collection[]> {
	const filteredCollections = await data.filter(
		(collection) => collection.keywords[0] === category,
	);

	await filteredCollections.sort((a, b) => {
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});

	return filteredCollections;
}

/**
 * @description Check the validity of the data before writing it to a file
 * @param data Collections data
 */
export function checker(data: I_Collection[]): boolean {
	const errorsList: string[] = [];

	data.forEach((item) => {
		const errors: string[] = [];

		if (!item.name.trim()) {
			errors.push("Le nom ne doit pas être vide.");
		}
		if (!item.url.trim()) {
			errors.push("L'URL ne doit pas être vide.");
		}
		if (item.keywords.length === 0) {
			errors.push("Les mots-clés ne doivent pas être vides.");
		}
		if (!item.description.trim()) {
			errors.push("La description ne doit pas être vide.");
		}
		if (!item.description.trim().match(/^[A-Z]/)) {
			errors.push("La description doit commencer par une majuscule.");
		}
		if (!item.description.trim().match(/\.$/)) {
			errors.push("La description doit se terminer par un point.");
		}
		if (item.note < -1 || item.note > 5 || isNaN(item.note)) {
			errors.push("La note doit être un nombre entre -1 et 5.");
		}
		if (
			![item.name, item.url, item.ref, item.description].every(
				(field) => typeof field === "string",
			)
		) {
			errors.push(
				"Les champs name, url, ref et description doivent être des chaînes de caractères.",
			);
		}
		if (!item.keywords.every((keyword) => typeof keyword === "string")) {
			errors.push(
				"Les mots-clés doivent être un tableau de chaînes de caractères.",
			);
		}

		if (errors.length > 0) {
			errorsList.push(`[${item.name}] -> ${errors.join(", ")}`);
		}
	});

	if (errorsList.length > 0) {
		errorsList.forEach((error) => console.log(error));
		return false;
	}

	return true;
}
