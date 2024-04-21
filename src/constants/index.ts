// prod
export const distFile = "README.md";

// path
export const dataPath = "src/data";

// notes
export const note1 = "⭐🟊🟊🟊🟊";
export const note2 = "⭐⭐🟊🟊🟊";
export const note3 = "⭐⭐⭐🟊🟊";
export const note4 = "⭐⭐⭐⭐🟊";
export const note5 = "⭐⭐⭐⭐⭐";

// emoji
export const emojiTitle = "📌";
export const emojiCategory = "⚫";
export const emojiLink = "🔗";
export const emojiTools = "🛠️";
export const emojiMessage = "💬";
export const emojiWarning = "⚠️";
export const emojiDone = "✅";
export const emojiFailed = "❌";

// table
export const tableHeader = "| URL | Keywords | Description | Rating |";

// banner
export const title = `# 4dev ${emojiTools}`;
export const badge = `
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)`;
export const contrib = `
${emojiMessage} You can also add/create your own collection in this repository by following the steps below:

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

- A JSON file located in the \`src/data\` directory represents a category. If your collection corresponds to an existing category, you can add it directly to the list of existing collections. Otherwise, you have the option to create a new category by creating a new JSON file and building your own collection.

- The first keyword should always be the most relevant to the collection, and it should also be similar to the category name to facilitate collection organization and search.

**STEP 2: Check/Build**

- To check the validity of your collection, simply run the following command. If there are any errors, they will be displayed; otherwise, the collection will be built into the README.md file:

\`\`\`bash
bun run build
\`\`\`

**STEP 3: Format**

- Before commiting your collection, make sure that are formatted correctly with the following command:

\`\`\`bash
bun run prettier
\`\`\`
`;

// others
export const backToTop = `
<div align="left">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>
`;
