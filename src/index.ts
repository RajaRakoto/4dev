/* constants */
import {
	DATA_PATH,
	BANNER,
	TABLE_HEADER,
	DIST_FILE,
	BACK_TO_TOP,
	EMOJI,
} from "./constants";

/* utils */
import {
	combineJSONfilesFromDirectory,
	checker,
	fixDotFromDescription,
	writeToFile,
	clearFile,
	getJSONfilesNameFromDirectory,
	getTableSeparator,
	getFormatedRef,
	getFormatedTag,
	getAllCollectionsByCategory,
	getFormatedNote,
} from "@/utils";

/* types */
import type { I_Collection } from "./@types";

// ==========================

function renderBanner(): Promise<string> {
	return new Promise((resolve, reject) => {
		try {
			const result: string[] = [];

			result.push(BANNER.title);
			result.push(BANNER.badge);
			result.push(BANNER.description);
			result.push("---");
			result.push(`\n### ${EMOJI.title} Contributing`);
			result.push(BANNER.contrib);
			result.push("---\n");

			resolve(result.join("\n"));
		} catch (error) {
			reject(
				`[error]: an error occurred while rendering the BANNER: \n${error}`,
			);
		}
	});
}

function renderTableOfContents(categories: string[]): Promise<string> {
	return new Promise((resolve, reject) => {
		try {
			const tableOfContents = categories
				.map((category) => `[${category}](${getFormatedTag(category)})`)
				.join(" | ");
			let result = "";
			result += `\n### ${EMOJI.title} Table of contents\n\n`;
			result += `| ${tableOfContents} |\n`;
			result += `${getTableSeparator(categories.length)}\n`;
			result += "\n---\n";
			resolve(result);
		} catch (error) {
			reject(
				`[error]: an error occurred while rendering the table of contents: \n${error}`,
			);
		}
	});
}

async function renderCollections(
	data: I_Collection[],
	categories: string[],
): Promise<string> {
	try {
		const tableColumnNumber = TABLE_HEADER.split("|").length - 2;
		let result = "";
		result += `\n### ${EMOJI.title} Collections\n`;

		for (const category of categories) {
			const collections = await getAllCollectionsByCategory(data, category);
			result += `\n#### ${EMOJI.category} ${category}\n\n`;
			result += `${TABLE_HEADER}\n`;
			result += `${getTableSeparator(tableColumnNumber)}\n`;
			for (const collection of collections) {
				result += `| [${EMOJI.link} ${collection.name}](${collection.url}) | \`${collection.keywords.join(" - ")}\` | ${collection.description} | ${getFormatedRef(collection.ref)} | ${getFormatedNote(collection.note)} |\n`;
			}
			result += BACK_TO_TOP;
		}

		return result;
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while rendering the collections: \n${error}`,
		);
	}
}

async function main() {
	try {
		const data = await combineJSONfilesFromDirectory(DATA_PATH);
		const categories = await getJSONfilesNameFromDirectory(DATA_PATH);
		const isValid = await checker(data);

		if (isValid) {
			await fixDotFromDescription(DATA_PATH);
			await clearFile(DIST_FILE);

			const BANNER = await renderBanner();
			await writeToFile(
				DIST_FILE,
				BANNER,
				`${EMOJI.done} Banner generated ... [done]`,
			);

			const tableOfContents = await renderTableOfContents(categories);
			await writeToFile(
				DIST_FILE,
				tableOfContents,
				`${EMOJI.done} Table of contents generated ... [done]`,
			);

			const collections = await renderCollections(data, categories);
			await writeToFile(
				DIST_FILE,
				collections,
				`${EMOJI.done} Collections generated ... [done]`,
			);

			console.log(
				"> NOTE: Please execute `bun run biome:fix` to lint/format all files before commiting",
			);
		}
	} catch (error) {
		console.error(`\n${EMOJI.failed} An error occurred while generating ...`);
		console.error(error);
	}
}

main();
