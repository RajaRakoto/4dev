/* constants */
import {
	dataPath,
	title,
	badge,
	message,
	tableHeader,
	emojiCategory,
	emojiLink,
} from "./constants";

/* utils */
import {
	combineJSONfilesFromDirectory,
	getJSONfilesNameFromDirectory,
	getTableSeparator,
	getFormatedTag,
	getAllCollectionsByCategory,
	getFormatedNote,
} from "@/utils";

/* types */
import type { I_Collection } from "./@types";

// ==========================

function renderBanner() {
	console.log(title);
	console.log(badge);
	console.log("\n---\n");
	console.log(message);
	console.log("\n---\n");
}

function renderTableOfContents(categories: string[]) {
	let tableOfContents = categories
		.map((categorie) => `[${categorie}](${getFormatedTag(categorie)})`)
		.join(" | ");
	console.log("## table of contents");
	console.log("| " + tableOfContents + " |");
	console.log(getTableSeparator(categories.length));
	console.log("\n---");
}

function renderCollections(data: I_Collection[], categories: string[]) {
	const tableColumnNumber = tableHeader.split("|").length - 2;

	categories.forEach(async (category) => {
		const collections = await getAllCollectionsByCategory(data, category);
		console.log(`\n### ${emojiCategory} ${category}\n`);
		console.log(tableHeader);
		console.log(getTableSeparator(tableColumnNumber));
		collections.forEach((collection) => {
			console.log(
				`| [${emojiLink} ${collection.name}](${collection.url}) | ${collection.keywords.join(" - ")} | ${collection.description} | ${getFormatedNote(collection.note)} |`,
			);
		});
	});
}

async function main() {
	const data = await combineJSONfilesFromDirectory(dataPath);
	const categories = await getJSONfilesNameFromDirectory(dataPath);

	renderBanner();
	renderTableOfContents(categories);
	renderCollections(data, categories);
}

main();
