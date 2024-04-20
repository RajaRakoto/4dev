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
export async function combineJSONfilesFromDirectory(
	directoryPath: string,
): Promise<I_Collection[]> {
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

export function formatNote(note: number): string {
	switch (note) {
		case -1:
			return "";
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
