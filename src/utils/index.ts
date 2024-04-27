/* libs */
import * as fs from "fs";
import * as path from "path";
import util from "util";

/* converts */
import { emoji, rating } from "@/constants";

/* types */
import type { I_Collection } from "@/@types";

// ==========================

/**
 * @description Write content to a file
 * @param destination The path to the file to write
 * @param content The content to write to the file
 * @param successMessage The message to display if the file is written successfully
 */
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
		console.error("error: " + error);
	}
}

/**
 * @description Clear the content of a file without deleting it
 * @param filePath The path to the file to clear
 */
export function clearFile(filePath: string): void {
	fs.writeFile(filePath, "", (error) => {
		if (error) {
			console.error("error: an error occurred while clearing the file:", error);
			return;
		}
		console.log(`${emoji.done} ${filePath} has been cleared ... [done]`);
	});
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
				console.error(`error: parsing JSON file -> ${file}:\n${error}`);
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
			return rating.unclassifiable;
		case 0:
			return rating.unclassified;
		case 1:
			return rating.star1;
		case 2:
			return rating.star2;
		case 3:
			return rating.star3;
		case 4:
			return rating.star4;
		case 5:
			return rating.star5;
		default:
			return rating.unclassified;
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
 * @description Format the reference link
 * @param ref Reference link
 */
export function getFormatedRef(ref: string): string {
	if (ref === "") {
		return "N/A";
	} else if (!ref.includes(" | ")) {
		return `[ref](${ref})`;
	} else {
		return ref
			.split(" | ")
			.map((url, index) => `[ref${index + 1}](${url})`)
			.join(" - ");
	}
}

/**
 * @description Check the validity of the data before writing it to a file
 * @param data Collections data
 * @param test If true, the function will enter test mode and not display warnings, useful for unit testing
 */
export function checker(data: I_Collection[], test: boolean = false): boolean {
	const warningLists: string[] = [];

	data.forEach((item) => {
		const warnings: string[] = [];

		if (
			[item.url, item.description].every((field) => typeof field === "string")
		) {
			if (!item.url.trim()) {
				warnings.push("URL must not be empty.");
			}
			if (!item.description.trim()) {
				warnings.push("Description must not be empty.");
			}
		}
		if (item.keywords.length === 0) {
			warnings.push("Keywords must not be empty.");
		}
		if (typeof item.note != "number" || item.note < -1 || item.note > 5) {
			warnings.push("Note must be a number between -1 and 5.");
		}
		if (
			![item.name, item.url, item.ref, item.description].every(
				(field) => typeof field === "string",
			)
		) {
			warnings.push("Name, URL, ref, and description fields must be strings.");
		}
		if (!item.keywords.every((keyword) => typeof keyword === "string")) {
			warnings.push("Keywords must be an array of strings.");
		}

		if (warnings.length > 0) {
			warningLists.push(
				`${emoji.warning} [${item.name}] -> ${warnings.join(" | ")}`,
			);
		}
	});

	if (!test) {
		warningLists.forEach((warning) => console.log(warning));
	}

	if (warningLists.length > 0) {
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
