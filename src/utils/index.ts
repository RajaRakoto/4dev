/* libs */
import * as fs from "node:fs";
import * as path from "node:path";
import util from "node:util";

/* converts */
import { EMOJI, RATING } from "@/constants";

/* types */
import type { I_Collection } from "@/@types";

// ==========================

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const readDirAsync = util.promisify(fs.readdir);
const fileExistsAsync = util.promisify(fs.exists);

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
	try {
		const fileExists = await fileExistsAsync(destination);
		let finalContent = content;

		if (fileExists) {
			const existingContent = await readFileAsync(destination, "utf8");
			finalContent = existingContent + content;
		}

		await writeFileAsync(destination, finalContent);
		console.log(successMessage);
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while writing the file: \n${error}`,
		);
	}
}

/**
 * @description Clear the content of a file without deleting it
 * @param filePath The path to the file to clear
 */
export async function clearFile(filePath: string): Promise<void> {
	try {
		await writeFileAsync(filePath, "");
		console.log(`${EMOJI.done} ${filePath} has been cleared ... [done]`);
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while clearing the file: \n${error}`,
		);
	}
}

/**
 * @description Combine all JSON files in a directory
 * @param source The path to the directory containing the JSON files
 */
export async function combineJSONfilesFromDirectory(
	source: string,
): Promise<I_Collection[]> {
	try {
		let combinedObjects: I_Collection[] = [];
		const files = await readDirAsync(source);

		for (const file of files) {
			if (path.extname(file) === ".json") {
				const filePath = path.join(source, file);
				const data = fs.readFileSync(filePath, "utf-8");
				const json = JSON.parse(data);
				combinedObjects = combinedObjects.concat(json);
			}
		}
		return combinedObjects;
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while combining the JSON files: \n${error}`,
		);
	}
}

/**
 * @description Get all keywords from the collections
 * @param data Collections data
 */
export function getAllKeywords(data: I_Collection[]): string[] {
	let keywords: string[] = [];
	for (const collection of data) {
		keywords = keywords.concat(collection.keywords);
	}
	return Array.from(new Set(keywords)).sort();
}

/**
 * @description Get the names of all JSON files in a directory
 * @param source The path to the directory containing the JSON files
 */
export async function getJSONfilesNameFromDirectory(
	source: string,
): Promise<string[]> {
	try {
		const files = await readDirAsync(source);
		const jsonFiles = files.filter((file) => path.extname(file) === ".json");
		return jsonFiles.map((file) => path.basename(file, ".json")).sort();
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while getting the JSON files names: \n${error}`,
		);
	}
}

/**
 * @description Transform a note into a star RATING system
 * @param note
 */
export function getFormatedNote(note: number): string {
	switch (note) {
		case -1:
			return RATING.unclassifiable;
		case 0:
			return RATING.unclassified;
		case 1:
			return RATING.star1;
		case 2:
			return RATING.star2;
		case 3:
			return RATING.star3;
		case 4:
			return RATING.star4;
		case 5:
			return RATING.star5;
		default:
			return RATING.unclassified;
	}
}

/**
 * @description Create a table separator
 * @param columns Number of columns
 */
export function getTableSeparator(columns: number): string {
	if (columns <= 0) {
		throw new Error("[error]: columns must be greater than 0");
	}
	return `| ${Array.from({ length: columns }, () => " :-- ").join("|")} |`;
}

/**
 * @description Transform text to markdown tag
 * @param text Input of text to transform
 */
export function getFormatedTag(text: string): string {
	let transformedText = text.replace(/\(|\)/g, "-");
	transformedText = transformedText.replace(/\+|&/g, "--");
	transformedText = transformedText.replace(/ /g, "-");
	transformedText = `#-${transformedText.toLowerCase()}`;
	return transformedText;
}

/**
 * @description Extract all collections by category
 * @param data Collections data
 * @param category Category to extract from the collections
 */
export function getAllCollectionsByCategory(
	data: I_Collection[],
	category: string,
): Promise<I_Collection[]> {
	return new Promise((resolve, reject) => {
		try {
			const filteredCollections = data.filter(
				(collection) => collection.keywords[0] === category,
			);

			filteredCollections.sort((a, b) => {
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

			resolve(filteredCollections);
		} catch (error) {
			reject(
				`[error]: an error occurred while getting all collections by category: \n${error}`,
			);
		}
	});
}

/**
 * @description Format the reference link
 * @param ref Reference link
 */
export function getFormatedRef(ref: string): string {
	if (ref === "") {
		return "N/A";
	}

	if (!ref.includes(" | ")) {
		return `[ref](${ref})`;
	}

	return ref
		.split(" | ")
		.map((url, index) => `[ref${index + 1}](${url})`)
		.join(" - ");
}

/**
 * @description Check the validity of the data before writing it to a file
 * @param data Collections data
 * @param test If true, the function will enter test mode and not display warnings, useful for unit testing
 */
export function checker(data: I_Collection[], test = false): Promise<boolean> {
	return new Promise((resolve, reject) => {
		try {
			const warningLists: string[] = [];

			for (const item of data) {
				const warnings: string[] = [];

				if (
					[item.url, item.description].every(
						(field) => typeof field === "string",
					)
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
				if (typeof item.note !== "number" || item.note < -1 || item.note > 5) {
					warnings.push("Note must be a number between -1 and 5.");
				}
				if (
					![item.name, item.url, item.ref, item.description].every(
						(field) => typeof field === "string",
					)
				) {
					warnings.push(
						"Name, URL, ref, and description fields must be strings.",
					);
				}
				if (!item.keywords.every((keyword) => typeof keyword === "string")) {
					warnings.push("Keywords must be an array of strings.");
				}

				if (warnings.length > 0) {
					warningLists.push(
						`${EMOJI.warning} [${item.name}] -> ${warnings.join(" | ")}`,
					);
				}

				if (!test) {
					for (const warning of warningLists) {
						console.log(warning);
					}
				}
				if (warningLists.length > 0) {
					resolve(false);
				}

				resolve(true);
			}
		} catch (error) {
			reject(`[error]: an error occurred while checking the data: \n${error}`);
		}
	});
}

/**
 * @description Fix the dot at the end of the description if it is missing
 * @param source The path to the directory containing the JSON files
 */
export async function fixDotFromDescription(source: string): Promise<void> {
	try {
		const files = await readDirAsync(source);

		for (const file of files) {
			if (file.endsWith(".json")) {
				const filePath = path.join(source, file);
				const jsonData = await readFileAsync(filePath, "utf-8");
				const data = JSON.parse(jsonData);
				for (const collection of data) {
					if (!collection.description.endsWith(".")) {
						collection.description += ".";
					}
				}
				await writeFileAsync(filePath, JSON.stringify(data, null, 2), "utf-8");
			}
		}
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while fixing the dot from the description: \n${error}`,
		);
	}
}
