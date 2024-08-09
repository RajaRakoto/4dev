// prod
export const DIST_FILE = "README.md";

// path
export const DATA_PATH = "src/data";

// rating
export const RATING = {
	unclassifiable: "Unclassifiable",
	unclassified: "Unclassified",
	star1: "⭐🟊🟊🟊🟊",
	star2: "⭐⭐🟊🟊🟊",
	star3: "⭐⭐⭐🟊🟊",
	star4: "⭐⭐⭐⭐🟊",
	star5: "⭐⭐⭐⭐⭐",
};

// emoji
export const EMOJI = {
	title: "📌",
	category: "⚫",
	link: "🔗",
	tools: "🛠️",
	message: "💬",
	warning: "⚠️",
	done: "✅",
	failed: "❌",
};

// table
export const TABLE_HEADER = "| URL | Keywords | Description | Ref | Rating |";

// banner
export const BANNER = {
	title: `# 4dev ${EMOJI.tools}`,
	badge: `
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)`,
	description: `
**4dev** is a versatile opensource toolkit tailored to meet diverse development demands, with a primary emphasis on web development. Boasting a rich collection of tools and resources, it equips developers with the essentials needed to streamline their workflow and enhance productivity.
`,
	contrib: `
${EMOJI.message} You can also add/create your own collection in this repository by following the steps below ...

> All collections are stored in the \`src/data\` directory. Each collection is a JSON file that contains the following fields:

\`\`\`json
{
    "name": "collection name",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "url": "https://collection.io",
    "ref": "",
    "description": "A description of the collection ...",
    "note": 5
}
\`\`\`

**STEP 1: Add/Create**

=> A JSON file located in the \`src/data\` directory represents a category. If your collection corresponds to an existing category, you can directly append it to the list of existing collections. Otherwise, you have the option to create a new category by generating a new JSON file and constructing your collection within it.

- The \`name\` field must be unique and devoid of special characters. Following convention, the name should be in lowercase, with capitalization employed only when necessary (e.g: ChatGPT).

- The \`first keyword\` should consistently reflect the collection's primary relevance and align closely with the category name to streamline organization and searchability.

- The \`url\` denotes the collection source's URL.

- The optional \`ref\` field is used to indicate the source of the collection. For instance, if the collection is derived from another source, you can include the URL of the original collection. If there are multiple references, they can be separated by a " | " (e.g: "https://ref1.com | https://ref2.com"), and the script will automatically format them into a list.

- The \`description\` field should offer a concise overview of the collection.

- The \`note\` field provides a rating ranging from -1 to 5. Ratings are represented by stars: -1 indicates the collection is unclassifiable, 0 denotes unclassified, and ratings between 1 and 5 reflect varying degrees of classification.

**STEP 2: Check/Build/start**

- To check the validity of your collection, simply run the following command. If there are any errors, they will be displayed; otherwise, the collection will be built into the \`README.md\` file:

\`\`\`bash
bun run build && bun run start
\`\`\`

**STEP 3: Lint/Format**

- Before committing and creating a PR, make sure the code is linted and formatted correctly using the following command:

\`\`\`bash
bun run biome:fix
\`\`\`
`,
};

// others
export const BACK_TO_TOP = `
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>
`;
