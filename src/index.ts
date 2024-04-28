/* constants */
import {
	dataPath,
	banner,
	tableHeader,
	distFile,
	backToTop,
	emoji,
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

			result.push(banner.title);
			result.push(banner.badge);
			result.push(banner.description);
			result.push("---");
			result.push(`\n### ${emoji.title} Contributing`);
			result.push(banner.contrib);
			result.push("---\n");

			resolve(result.join("\n"));
		} catch (error) {
			reject(
				`[error]: an error occurred while rendering the banner: \n${error}`,
			);
		}
	});
}

function renderTableOfContents(categories: string[]): Promise<string> {
	return new Promise((resolve, reject) => {
		try {
			let tableOfContents = categories
				.map((category) => `[${category}](${getFormatedTag(category)})`)
				.join(" | ");
			let result = "";
			result += `\n### ${emoji.title} Table of contents\n\n`;
			result += "| " + tableOfContents + " |\n";
			result += getTableSeparator(categories.length) + "\n";
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
		const tableColumnNumber = tableHeader.split("|").length - 2;
		let result = "";
		result += `\n### ${emoji.title} Collections\n`;

		for (const category of categories) {
			const collections = await getAllCollectionsByCategory(data, category);
			result += `\n#### ${emoji.category} ${category}\n\n`;
			result += tableHeader + "\n";
			result += getTableSeparator(tableColumnNumber) + "\n";
			collections.forEach((collection) => {
				result += `| [${emoji.link} ${collection.name}](${collection.url}) | \`${collection.keywords.join(" - ")}\` | ${collection.description} | ${getFormatedRef(collection.ref)} | ${getFormatedNote(collection.note)} |\n`;
			});
			result += backToTop;
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
		const data = await combineJSONfilesFromDirectory(dataPath);
		const categories = await getJSONfilesNameFromDirectory(dataPath);
		const isValid = await checker(data);

		if (isValid) {
			await fixDotFromDescription(dataPath);
			await clearFile(distFile);

			const banner = await renderBanner();
			await writeToFile(
				distFile,
				banner,
				`${emoji.done} Banner generated ... [done]`,
			);

			const tableOfContents = await renderTableOfContents(categories);
			await writeToFile(
				distFile,
				tableOfContents,
				`${emoji.done} Table of contents generated ... [done]`,
			);

			const collections = await renderCollections(data, categories);
			await writeToFile(
				distFile,
				collections,
				`${emoji.done} Collections generated ... [done]`,
			);

			console.log(
				"> NOTE: Please execute `bun run prettier` to format all files before commiting",
			);
		}
	} catch (error) {
		console.error(`\n${emoji.failed} An error occurred while generating ...`);
		console.error(error);
	}
}

main();
