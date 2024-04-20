/* libs */
import * as fs from "fs";
import * as path from "path";
import util from "util";

/* converts */
import { emojiWarning, note1, note2, note3, note4, note5 } from "@/constants";

/* types */
import type { I_Collection } from "@/@types";

// ==========================

export async function writeToFile(
	destination: string,
	content: string,
	successMessage: string,
): Promise<void> {
	const writeFileAsync = util.promisify(fs.writeFile);
	const readFileAsync = util.promisify(fs.readFile);

	try {
		const fileExists = fs.existsSync(destination);

		if (fileExists) {
			const existingContent = await readFileAsync(destination, "utf8");
			content = existingContent + content;
		}

		await writeFileAsync(destination, content);
		console.log(successMessage);
	} catch (error) {
		console.error(error);
	}
}

/**
 * @description Combine all JSON files in a directory
 * @param source The path to the directory containing the JSON files
 */
export function combineJSONfilesFromDirectory(source: string): I_Collection[] {
	let combinedObjects: I_Collection[] = [];
	const files = fs.readdirSync(source);

	files.forEach((file) => {
		if (path.extname(file) === ".json") {
			const data = fs.readFileSync(path.join(source, file), "utf-8");
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
 * @param source The path to the directory containing the JSON files
 */
export function getJSONfilesNameFromDirectory(source: string): string[] {
	const files = fs.readdirSync(source);
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

		if (!item.url.trim()) {
			errors.push("URL must not be empty.");
		}
		if (item.keywords.length === 0) {
			errors.push("Keywords must not be empty.");
		}
		if (!item.description.trim()) {
			errors.push("Description must not be empty.");
		}
		if (item.note < -1 || item.note > 5 || isNaN(item.note)) {
			errors.push("Note must be a number between -1 and 5.");
		}
		if (
			![item.name, item.url, item.ref, item.description].every(
				(field) => typeof field === "string",
			)
		) {
			errors.push("Name, URL, ref, and description fields must be strings.");
		}
		if (!item.keywords.every((keyword) => typeof keyword === "string")) {
			errors.push("Keywords must be an array of strings.");
		}

		if (errors.length > 0) {
			errorsList.push(`${emojiWarning} [${item.name}] -> ${errors.join(", ")}`);
		}
	});

	if (errorsList.length > 0) {
		errorsList.forEach((error) => console.log(error));
		return false;
	}

	return true;
}

/**
 * @description Fix the dot at the end of the description if it is missing
 * @param source The path to the directory containing the JSON files
 */
export function fixDotFromDescription(source: string): void {
	fs.readdirSync(source).forEach((file) => {
		if (file.endsWith(".json")) {
			const filePath = path.join(source, file);
			const jsonData = fs.readFileSync(filePath, "utf-8");
			const data = JSON.parse(jsonData);
			data.forEach((collection: I_Collection) => {
				if (!collection.description.endsWith(".")) {
					collection.description += ".";
				}
			});
			fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
		}
	});
}
