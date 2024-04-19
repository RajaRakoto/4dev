/* libs */
import * as fs from "fs";
import * as path from "path";

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
	const data: string = fs.readFileSync(filePath, "utf-8");
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
	const files: string[] = fs.readdirSync(directoryPath);

	files.forEach((file) => {
		if (path.extname(file) === ".json") {
			const data: string = fs.readFileSync(
				path.join(directoryPath, file),
				"utf-8",
			);
			try {
				const json: I_Collection[] = JSON.parse(data);
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
