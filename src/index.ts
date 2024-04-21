/* constants */
import {
	dataPath,
	title,
	badge,
	contrib,
	tableHeader,
	distFile,
	backToTop,
	emojiCategory,
	emojiLink,
	emojiFailed,
	emojiDone,
	emojiTitle,
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
	getFormatedTag,
	getAllCollectionsByCategory,
	getFormatedNote,
} from "@/utils";

/* types */
import type { I_Collection } from "./@types";

// ==========================

function renderBanner(): string {
	const result: string[] = [];

	result.push(title);
	result.push(badge);
	result.push("\n---");
	result.push(`\n### ${emojiTitle} Contributing`);
	result.push(contrib);
	result.push("---\n");

	return result.join("\n");
}

function renderTableOfContents(categories: string[]) {
	let tableOfContents = categories
		.map((categorie) => `[${categorie}](${getFormatedTag(categorie)})`)
		.join(" | ");
	let result = "";
	result += `\n## ${emojiTitle} Table of contents\n`;
	result += "| " + tableOfContents + " |\n";
	result += getTableSeparator(categories.length) + "\n";
	result += "\n---\n";
	return result;
}

async function renderCollections(data: I_Collection[], categories: string[]) {
	const tableColumnNumber = tableHeader.split("|").length - 2;
	let result = "";
	result += `\n### ${emojiTitle} Collections\n`;

	for (const category of categories) {
		const collections = await getAllCollectionsByCategory(data, category);
		result += `\n#### ${emojiCategory} ${category}\n\n`;
		result += tableHeader + "\n";
		result += getTableSeparator(tableColumnNumber) + "\n";
		collections.forEach((collection) => {
			result += `| [${emojiLink} ${collection.name}](${collection.url}) | \`${collection.keywords.join(" - ")}\` | ${collection.description} | ${getFormatedNote(collection.note)} |\n`;
		});
		result += backToTop;
	}

	return result;
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
				`${emojiDone} Banner generated ... [done]`,
			);

			const tableOfContents = await renderTableOfContents(categories);
			await writeToFile(
				distFile,
				tableOfContents,
				`${emojiDone} Table of contents generated ... [done]`,
			);

			const collections = await renderCollections(data, categories);
			await writeToFile(
				distFile,
				collections,
				`${emojiDone} Collections generated ... [done]`,
			);

			console.log(
				"> NOTE: Please execute `bun run prettier` to format all files before commiting",
			);
		}
	} catch (error) {
		console.error(`\n${emojiFailed} An error occurred while generating ...`);
		console.error(error);
	}
}

main();
