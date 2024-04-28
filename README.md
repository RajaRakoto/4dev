# 4dev 📌

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**4dev** is a versatile opensource toolkit tailored to meet diverse development demands, with a primary emphasis on web development. Boasting a rich collection of tools and resources, it equips developers with the essentials needed to streamline their workflow and enhance productivity.

---

### 📌 Contributing

💬 You can also add/create your own collection in this repository by following the steps below ...

> All collections are stored in the `src/data` directory. Each collection is a JSON file that contains the following fields:

```json
{
    "name": "collection name",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "url": "https://collection.io",
    "ref": "",
    "description": "A description of the collection ...",
    "note": 5
}
```

**STEP 1: Add/Create**

=> A JSON file located in the `src/data` directory represents a category. If your collection corresponds to an existing category, you can directly append it to the list of existing collections. Otherwise, you have the option to create a new category by generating a new JSON file and constructing your collection within it.

- The `name` field must be unique and devoid of special characters. Following convention, the name should be in lowercase, with capitalization employed only when necessary (e.g: ChatGPT).

- The `first keyword` should consistently reflect the collection's primary relevance and align closely with the category name to streamline organization and searchability.

- The `url` denotes the collection source's URL.

- The optional `ref` field is used to indicate the source of the collection. For instance, if the collection is derived from another source, you can include the URL of the original collection. If there are multiple references, they can be separated by a " | " (e.g: "https://ref1.com | https://ref2.com"), and the script will automatically format them into a list.

- The `description` field should offer a concise overview of the collection.

- The `note` field provides a rating ranging from -1 to 5. Ratings are represented by stars: -1 indicates the collection is unclassifiable, 0 denotes unclassified, and ratings between 1 and 5 reflect varying degrees of classification.

**STEP 2: Check/Build/start**

- To check the validity of your collection, simply run the following command. If there are any errors, they will be displayed; otherwise, the collection will be built into the `README.md` file:

```bash
bun run build && bun run start
```

**STEP 3: Format**

- Before commiting and PR, make sure that are formatted correctly with the following command:

```bash
bun run prettier
```

---

### 📌 Table of contents

| [3d](#-3d) | [accelerator](#-accelerator) | [accordion](#-accordion) | [ai](#-ai) | [animation](#-animation) | [api](#-api) | [audit](#-audit) | [auth](#-auth) | [avatar](#-avatar) | [awesome](#-awesome) | [backend](#-backend) | [background](#-background) | [blog](#-blog) | [boilerplate](#-boilerplate) | [bot](#-bot) | [builder](#-builder) | [certification](#-certification) | [chart](#-chart) | [checker](#-checker) | [chrome](#-chrome) | [cli](#-cli) | [colors](#-colors) | [component](#-component) | [compress](#-compress) | [converter](#-converter) | [database](#-database) | [date](#-date) | [devops](#-devops) | [discord](#-discord) | [docs](#-docs) | [download](#-download) | [editor](#-editor) | [email](#-email) | [emoji](#-emoji) | [fonts](#-fonts) | [formatter](#-formatter) | [freelance](#-freelance) | [frontend](#-frontend) | [generator](#-generator) | [hosting](#-hosting) | [http](#-http) | [icons](#-icons) | [illustration](#-illustration) | [image](#-image) | [javascript](#-javascript) | [job](#-job) | [layout](#-layout) | [lazyloading](#-lazyloading) | [loader](#-loader) | [logo](#-logo) | [modal](#-modal) | [music](#-music) | [nocode](#-nocode) | [pdf](#-pdf) | [plateform](#-plateform) | [playground](#-playground) | [query](#-query) | [react](#-react) | [roadmap](#-roadmap) | [router](#-router) | [scroll](#-scroll) | [searchengine](#-searchengine) | [security](#-security) | [sidebar](#-sidebar) | [slider](#-slider) | [stat](#-stat) | [state-manager](#-state-manager) | [table](#-table) | [tag](#-tag) | [task](#-task) | [template](#-template) | [test](#-test) | [timer](#-timer) | [torrent](#-torrent) | [training](#-training) | [tutorial](#-tutorial) | [validator](#-validator) | [video](#-video) | [vps](#-vps) | [vscode](#-vscode) | [youtube](#-youtube) |
|  :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :--  |

---

### 📌 Collections

#### ⚫ 3d

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 camera-controls](https://yomotsu.github.io/camera-controls/) | `3d - camera - webgl - threejs - javascript` | Camera controls for Three.js. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 draco](https://github.com/google/draco) | `3d - compress - performance - webgl - threejs - google - c++ - javascript` | Draco is a library for compressing and decompressing 3D geometric meshes and point clouds. It aims to improve the storage and transmission of 3D graphics. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 gltf to r3f](https://gltf.pmnd.rs/) | `3d - generator - converter - component - webgl - threejs - r3f - react - javascript` | Convert glTF files into React Three Fiber components. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 gltfjsx cli](https://github.com/pmndrs/gltfjsx) | `3d - cli - generator - converter - component - webgl - threejs - r3f - react - javascript` | Turns GLTFs into JSX components. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 mixamo](https://www.mixamo.com/) | `3d - animation - model - collection - sharing - download` | Mixamo is an online animation service that allows you to customize and animate 3D characters. Mixamo offers ready-to-use animations for 3D characters, saving time and money. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 model-viewer](https://github.com/playcanvas/model-viewer) | `3d - editor - webgl` | 3D model viewer supporting glTF 2.0 and PLY (3D Gaussian Splats). | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 monstermash](https://monstermash.zone/#) | `3d - 2d - ai - generator - drawing - model - download` | Monster Mash is a new sketch-based modeling and animation tool. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 polyheaven](https://polyhaven.com/) | `3d - model - collection - sharing - download` | Poly Haven is a library of high-quality textures and 3D models. All files are released under the CC0 license, which means you can use them in personal or commercial projects without having to give credit. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 r3f-perf](https://github.com/utsuboco/r3f-perf) | `3d - performance - webgl - threejs - r3f - react - javascript` | Easily monitor your ThreeJS performance. | [ref](https://threejs.org/examples/#webgl_animation_keyframes) | ⭐⭐⭐⭐🟊 |
| [🔗 react-three-cannon](https://github.com/pmndrs/use-cannon/blob/master/packages/react-three-cannon/README.md) | `3d - physics - webgl - threejs - r3f - react - javascript` | React hook for cannon-es. Use 3D physics in React Three Fiber. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-three-drei](https://github.com/pmndrs/drei) | `3d - collection - webgl - threejs - r3f - react - javascript` | Collection of utility components for React Three Fiber. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-three-editor](https://github.com/pmndrs/react-three-editor) | `3d - editor - webgl - threejs - r3f - react - javascript` | A 3D editor for React Three Fiber. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-three-fiber](https://github.com/pmndrs/react-three-fiber) | `3d - webgl - threejs - r3f - react - javascript` | React Three Fiber is a 3D rendering library for React. It allows you to create interactive 3D applications using React and Three.js. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-three-rapier](https://github.com/pmndrs/react-three-rapier) | `3d - physics - webgl - threejs - r3f - react - javascript` | React Three Rapier is a 3D physics library for React Three Fiber. It allows you to simulate rigid bodies, soft bodies, joints, constraints, and collisions in a 3D environment. | [ref](https://codesandbox.io/s/rapier-character-controller-0b5o7u?file=/src/Player.jsx) | ⭐⭐⭐⭐🟊 |
| [🔗 shap-e](https://github.com/openai/shap-e#usage) | `3d - generator - ai - model - openai - download` | Generate 3D objects conditioned on text or images. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 sketchfab](https://sketchfab.com/) | `3d - model - collection - sharing - download` | Sketchfab opens a new era of creativity by enabling anyone to easily publish and find 3D content online. With a community of millions of creators. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 theatre.js](https://github.com/theatre-js/theatre) | `3d - motion - webgl - threejs - javascript` | Motion design editor for the web. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 three.js](https://threejs.org/) | `3d - webgl - threejs - javascript` | Three.js is a JavaScript library for creating real-time 3D animations in a web browser. It is based on WebGL and enables the creation of interactive 3D scenes. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 three.js editor](https://threejs.org/editor/) | `3d - editor - webgl - threejs - javascript` | An online 3D editor for Three.js. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 triplex](https://github.com/try-triplex/triplex) | `3d - webgl - threejs - r3f - react - javascript` | The 3D editor for React Three Fiber. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 turboSquid](https://www.turbosquid.com/) | `3d - model - collection - sharing - download` | TurboSquid is an online marketplace for 3D models, textures, and 3D files. TurboSquid offers high-quality 3D models for games, movies, advertising, and architectural visualization. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ accelerator

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 gpu.js](https://github.com/gpujs/gpu.js) | `accelerator - gpu - enhance - performance - javascript` | GPU Accelerated JavaScript. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ accordion

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-accessible-accordion](https://github.com/springload/react-accessible-accordion) | `accordion - react - frontend - javascript` | A simple accordion component for React using ARIA attributes. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-bootstrap-accordion](https://github.com/awran5/react-bootstrap-accordion) | `accordion - react - frontend - bootstrap - javascript` | A simple accordion component for React using Bootstrap styles. | N/A | ⭐⭐⭐🟊🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ ai

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 chatGPT](https://chat.openai.com/chat) | `ai - gpt - generative - model` | Chat with an AI model trained by OpenAI. It can generate human-like text based on the input you provide. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 claude](https://claude.ai/chat) | `ai - generative - model - upload` | Claude is a conversational AI that can generate human-like text based on the input you provide. You can also upload your own files to generate text based on them. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 doctransgpt](https://doctransgpt.com/) | `ai - gpt - translator - pdf` | Translate PDFs with AI. DoctransGPT is a tool that can translate PDFs using AI technology. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 leonardo ai](https://leonardo.ai/) | `ai - illustrator - imagine - generative - image - model` | Transform your projects with our AI image generator. Generate high-quality, AI generated images with unparalleled speed and style to elevate your creative ... | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 logo ai](https://www.logoai.com/) | `ai - logo - design - illustrator - generative` | Let AI-powered logo maker generate your new logo and create a brand identity design you love. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 midjourney](https://midjourney.com/) | `ai - illustrator - imagine - generative - image - model` | An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 midjourney-free](https://t.me/freemidjourney) | `ai - illustrator - imagine - generative - image - model - free - telegram` | Midjourney Free is a Telegram bot that generates AI images for free. You can use it to generate high-quality, AI-generated images with unparalleled speed and style. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 mistral ai](https://mistral.ai/fr/) | `ai - training - learning - finetune - model - opensource` | A generative AI, open and portable, for developers and businesses. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 perplexity](https://perplexity.ai/) | `ai - search - generative - model - upload` | Search for AI models and chat with them. You can also upload your own files to generate text based on them. Perplexity AI unlocks the power of knowledge with information discovery and sharing. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 phind](https://www.phind.com/) | `ai - gpt - search - dev - generative - model` | Phind is an intelligent answer engine for developers. Focused on helping you solve challenging problems, it uses generative AI to give you the answer you're looking for. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 project IDX](https://projectidx.com/) | `ai - editor - ide - code - cloud - fullstack` | Project IDX is a fully web-based workspace for full-stack application development, powered by the latest generative AI (optimized by Codey and PaLM 2). | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 prompt collection](https://www.prompt-collection.com/) | `ai - gpt - prompt - collection` | Welcome to the “Awesome ChatGPT Prompts” repository! This is a collection of prompt examples to be used with the ChatGPT model. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 speech to text - google](https://cloud.google.com/speech-to-text) | `ai - speech - text - google` | Convert speech to text with Google's Speech-to-Text API. You can use this API to transcribe audio into text. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 speechtexter](https://www.speechtexter.com/) | `ai - speech - text - transcribe` | SpeechTexter is a free online speech recognition software that converts your speech to text. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 summarize ai](https://www.summarize.tech/) | `ai - summarize - article - video - youtube - generative` | Summarize AI is a tool that can summarize YouTube videos to text. It uses AI to generate a summary of the video's content. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 text to speech - google](https://cloud.google.com/text-to-speech?hl=fr) | `ai - text - speech - google` | Convert text to speech with Google's Text-to-Speech API. You can use this API to generate human-like speech from text. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 upscale-image](https://www.iloveimg.com/upscale-image) | `ai - image - upscaler - enhance` | Upscale your images with AI. Enhance the quality of your images using AI technology. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 yuka](https://mugen87.github.io/yuka/) | `ai - 3d - engine - pathfinding - javascript` | Yuka is an artificial intelligence engine for 3D games. It's designed to handle non-player characters (NPCs) in complex 3D environments. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ animation

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 animate.css](https://animate.style/) | `animation - css` | Just-add-water CSS animations. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 animista.css](http://animista.net/) | `animation - css` | On-demand CSS animations. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 barba.js](https://barba.js.org/docs/getstarted/intro/) | `animation - transition - javascript` | Barba.js is a small (7kb minified and compressed) and easy-to-use library that helps you create smooth transitions between pages of your website. It enables your website to function like a Single Page Application (SPA) and helps reduce the delay between your pages, minimize browser HTTP requests, and improve your user's web experience. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 granim.js](https://sarcadass.github.io/granim.js/examples.html) | `animation - gradient - javascript` | Create smooth and interactive gradient animations with this small JavaScript library. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 hover.css](https://ianlunn.github.io/Hover/) | `animation - hover - collection - effect - css` | A collection of CSS3 hover effects. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 kute.js](https://thednp.github.io/kute.js/) | `animation - javascript` | KUTE.js is a JavaScript animation engine (component collection) for modern browsers. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 lax.js](https://github.com/alexfoxy/laxxx) | `animation - scroll - javascript` | Simple, lightweight vanilla JavaScript plugin for creating smooth, beautiful animations when scrolling. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 lightbox2.js](https://lokeshdhakar.com/projects/lightbox2/) | `animation - image - javascript` | A small JS library for overlaying images on top of the current page. | N/A | ⭐⭐🟊🟊🟊 |
| [🔗 lottie-react](https://github.com/LottieFiles/lottie-react) | `animation - json - lottie - image - react - javascript` | React component for Lottie animations. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 lottiefiles](https://lottiefiles.com/) | `animation - json - lottie - image - javascript` | JSON animation library for web and mobile applications. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 magic.css](https://www.minimamente.com/project/magic/) | `animation - css` | A CSS animation library with magical effects. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 progressbar.js](https://mattboldt.com/demos/typed-js/) | `animation - progress - javascript` | Responsive and fluid progress bars with animated SVG paths. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 rellax.js](https://dixonandmoe.com/rellax/) | `animation - parallax - javascript` | Ultra-lightweight vanilla JavaScript parallax library. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 sample typing svg](https://readme-typing-svg.herokuapp.com/demo/) | `animation - typing - svg` | Customizable SVG dynamically generated that gives the impression of typing and deleting text. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 simpleparallax.js](https://simpleparallax.com/) | `animation - parallax - javascript` | The easiest way to achieve a parallax effect with JavaScript. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 stroll.js](https://lab.hakim.se/scroll-effects/) | `animation - scroll - list - javascript` | CSS3 list scroll effects. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 tilt.js](https://github.com/gijsroge/tilt.js/) | `animation - hover - jquery - javascript` | A lightweight, 60+ fps requestAnimationFrame parallax hover tilt effect for jQuery. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 tingle.js](https://tingle.robinparisi.com/) | `animation - modal - javascript` | A minimalist and easy-to-use modal plugin written in Vanilla JS. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 transitions & transforms](https://thoughtbot.com/blog/transitions-and-transforms) | `animation - transition - transform - css` | CSS Transitions and transformations for beginners. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 typed.js](https://mattboldt.com/demos/typed-js/) | `animation - typing - javascript` | A JavaScript typing animation library. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 typingSVG](https://readme-typing-svg.herokuapp.com/demo/) | `animation - image - svg - typing` | Customizable SVG dynamically generated that gives the impression of typing and deleting text. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 vivus.js](https://maxwellito.github.io/vivus/) | `animation - image - svg - javascript` | Vivus is a lightweight (no dependencies) JavaScript class that allows you to animate SVGs, giving them the appearance of being drawn. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 wow.js](https://github.com/graingert/wow/) | `animation - scroll - javascript` | Reveal CSS animations when scrolling a page. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ api

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 google-translate-api](https://github.com/matheuss/google-translate-api) | `api - google - translate` | A free and unlimited API for Google Translate. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 json-server](https://github.com/typicode/json-server) | `api - rest - server - faker - test` | Get a complete fake REST API without coding in less than 30 seconds. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 mvola](https://www.mvola.mg/devportal/services/configs) | `api - mvola - mobilemoney - mg` | API to integrate MVOLA into your applications. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 public-apis](https://github.com/public-apis/public-apis) | `api` | A list of public APIs. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 rapidAPI](https://rapidapi.com/hub) | `api` | Discover and connect to thousands of APIs. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 steam-api](http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json) | `api - steam - rest` | API to retrieve the list of steam games. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ audit

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 deepscan](https://deepscan.io/) | `audit - scanner - debug` | DeepScan is an advanced static analysis tool for JavaScript. You can inspect all of your JavaScript code thoroughly. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 GTmetrix](https://gtmetrix.com/) | `audit - test - performance` | Optimizing website speed and performance. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pagespeed insights](https://pagespeed.web.dev) | `audit - test - performance - debug - google` | PageSpeed Insights analyzes the content of a web page, then generates suggestions to speed up the loading of that page. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-addons-perf](https://legacy.reactjs.org/docs/perf.html) | `audit - test - performance - debug - react - javascript` | React Perf is a profiling tool for React applications. It is installed as an npm package and can be used to profile React applications written with classes or functions. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ auth

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 oauth2 - google](https://support.google.com/cloud/answer/6158849?hl=en&authuser=1&ref_topic=3473162) | `auth - oauth2 - google` | Google Cloud Platform OAuth 2.0. | N/A | ⭐⭐🟊🟊🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ avatar

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bigheads](https://github.com/RobertBroersma/bigheads/) | `avatar - profil - generator` | Easily generate avatars for your projects with Big Heads by Robert Broersma. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 getavataaars](https://getavataaars.com/) | `avatar - profil - generator` | Fun and colorful free avatar web generation tool by Fang-Pen Lin using Pablo Stanley's sketch library. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 personas](https://personas.draftbit.com/) | `avatar - profil - generator` | A playful avatar generator for the modern age. | N/A | ⭐⭐⭐🟊🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ awesome

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 awesome](https://github.com/sindresorhus/awesome) | `awesome - collection - list` | Awesome lists about all kinds of interesting topics. | N/A | Unclassified |
| [🔗 awesome-angular](https://github.com/PatrickJS/awesome-angular) | `awesome - collection - angular - framework - javascript` | A curated list of awesome for Angular. | N/A | Unclassified |
| [🔗 awesome-boilerplate](https://github.com/melvin0008/awesome-projects-boilerplates) | `awesome - collection - boilerplate - starter - template - project` | A curated list of awesome boilerplates. | N/A | Unclassified |
| [🔗 awesome-bootstrap](https://github.com/therebelrobot/awesome-bootstrap) | `awesome - collection - bootstrap - css` | A curated list of awesome for Bootstrap. | N/A | Unclassified |
| [🔗 awesome-cheatsheets](https://github.com/LeCoupa/awesome-cheatsheets) | `awesome - collection - cheatsheet - reference` | A curated list of awesome cheatsheets. | N/A | Unclassified |
| [🔗 awesome-css](https://github.com/awesome-css-group/awesome-css) | `awesome - collection - css` | A curated list of awesome for CSS. | N/A | Unclassified |
| [🔗 awesome-figma](https://github.com/react-figma/awesome-figma) | `awesome - collection - figma - design - ui - ux - illustrator` | A curated list of awesome for Figma. | N/A | Unclassified |
| [🔗 awesome-flutter](https://github.com/Solido/awesome-flutter) | `awesome - collection - flutter - framework - dart` | A curated list of awesome for Flutter. | N/A | Unclassified |
| [🔗 awesome-html](https://github.com/diegocard/awesome-html5) | `awesome - collection - html` | A curated list of awesome for HTML. | N/A | Unclassified |
| [🔗 awesome-linux](https://github.com/luong-komorebi/Awesome-Linux-Software) | `awesome - collection - linux - unix - os - software` | A curated list of awesome for Linux. | N/A | Unclassified |
| [🔗 awesome-lottie](https://github.com/LottieFiles/awesome-lottie) | `awesome - collection - json - lottie - image - javascript` | A curated list of awesome for Lottie. | N/A | Unclassified |
| [🔗 awesome-pocketbase](https://github.com/benallfree/awesome-pocketbase/) | `awesome - collection - backend - framework - baas - performance - standalone - database - go - javascript` | A curated list of awesome for Pocketbase. | N/A | Unclassified |
| [🔗 awesome-react](https://github.com/enaqx/awesome-react) | `awesome - collection - react - library - javascript` | A curated list of awesome for React. | N/A | Unclassified |
| [🔗 awesome-sass](https://github.com/Famolus/awesome-sass) | `awesome - collection - sass` | A curated list of awesome for Sass. | N/A | Unclassified |
| [🔗 awesome-svelte](https://github.com/TheComputerM/awesome-svelte) | `awesome - collection - svelte - framework - javascript` | A curated list of awesome for Svelte. | N/A | Unclassified |
| [🔗 awesome-tailwind](https://github.com/aniftyco/awesome-tailwindcss) | `awesome - collection - tailwind - css` | A curated list of awesome for Tailwind CSS. | N/A | Unclassified |
| [🔗 awesome-threejs](https://github.com/AxiomeCG/awesome-threejs) | `awesome - collection - 3d - webgl - threejs - javascript` | A curated list of awesome for Three.js. | N/A | Unclassified |
| [🔗 awesome-vite](https://github.com/vitejs/awesome-vite) | `awesome - collection - builder - bundle - javascript` | A curated list of awesome for Vite.js. | N/A | Unclassified |
| [🔗 awesome-vue](https://github.com/vuejs/awesome-vue) | `awesome - collection - vue - framework - javascript` | A curated list of awesome for Vue. | N/A | Unclassified |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ backend

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bun.js](https://bun.sh/) | `backend - runtime - javascript` | Bun is a JavaScript runtime, package manager, test runner, and bundler built from scratch using the Zig programming language. It was designed by Jarred Sumner to replace Node.js. Bun is fast, secure, and easy to use. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 deno](https://deno.land/) | `backend - runtime - javascript` | Deno is a server-side JavaScript runtime environment created by Ryan Dahl, the creator of Node.js. Deno is built on the best ideas of Node.js but fixes its mistakes and improves its features. Deno is secure by default, requires no third-party package manager, and comes with a built-in set of features. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 express](https://expressjs.com/) | `backend - framework - javascript` | Express.js is a minimalist and flexible framework for Node.js, allowing for fast and efficient creation of web applications and APIs by providing simple routing, request, and response handlers, as well as extensible middleware modules, giving developers complete control over server configuration and behavior, while promoting a lightweight and unobtrusive approach to server-side development. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 firebase](https://firebase.google.com/) | `backend - baas - database - google - javascript` | Firebase, Inc. is a set of cloud computing backend services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 laravel](https://laravel.com/) | `backend - framework - php` | Laravel is an elegant and expressive PHP framework, known for its simplicity and power, offering clean and intuitive syntax as well as a plethora of out-of-the-box features such as the Eloquent ORM, database migrations management, smooth routing, session management, and advanced security, making it a popular choice for rapid development of modern and scalable web applications. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 low latency runtime (llrt)](https://github.com/awslabs/llrt) | `backend - runtime - javascript` | LLRT (Low Latency Runtime) is an experimental lightweight JavaScript runtime designed to meet the growing demand for fast and efficient serverless applications. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 nest.js](https://nestjs.com/) | `backend - framework - angular - javascript` | Nest.js is a progressive and extensible Node.js framework, inspired by Angular, that allows for building efficient and modular backend applications using TypeScript, offering a module-based architecture, robust dependency injection, and seamless integration with third-party libraries, thus promoting clean and maintainable code writing for developers. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 node.js](https://nodejs.org/) | `backend - runtime - javascript` | Node.js is a server-side JavaScript runtime environment, based on Chrome's V8 JavaScript engine. It uses an asynchronous, event-driven I/O model, making it lightweight and efficient. Node.js is used for building web applications and server-side APIs in JavaScript. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pocketbase](https://pocketbase.io/) | `backend - framework - baas - performance - standalone - database - go - javascript` | PocketBase is an open-source tool aimed at streamlining the development process by providing essential backend features in a single executable file. Its user-friendly approach allows developers to implement a robust backend functionality with minimal setup. Use it as a standalone application OR as a framework, which you can extend via Go and JavaScript hooks to create your own portable custom backend. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 supabase](https://supabase.com/) | `backend - baas - database - opensource - javascript` | Supabase is an open-source alternative to Firebase, offering a real-time PostgreSQL database and RESTful API, along with user management, authentication, file storage, and database triggers features, all hosted on your own infrastructure, making it an ideal solution for modern web applications requiring a performant and scalable database. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 symfony](https://symfony.com/) | `backend - framework - php` | Symfony is a robust and highly modular PHP framework, promoting rapid development and maintainability of complex web applications through its flexible component-based architecture, advanced dependency management via Composer, extensive features such as session management, authentication, and data validation, as well as an active community and bundle ecosystem allowing for easy extension of its core functionalities. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ background

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 clippy](https://bennettfeely.com/clippy/) | `background - polygon - geometric - css` | Edit an image as a polygon in CSS. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 cssgradient](https://cssgradient.io/) | `background - gradient - fluent - css - generator` | An elegant gradient color generator for backgrounds. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 getwaves](https://getwaves.io/) | `background - wave - svg - generator` | A free SVG wave generator to create unique SVG waves for web design. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 hero patterns](http://www.heropatterns.com) | `background - geometric - svg` | A collection of reproducible SVG background patterns. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 nice-waves.js](https://github.com/gVguy/nice-waves#nice-waves) | `background - animation - generator - javascript` | Beautiful animated waves. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 particles.js](https://particles.js.org/) | `background - animation - generator - javascript` | A lightweight library to create particles. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pocoloco](https://pocoloco.io/) | `background - generator` | Generate dynamic backgrounds for your website. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-particles](https://www.npmjs.com/package/react-tsparticles) | `background - animation - generator - react - javascript` | A particle library for React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 vanta.js](https://www.vantajs.com/) | `background - animation - generator - javascript` | Animated website backgrounds in just a few lines of code. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ blog

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 itsfoss](https://itsfoss.com/) | `blog - gnu - linux - opensource` | This doesn't really have anything to do with web dev but could serve you, with It's FOSS, you'll learn the latest news from the open-source world. You'll also learn how to effectively use Linux through top-notch tutorials and experts ... | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 korben](https://korben.info/) | `blog - techno - fr` | Le meilleur site tech du monde visible et invisible, #logiciel #crypto #cybersecurite #linux #astuces ... | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ boilerplate

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate) | `boilerplate - bun - runtime - template - starter - javascript` | Minimalistic boilerplate to quick-start Bun.js development in TypeScript. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate) | `boilerplate - cli - template - starter - javascript` | Minimalistic boilerplate to quick-start CLI development with Inquirer.js in TypeScript. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 next-boilerplate](https://github.com/RajaRakoto/next-boilerplate) | `boilerplate - next - frontend - template - starter - javascript` | Minimalistic boilerplate to quick-start Next.js development in TypeScript, optimized for blazing-fast performance with Bun & Turbopack. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 node-boilerplate](https://github.com/RajaRakoto/node-boilerplate) | `boilerplate - node - runtime - template - starter - javascript` | Minimalistic boilerplate to quick-start Node.js development in TypeScript. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-boilerplate](https://github.com/RajaRakoto/react-boilerplate) | `boilerplate - react - frontend - template - starter - javascript` | Minimalistic boilerplate to quick-start React.js development in TypeScript, optimized for blazing-fast performance with Bun & Vite. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate) | `boilerplate - vscode - extension - template - starter - javascript` | Minimalistic boilerplate to quick-start VSCode Extension development. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ bot

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 ampalibe](https://ampalibe.readthedocs.io/en/latest/usage.html) | `bot - messenger - facebook - chatbot - python - framework` | Ampalibe is a Python framework for building Facebook Messenger chatbots. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 bottender](https://bottender.js.org/) | `bot - messenger - whatsapp - line - slack - telegram - viber - chatbot - node - javascript - framework` | Bottender is a framework for building conversational user interfaces. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-messenger-customer-chat](https://www.npmjs.com/package/react-messenger-customer-chat) | `bot - component - messenger - facebook - chatbot - react - javascript` | A Messenger customer chat plugin for React. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ builder

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 create-react-app](https://create-react-app.dev/) | `builder - bundle - react - javascript` | Create React App is a ready-to-use React application creation tool, designed to simplify the process of setting up and starting a new project by providing a basic structure, startup and build scripts, as well as seamless integration with popular tools such as Babel, ESLint, and Prettier, allowing developers to focus on creating features without worrying about the technical aspects of configuration. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 esbuild](https://esbuild.github.io/) | `builder - bundle - javascript` | esbuild is a fast and efficient build tool for modern web applications, designed to provide ultra-fast compilation times and native support for ES6 modules, while offering seamless integration with build tools and plugins, enabling the creation of optimized bundles for deployment in production. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 evite.js](https://evitejs.dev/) | `builder - bundle - electron - javascript` | Next-generation Electron build tools based on Vite.js. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 turbopack](https://turbopack.dev/) | `builder - bundle - javascript - rust` | Webpack's successor powered by Rust. Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 vite.js](https://vitejs.dev/) | `builder - bundle - javascript` | Vite is a fast development tool for modern web applications, designed to provide a smooth and efficient development experience using on-demand compilation and integrated development server, thereby reducing compilation and reload times, while offering native support for ES6 modules, plugins, and build tools, making it easy to create high-performance and scalable web applications. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 webpack](https://webpack.js.org/) | `builder - bundle - javascript` | Webpack is a module bundling and compilation tool designed to simplify the development process by bundling and optimizing the application's source files, while offering advanced dependency management, loaders, and plugins, enabling the creation of optimized bundles for deployment in production. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ certification

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 codeingame](https://www.codingame.com/home) | `certification - skill - evaluation - training` | CodinGame is a website dedicated to playful computer programming, offering on one side puzzles of increasing difficulty to solve in one of the twenty-five programming languages !. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 codesignal](https://codesignal.com/) | `certification - skill - evaluation - training` | CodeSignal is a technical interview and assessment platform operated by the American company BrainFights. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 freecodecamp](https://www.freecodecamp.org/learn/) | `certification - skill - training` | FreeCodeCamp is a non-profit organization consisting of an interactive web learning platform, an online community forum, chat rooms, online publications, and local organizations that aim to teach web development accessible to all. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 hackerRank](https://www.hackerrank.com/) | `certification - skill - evaluation - training` | HackerRank is the market-leading remote technical assessment and interview solution for developer hiring. Learn to hire technical talent from anywhere !. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 openclassrooms](https://openclassrooms.com/fr/) | `certification - skill - training - fr` | OpenClassrooms est un site de formation en ligne, créé en 1999 sous le nom de Site du Zéro. Il propose à ses membres des cours certifiants et des parcours menant à des carrières en pleine croissance (idéal pour les débutants). | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 skillvalue](https://www.frontendmentor.io/) | `certification - skill - quiz - training` | Challenge yourself with technical quizzes, choose from +1000 technical tests and get noticed. Showcase your skills now and get a certification !. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 w3schools](https://www.w3schools.com/) | `certification - skill - training` | W3Schools is a website for online learning of web technologies. Its content includes tutorials and references related to HTML, CSS, JavaScript, JSON, PHP, AngularJS, SQL, Bootstrap, Node.js, jQuery, XQuery, AJAX, and XML. It receives over 10 million unique visitors per month. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ chart

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 chart.js](https://www.chartjs.org/docs/latest/) | `chart - javascript` | Simple but flexible JavaScript charts for designers and developers. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 chartist.js](http://gionkunz.github.io/chartist-js/getting-started.html/) | `chart - javascript` | Simple responsive charts. | N/A | ⭐⭐⭐🟊🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ checker

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 eslint](https://eslint.org/) | `checker - linter - javascript` | ESLint is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code, with the aim of making the code more consistent and bug-free. In many ways, it is similar to JSLint and JSHint with a few exceptions. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 typescript](https://www.typescriptlang.org/) | `checker - types - javascript` | Superset of the JavaScript language aimed at improving and securing JavaScript code production. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ chrome

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 angular devtools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) | `chrome - extension - angular - debug` | Angular DevTools allows you to understand your application's structure and preview the state of directive and component instances. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 bootstrap grid generator](https://chrome.google.com/webstore/detail/bootstrap-grid-generator/hnhmbddaldgbmknmobkokdjmgchclohp?hl=fr) | `chrome - extension - bootstrap - grid - generator` | Bootstrap grid generator. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 click&clean](https://chromewebstore.google.com/detail/clickclean/ghgabhipcejejjmhhchfonmamedcbeod?hl=fr) | `chrome - extension - privacy - clean` | Click&Clean is a free Chrome extension that helps you protect your privacy by erasing your browsing traces. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 cssviewer](https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce) | `chrome - extension - css - debug` | A simple CSS property viewer. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 dark reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) | `chrome - extension - dark - theme` | Dark Reader creates a dark theme for every website. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 dimentions](https://chromewebstore.google.com/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj) | `chrome - extension - measure - pixel` | Dimensions is a measurement tool that lets you know the dimensions of any element on your screen. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 eye dropper](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) | `chrome - extension - color - picker` | Eye Dropper is a Chrome extension that allows you to pick a color from any web page and copy it to your clipboard. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fake filler](https://chrome.google.com/webstore/detail/fake-filler/bnjjngeaknajbdcgpfkgnonkmififhfo) | `chrome - extension - form - generator` | Fake Filler is a form filler that fills all inputs on a page with fake data. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 franceverif - sécurité en ligne](https://chromewebstore.google.com/detail/franceverif-s%C3%A9curit%C3%A9-en-l/mhkejggchhilmabpicojddgaahkkgoln?hl=fr) | `chrome - extension - security - privacy` | FranceVerif is an extension that allows you to check the security of the websites you visit. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 gofullpage](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl) | `chrome - extension - screenshot` | Capture full-page screenshots in one click. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 html validator](https://chromewebstore.google.com/detail/html-validator/mpbelhhnfhfjnaehkcnnaknldmnocglk) | `chrome - extension - html - audit` | HTML Validator. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 imageye](https://chrome.google.com/webstore/detail/image-downloader-imageye/agionbommeaifngbhincahgmoflcikhm) | `chrome - extension - image - download` | Search and download all images from a web page. With Imageye, you can find, browse, and download all images present on a web page. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 instant data scraper](https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah) | `chrome - extension - data - scrap` | Instant Data Scraper is a tool to extract data from web pages and save it as spreadsheets. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) | `chrome - extension - performance - audit` | An open-source, automated tool for improving the performance, quality, and correctness of your web apps. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 pesticide](https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi) | `chrome - extension - layout - debug` | Injects CSS Pesticide into the current page, outlining each HTML element to better see placement on the page, useful for creating layouts. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 react developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) | `chrome - extension - react - debug` | React debugging tools to Chrome's development tools. It allows you to inspect React component hierarchies in Chrome's development tools. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 read aloud: a text to speech voice reader](https://chrome.google.com/webstore/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp) | `chrome - extension - read - text` | Read aloud the text you select. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 readergpt: chatgpt based web page summariser](https://chrome.google.com/webstore/detail/readergpt-chatgpt-based-we/ldjgkphjgjgkogkgnjgjgjgjgjgjgjgj) | `chrome - extension - gpt - summarize` | Summarize any web page with GPT-3 in one click. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 redux devtools - next](https://chromewebstore.google.com/detail/redux-devtools-next/oamphgegmigmlgkdnijmeomjenbmkbdg) | `chrome - extension - redux - debug` | Facilitates debugging of your applications using Redux. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 responsive viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) | `chrome - extension - responsive - design - debug` | View multiple screens at once, responsive design tester. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 site palette](https://chrome.google.com/webstore/detail/site-palette/pekhihjiehdafocefoimckjpbkegknoh) | `chrome - extension - color - design` | A must-have tool for frontend designers and developers to grab colors from any website. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 ublock origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) | `chrome - extension - adblock - privacy` | uBlock Origin is a free and open-source browser extension that focuses on customizing your browsing experience. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) | `chrome - extension - vue - debug` | Understand your application's structure and preview the state of Vue directive and component instances. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg/related) | `chrome - extension - scanner - analyse` | Wappalyzer is a technological profiler that shows you what websites are built with. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 web developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) | `chrome - extension - tools - web - debug` | Adds a toolbar button with various web development tools. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 whatruns](https://chrome.google.com/webstore/detail/whatruns/cmkdbmfndkfgebldhnkbfhlneefdaaip?hl=en) | `chrome - extension - scanner - analyse` | Find out what runs a website. Frameworks, analytics tools, WordPress plugins, fonts - you name it. | N/A | ⭐⭐⭐🟊🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ cli

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 chalk](https://www.npmjs.com/package/chalk) | `cli - color - text - node - javascript` | Add colors to your text in the console. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 figlet](https://www.npmjs.com/package/figlet) | `cli - ascii - art - text - javascript` | Create ASCII art from text strings. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 inquirer.js](https://www.npmjs.com/package/inquirer) | `cli - prompt - collection - javascript` | A collection of prompts for command-line interfaces. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 ora](https://www.npmjs.com/package/ora) | `cli - spinner - loader - node - javascript` | An elegant spinner for command-line interfaces. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 plz-cli](https://github.com/m1guelpf/plz-cli) | `cli - linux - terminal - zsh - shell - ai - generative - sysadmin - openai - gpt - devops` | Copilot for your terminal. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 warp](https://www.warp.dev/) | `cli - linux - terminal - zsh - shell - ai - generative - sysadmin - devops - rust` | Warp is the terminal reimagined with AI and collaborative tools for better productivity. Built with Rust for speed, intuitive out of the box. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 zsh-codex](https://github.com/tom-doerr/zsh_codex) | `cli - linux - terminal - zsh - shell - ai - generative - sysadmin - openai - gpt - devops` | This is a ZSH plugin that allows you to use the OpenAI Codex AI in the command line. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ colors

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 colorBrewer](https://colorbrewer2.org/#) | `colors - map - generator` | The original color palette generator, also supporting colorblindness. Arguably the best scientifically. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 colorCurves](https://colorcurves.app) | `colors - curve - generator` | Color palette generator that uses curves to generate color schemes. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 colorHunt](https://colorhunt.co/palettes/popular) | `colors - idea` | An open-source platform for color scheme inspiration with thousands of curated trendy color palettes. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 coolors](https://coolors.co) | `colors - palette - generator` | Color palette generator with advanced customization features. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 duo](https://duo.alexpate.uk) | `colors - combination - idea` | Duo is a collection of color combinations I've curated from personal projects or found across the web. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 UI gradients](https://uigradients.com) | `colors - gradient - generator` | User interface gradients color generator. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ component

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 angular material](https://material.angular.io/guide/getting-started/) | `component - frontend - angular - material-design - css` | Angular component framework based on Material Design. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 angular powered bootstrap](https://bootstrap-vue.org/docs) | `component - frontend - bootstrap - angular - css` | Use Bootstrap components with Angular. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 bootstrap](https://getbootstrap.com/) | `component - frontend - bootstrap - css` | Bootstrap is a collection of useful tools for creating web design. It's a set that contains HTML and CSS code, forms, buttons, navigation tools, and other interactive elements, as well as optional JavaScript extensions. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 bootstrapVue](https://bootstrap-vue.org/docs) | `component - frontend - bootstrap - vue - css` | Use Bootstrap components with Vue. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 bulma](https://bulma.io/) | `component - frontend - css` | A modern CSS framework with no JS. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 chakra-UI](https://chakra-ui.com/guides/first-steps) | `component - frontend - react - css` | Quickly build accessible React applications and websites. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 creative-tim](https://www.creative-tim.com/) | `component - frontend - bootstrap - angular - react - vue - css` | UI kits, templates, and dashboards built on Bootstrap, Vue.js, React, Angular, Node.js, and Laravel. Join over 1,838,844 creatives!. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 daisyUI](https://daisyui.com/) | `component - frontend - tailwind - css` | Tailwind CSS Components. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 fast](https://www.fast.design/) | `component - frontend - angular - react - vue - css` | FAST is a set of web component-based technologies (Angular, Vue, React) and modern web standards developed by Microsoft, designed to help you efficiently address some of the most common challenges in web design and development. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 flowbite](https://flowbite.com) | `component - frontend - tailwind - css` | Open-source library of Tailwind CSS components. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 hamburgers](https://jonsuh.com/hamburgers/) | `component - frontend - navbar - css` | Hamburgers is a collection of tasty hamburger icons animated by CSS. The source is also included as a Sass library. It's scalable and customizable, so make your own burger. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 materialize](https://materializecss.com/) | `component - frontend - css` | A modern responsive front-end framework based on Material Design. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 MDB](https://mdbootstrap.com/) | `component - frontend - bootstrap - angular - react - vue - css` | Open-source toolkit for material design with bootstrap (Angular, Vue, React). | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 MUI](https://mui.com/material-ui/getting-started/) | `component - frontend - react - material-design - css` | MUI provides a simple, customizable, and accessible library of React components. Follow your own design system or start with Material Design. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 picocss](https://picocss.com/) | `component - frontend - html - css` | Pico.css is a minimalist and lightweight CSS library, designed to simplify web application styling by offering a collection of pre-defined classes for common HTML elements, allowing developers to quickly and easily customize their site's appearance without having to write custom CSS. With its small size and ease of use, Pico.css is ideal for projects requiring a minimalist and efficient design approach. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction) | `component - frontend - bootstrap - react - css` | Bootstrap rebuilt for React. Include Bootstrap components directly in your React project. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 RNUI](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup) | `component - frontend - react-native - mobile` | React Native UI (RNUI) is a library of UI tools and components for React Native from Wix. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 semantic UI](https://semantic-ui.com/introduction/getting-started.html) | `component - frontend - css` | Semantic is a UI component framework based on useful principles from natural language. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 semantic UI react](https://react.semantic-ui.com) | `component - frontend - react - css` | Collection of semantic UI React components. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 tailblocks](https://mertjf.github.io/tailblocks/) | `component - frontend - tailwind - css` | Simple Tailwind CSS Components. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 tailwind css](https://tailwindcss.com/) | `component - frontend - tailwind - css` | A fully customizable CSS framework, based on the principle of utility classes. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 vuetify](https://vuetifyjs.com/en/getting-started/installation/) | `component - frontend - vue - material-design - css` | Vue component framework based on Material Design. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ compress

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 iloveimg](https://www.iloveimg.com/fr/redimensionner-image) | `compress - resize` | Resize multiple images at once!. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 resize-image](https://www.iloveimg.com/resize-image) | `compress - resize` | Resize JPG, PNG, SVG, or GIF by setting new height and width pixels. Bulk edit image dimensions. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 tinyPNG](https://tinypng.com/) | `compress - image` | Intelligent PNG and JPEG compression. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ converter

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 ASCIIart](https://manytools.org/hacker-tools/convert-images-to-ascii-art/) | `converter - ascii - art` | Convert Images to Ascii Art. | N/A | ⭐⭐🟊🟊🟊 |
| [🔗 fontmeme](https://fontmeme.com/fr/polices-de-signature/) | `converter - font - signature` | Convert text to signature font. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 fsymbols](https://fsymbols.com/generators/) | `converter - font - generator` | Font generator. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 kodeshot](https://www.kodeshot.net/) | `converter - code - image` | Convert your source code into beautiful images for your articles, tweets, messages, posts... | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 vertopal](https://www.vertopal.com/) | `converter` | Free online platform to convert computer files to a variety of file formats. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ database

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 db4free](https://www.db4free.net/) | `database - sql - mysql - free - test` | db4free.net provides a testing service for the latest - sometimes even development - version of the MySQL database server. You can easily create a new database for free and start testing. We currently support MySQL 8.0 and MariaDB 10.4. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 faker.js](https://www.npmjs.com/package/@faker-js/faker) | `database - faker - test - javascript` | Faker.js is a library that generates fake data for you. It is useful for seeding databases, creating fake API responses, and more. It is available for JavaScript and Node.js. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 js-cookie](https://www.npmjs.com/package/js-cookie) | `database - cookie - javascript` | A simple, lightweight JavaScript API for handling browser cookies. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 localForage](https://localforage.github.io/localForage/) | `database - sql - indexeddb - offline - javascript` | Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 mongoose](https://mongoosejs.com/) | `database - mongodb - node - javascript` | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 planetScale](https://planetscale.com/) | `database - sql - mysql - cloud` | PlanetScale is a database-as-a-service platform that helps developers build and scale applications without worrying about database management. It is built on top of Vitess, a database clustering system for horizontal scaling of MySQL. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 sequelize](https://sequelize.org/) | `database - sql - orm - node - javascript` | Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite, and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication, and more. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ date

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 moment](http://momentjs.com/) | `date - timer - parse - formatter - calendar - javascript` | Parse, validate, manipulate, and display dates in JavaScript. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 moment-timezone](https://www.npmjs.com/package/moment-timezone) | `date - timer - timezone - parse - formatter - calendar - javascript` | Parse and display dates in any timezone. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ devops

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 aws](https://aws.amazon.com/) | `devops - amazon - cloud` | Amazon Web Services (AWS) is a cloud services platform offered by Amazon. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 azure devops](https://dev.azure.com/) | `devops - microsoft - cloud` | Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 dockerhub](https://hub.docker.com/) | `devops - docker - registry` | Docker Hub is the world's easiest way to create, manage, and deliver your teams' container applications. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fluent ci](https://fluentci.io/) | `devops - ci - cd - automation - workflow - pipeline - rust - deno - javascript` | Unleash the power of CI/CD with Dagger and Deno (TypeScript): choose from pre-built pipelines or craft your own, and watch your code soar!. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 play-with-docker](https://labs.play-with-docker.com/) | `devops - docker - playground` | Play with Docker is a project that allows you to test Docker commands in a matter of seconds. It gives you the experience of having a free Alpine Linux Virtual Machine in the cloud where you can build and run Docker containers and even create clusters. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ discord

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bun](https://discord.gg/bun-876711213126520882) | `discord - community - runtime - bun - javascript` | A community of passionate JavaScript developers on the new Bun runtime. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 devcord](https://discord.com/invite/devcord) | `discord - community - dev` | DevCord is a community of developers focusing on knowledge sharing and helping each other. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 discord.me](https://discord.me/servers) | `discord - search - community` | Discord Me is a platform that connects people with public servers and bots. We are here to help you find the perfect server!. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fluent CI - community](https://discord.gg/u8tmTBNQPW) | `discord - community - fluent - ci - cd - devops` | Fluent CI is a Discord server for developers who want to discuss CI/CD and devops. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 grafikart](https://discord.com/invite/rAuuD7Q) | `discord - community - fr` | La communauté Discord de Grafikart est l'une des plus actives. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 nodeiflux](https://discord.com/invite/aD42zPx) | `discord - community - runtime - node - javascript` | A friendly community of active and aspiring developers. This is a professional environment to learn, share knowledge, and grow personally and professionally. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 qwik](https://discord.com/invite/eDrWHeqnnQ) | `discord - community - qwik - javascript` | A community of JavaScript developers focusing on the new Qwik framework. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 reactiflux](https://discord.gg/jGKhXV26d8) | `discord - community - react - javascript` | A dedicated community for ReactJS developers. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 speakJS](https://discord.com/invite/FePZ6VR4) | `discord - community - javascript` | A community of over 16,000 JavaScript developers. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ docs

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 30secondsofcode](https://www.30secondsofcode.org/) | `docs - collection - training - tutorial - tutorial - algorithm - pattern - snippet` | A collection of design patterns, tips, and useful snippets to solve problems. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 33-concepts-js](https://github.com/robinmetral/33-concepts-js) | `docs - training - tutorial - tutorial - collection - algorithm - pattern - javascript` | 33 concepts every JavaScript developer should know. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 bad-habits-react](https://dev.to/srmagura/bad-habits-of-mid-level-react-developers-b41) | `docs - training - tutorial - react - javascript` | Bad habits of mid-level React developers. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 best-practices](https://github.com/cnumr/best-practices) | `docs - training - tutorial - tutorial - pattern - frontend - backend - fullstack - reference` | 115 good practices of Web eco-design. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 bootstrap-cheatsheet](https://bootstrap-cheatsheet.themeselection.com/index.html) | `docs - training - tutorial - bootstrap - cheatsheet` | An interactive list of Bootstrap 5 classes, variables, and mixins. The only Bootstrap 5 cheatsheet you'll need. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 component-party](https://component-party.dev/) | `docs - training - tutorial - collection - component - react - vue - angular - svelte - javascript` | Presentation of JS Web component frameworks by their syntax and features. | [ref](https://github.com/matschik/component-party.dev) | ⭐⭐⭐⭐⭐ |
| [🔗 css-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | `docs - training - tutorial - css - flexbox` | A comprehensive guide to learning Flexbox. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 devdocs](https://devdocs.io/) | `docs - training - tutorial - collection` | DevDocs combines several API documentations into a fast, organized, and searchable interface. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 devhint](https://devhints.io/) | `docs - training - tutorial - cheatsheet - collection` | A collection of cheatsheets. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 frontend-checklist](https://frontendchecklist.io/) | `docs - frontend - test - audit - pattern - performance - seo - security - html - css - javascript` | The Front-End Checklist is an exhaustive list of elements you need to check before launching your website into production. | [ref](https://github.com/thedaviddias/Front-End-Checklist) | ⭐⭐⭐⭐⭐ |
| [🔗 fullstack-nodejs](https://morioh.com/a/7e75bc6e5041/nodejs-developer-roadmap-master-nodejs-by-following-this-roadmap) | `docs - training - tutorial - fullstack - node - javascript` | A comprehensive guide to becoming a Fullstack Node.js developer. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/README.fr-FR.md) | `docs - training - tutorial - algorithm - pattern - javascript` | Implementations of algorithms and data structures in JavaScript. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 javascript-questions](https://github.com/lydiahallie/javascript-questions/blob/master/fr-FR/README_fr-FR.md) | `docs - training - tutorial - javascript - qcm` | A list of JavaScript questions to test your knowledge. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 js-127-patterns](https://morioh.com/a/a76bc7d72226/127-useful-javascript-snippets-you-can-understand-in-30-seconds) | `docs - training - tutorial - collection - pattern - javascript` | 127 useful JavaScript patterns. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 jsDelivr](https://www.jsdelivr.com/) | `docs - search - cdn - package` | jsDelivr is a powerful search engine for developers, offering links to quickly access the official site, documentation, GitHub, or even directly download a package. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 MDN Web Docs](https://developer.mozilla.org/fr/) | `docs - training - tutorial - reference - frontend - backend - fullstack - html - css - javascript` | The reference for everything related to web development. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 node-best-practices](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.french.md) | `docs - training - tutorial - pattern - node - javascript` | The best practices for Node.js. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-bits](https://vasanthk.gitbooks.io/react-bits/content/) | `docs - training - tutorial - pattern - react - javascript` | A compilation of React patterns, techniques, tips, and tricks. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge) | `docs - awesome - training - tutorial - collection - reference` | A collection of inspiring lists, manuals, cheatsheets, blogs, hacks, one-liners, cli/web tools, and more. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 typescript-node-series](https://github.com/muneer-ahmed-khan/typescript-node-series) | `docs - tutorial - training - tutorial - node - javascript` | A series of tutorials to learn how to use TypeScript with Node.js. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 waytolearnx](https://waytolearnx.com/) | `docs - training - tutorial - collection - reference - qcm` | Learn the technical skills you need for the job you want. As a leader in online education and e-learning, we help you acquire the skills you need to succeed. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 web-applications](https://www.robinwieruch.de/web-applications/) | `docs - training - tutorial - frontend - backend - fullstack` | Knowing all the basic concepts of a web application. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 wtfjs](https://github.com/denysdovhan/wtfjs/blob/master/README-fr-fr.md) | `docs - training - tutorial - javascript` | Explanations about the quirks of JavaScript. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ download

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 apkpure](https://apkpure.com/) | `download - apk - android` | A website that allows you to download APKs. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 commentcamarche](https://www.commentcamarche.net/download/) | `download - software - windows - mac - linux - android - ios - fr` | Site de téléchargement de logiciels pour Windows, Mac, Linux, Android et iOS. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 evozi](https://apps.evozi.com/apk-downloader/) | `download - apk - android` | A website that allows you to download APKs directly from the Play Store. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 facebook downloader](https://fdown.net/index.php) | `download - facebook - video` | A website that allows you to download videos from Facebook. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 filehippo](https://filehippo.com/) | `download - software - windows` | A website that allows you to download software for Windows. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 getintopc](https://getintopc.com/) | `download - software - windows` | A website that allows you to download software for Windows. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 modyolo](https://modyolo.com) | `download - apk - android - mod` | A website that allows you to download modified APKs. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 playlist downloader](https://playlist.downloader.is/) | `download - youtube - playlist - video - audio - mp4 - mp3` | A website that allows you to download YouTube playlists. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 uptodown](https://uptodown.com) | `download - apk - android` | A website that allows you to download APKs. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 x2download](https://x2download.com/fr29) | `download - youtube - video - audio - mp4 - mp3` | A website that allows you to download videos and audios from YouTube. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 y2mate](https://www.y2mate.com/en19) | `download - youtube - video - audio - mp4 - mp3` | A website that allows you to download videos and audios from YouTube. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ editor

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 beFunky](https://www.befunky.com/create/photo-to-cartoon) | `editor - cartoon` | Cartoon yourself. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 blobmaker](https://www.blobmaker.app/) | `editor - svg - generator` | Blobmaker is a free generative design tool that helps you quickly create random, unique, organic-looking SVG shapes. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 boxy SVG](https://boxy-svg.com/app) | `editor - illustrator - svg - image` | An online SVG editor. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 canva](https://www.canva.com/) | `editor - design - illustrator - logo - image - video` | Canva is a free online graphic design tool. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 excalidraw](https://excalidraw.com/) | `editor - drawing - organization - presentation - management - team - generator` | Excalidraw is a collaborative virtual whiteboard tool that allows you to easily draw diagrams that look like hand-drawn sketches. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fancy-border](https://9elements.github.io/fancy-border-radius/full-control.html/) | `editor - border - generator` | Eight values specifying border-radius in CSS ( border-radius generator ). | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 figma](https://www.figma.com/) | `editor - design - ui - ux - illustrator - logo - image` | Figma is a web-based user interface design tool. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 jsBin](https://jsbin.com/?js,console) | `editor - javascript` | Online JavaScript code editor. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 lucidchart](https://lucid.app/documents#/documents?folder_id=recent) | `editor - diagram - chart - organization - presentation - management - team - generator` | Lucidchart is a visual and collaborative workspace for creating diagrams. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 mapInSeconds](http://mapinseconds.com/#) | `editor - stat - map` | An easy way to visualize your data with a map. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 myposter](https://www.myposter.fr/collage-photo) | `editor - collage` | Photo collage. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 photopea](https://shadows.brumm.af/) | `editor - photoshop` | An online Photoshop editor. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 quill-delta-to-html](https://github.com/nozer/quill-delta-to-html#readme) | `editor - converter - text - wysiwyg - quill - html - javascript` | Convert Quill delta to HTML. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 quill.js](https://quilljs.com/) | `editor - text - wysiwyg - quill - javascript` | Your powerful rich text editor. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg#readme) - [docs](https://jpuri.github.io/react-draft-wysiwyg/#/docs) | `editor - text - react - wysiwyg - quill - javascript` | A rich text WYSIWYG editor for React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-quill](https://www.npmjs.com/package/react-quill) | `editor - text - wysiwyg - quill - react - javascript` | A Quill component for React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 readme.so](https://readme.so/fr/editor) | `editor - markdown - documentation` | The easiest way to create a README file in markdown. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 remove background](https://www.remove.bg/) | `editor - remover - background - image - png` | Remove image background in 5 seconds. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 remove.bg](https://www.remove.bg/fr/) | `editor - background` | Quickly remove image backgrounds. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 vectr](https://vectr.com/design/) | `editor - illustrator` | Free vector graphics software. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 zety](https://zety.fr/) | `editor - cv - resume - job - illustrator - fr` | Creer un CV professionnel en ligne. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ email

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 brevo](https://www.brevo.com/) | `email - mail - smtp - client - manager` | Grow your business with Brevo, the all-in-one platform to manage your client relationships via email, SMS, chat, and more. | [ref](https://mailtrap.io/blog/react-contact-form/) | ⭐⭐⭐⭐🟊 |
| [🔗 email-js-react](https://www.emailjs.com/docs/examples/reactjs/) | `email - mail - smtp - react - javascript` | EmailJS is a service that allows you to send emails directly from the client. | [ref1](https://blog.devgenius.io/set-up-emailjs-in-react-app-from-scratch-42e669efc22a) - [ref2](https://dev.to/ethand91/using-emailjs-to-send-emails-from-the-frontend-ka9) | ⭐⭐⭐⭐⭐ |
| [🔗 nodemailer](https://www.npmjs.com/package/nodemailer) | `email - mail - smtp - javascript` | Nodemailer is a node.js module that allows you to send emails. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ emoji

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 node-emoji](https://www.npmjs.com/package/node-emoji) | `emoji - collection - node - javascript` | A collection of emojis for a Node.js project. | [ref](https://emojipedia.org/) | ⭐⭐⭐⭐🟊 |
| [🔗 unicode](https://apps.timwhitlock.info/emoji/tables/unicode) | `emoji - unicode - collection - node - javascript` | A collection of emojis and unicode symbols. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ fonts

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 dafont](https://www.dafont.com) | `fonts - typography` | Archive of downloadable fonts for free. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 fontawesome](https://fontawesome.com/start) | `fonts - typography - icons - svg - css - sass - less` | Font Awesome is a font and icon toolkit based on CSS, LESS, and SASS. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fontgeneratorguru](https://www.fontgeneratorguru.com/) | `fonts - typography - generator` | Cool font generator!. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 google fonts](https://fonts.google.com) | `fonts - typography - google` | Library of around 1000 font families under free license. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ formatter

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 jsonformatter](https://jsonformatter.curiousconcept.com/) | `formatter - validator - json - javascript` | JSON Validator. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 minify](https://www.minifier.org/) | `formatter - minify - css - javascript` | Make your website smaller and faster to load by minifying JS and CSS code. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 prettier](https://prettier.io/) | `formatter - beautify` | Prettier is a code formatter that supports various programming languages and can be integrated with many code editors. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 smalldev.io](https://smalldev.tools/) | `formatter - minify - beautify - html - css - javascript` | Free web developer tool to help with Beautify & Minify HTML/CSS/JavaScript, and many other handy tools. With a delightful interface. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ freelance

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 10x management](https://www.10xmanagement.com/) | `freelance - remote - job - professional - work - dev` | 10x Management finds the world's best freelance coders, programmers, and other technology talent so you can hire them at a moment's notice. | N/A | Unclassifiable |
| [🔗 5euros](https://5euros.com/) | `freelance - remote - job - professional - work - fr` | Achetez et vendez des microservices à partir de 5 €. | N/A | Unclassifiable |
| [🔗 99designs](https://99designs.fr/) | `freelance - remote - job - professional - work - design - fr` | La plateforme créative internationale qui permet aux designers et aux clients de travailler ensemble pour créer des designs qu'ils adorent. | N/A | Unclassifiable |
| [🔗 behance](https://www.behance.net/) | `freelance - remote - job - professional - work - design` | Behance is the world's largest creative network for showcasing and discovering creative work. | N/A | Unclassifiable |
| [🔗 clearvoice](https://www.clearvoice.com/) | `freelance - remote - job - professional - work - seo` | We take the hassle out of content production. Whether you need access to vetted creators or a fully managed content team, ClearVoice has the solution for you!. | N/A | Unclassifiable |
| [🔗 codeable](https://codeable.io/) | `freelance - remote - job - professional - work - dev - wordpress` | Codeable is the only WordPress freelancer platform. We match customers to the best WordPress experts. We help customers solve any WordPress problem. | N/A | Unclassifiable |
| [🔗 coroflot](https://www.coroflot.com/) | `freelance - remote - job - professional - work - design` | Coroflot is where designers are found and hired: companies post opportunities and search for creative candidates, designers apply to jobs and post portfolios of their work. | N/A | Unclassifiable |
| [🔗 crowdspring](https://www.crowdspring.com/) | `freelance - remote - job - professional - work - dev - design` | The world's most trusted marketplace for graphic design, including logo design, web design, product design and your company name. | N/A | Unclassifiable |
| [🔗 designcrowd](https://www.designcrowd.fr/) | `freelance - remote - job - professional - work - design - fr` | Un monde de design. Des graphistes professionnels indépendants du monde entier prêts à réaliser votre logo, le site internet, la carte de visite & bien plus !. | N/A | Unclassifiable |
| [🔗 designhill](https://www.designhill.com/) | `freelance - remote - job - professional - work - design` | World's #1 Creative Marketplace that allows businesses & individuals alike to source high-quality designs & buy products created by 150K+ global designers/artists. | N/A | Unclassifiable |
| [🔗 fiveer](https://www.fiverr.com/) | `freelance - remote - job - professional - work` | Find the perfect freelance services for your business. | N/A | Unclassifiable |
| [🔗 flexjobs](https://www.flexjobs.com/) | `freelance - remote - job - professional - work` | The #1 job site to find remote jobs - no ads, scams, or junk. Find your next flexible, hybrid, or work from home job. | N/A | Unclassifiable |
| [🔗 freelance-info](https://www.freelance-info.fr/) | `freelance - remote - job - professional - work - fr` | Plus de 10 000 offres de mission en freelance et d'emploi disponibles partout en France sur Free-Work. | N/A | Unclassifiable |
| [🔗 freelancer](https://www.freelancer.com/) | `freelance - remote - job - professional - work` | Hire the best freelancers for any job, online. | N/A | Unclassifiable |
| [🔗 gigster](https://gigster.com/) | `freelance - remote - job - professional - work - dev` | Gigster is the fastest and easiest way to build custom software solutions. New technology expertise delivered on demand. Visit us now. | N/A | Unclassifiable |
| [🔗 gun.io](https://gun.io/) | `freelance - remote - job - professional - work - dev - design` | Hire the top 2% of freelance developers and designers. | N/A | Unclassifiable |
| [🔗 guru](https://www.guru.com/) | `freelance - remote - job - professional - work` | Work with the best freelance talent from around the world on our secure, flexible and cost-effective platform. | N/A | Unclassifiable |
| [🔗 hire freelancers](https://www.freelancer.com/) | `freelance - remote - job - professional - work` | Hire the best freelancers for any job, online. | N/A | Unclassifiable |
| [🔗 indeed](https://www.indeed.fr/) | `freelance - remote - job - professional - work - fr` | Trouvez des offres d'emploi sur Indeed, le moteur de recherche d'emploi le plus complet. En une seule recherche, Indeed vous donne accès à des millions d'offres de milliers de sites carrières et de job boards. | N/A | Unclassifiable |
| [🔗 problogger](https://problogger.com) | `freelance - remote - job - professional - work - seo` | Since 2004, ProBlogger has been the home for bloggers wanting to create and grow their blogs, and then go professional to make money blogging. | N/A | Unclassifiable |
| [🔗 SEOclerks](https://www.seoclerk.com/) | `freelance - remote - job - professional - work - seo` | The largest SEO Marketplace on the planet. | N/A | Unclassifiable |
| [🔗 toptal](https://www.toptal.com/) | `freelance - remote - job - professional - work` | Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their most important projects. | N/A | Unclassifiable |
| [🔗 upwork](https://www.upwork.com/) | `freelance - remote - job - professional - work` | Find & hire top freelancers, web developers & designers inexpensively. World's largest marketplace of 40m. Getting started is free. Receive quotes in seconds. Pay for quality. Save Time & Money. 24/7 Support. 60 Second Quotes. 30M+ Trusted Users. | N/A | Unclassifiable |
| [🔗 working not working](https://workingnotworking.com/) | `freelance - remote - job - professional - work - design` | Hire the best creative talent. We give people (who hire) what they want. We love recruiters. The feeling is mutual. | N/A | Unclassifiable |
| [🔗 yeeply](https://www.yeeply.com/fr/) | `freelance - remote - job - professional - work - dev - fr` | Nous aidons les entreprises à trouver les meilleurs talents techniques à distance pour les projets digitaux. Projets de développement de logiciel, applications mobiles, sites web, Enterprise Performance Management (EPM), Intelligence Artificielle (IA), Blockchain, Robotic Process Automation (RPA) et toutes sortes de solutions numériques. | N/A | Unclassifiable |
| [🔗 youteam](https://youteam.io/) | `freelance - remote - job - professional - work - dev` | Two weeks to recalibrate your team: with YouTeam, effortlessly ramp up or streamline, accessing the unique network of 50,000+ top talents from Europe and Latin America. | N/A | Unclassifiable |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ frontend

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 angular](https://angular.io/) | `frontend - framework - ui - javascript` | Angular is an open-source web development framework, based on TypeScript, designed by Google. It enables creating dynamic and scalable web applications using reusable components and component-based architecture, thus providing high performance and maintainability through its two-way data binding system and efficient application state management. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 next.js](https://nextjs.org/) | `frontend - framework - ui - javascript` | Next.js is an open-source JavaScript framework based on React, developed to simplify the creation of scalable and performant web applications by offering server-side rendering, automatic routing, support for Server-Side Rendering (SSR) and Static Site Generation (SSG), as well as intuitive data management and seamless integration with technologies like TypeScript, CSS-in-JS, and GraphQL, allowing developers to design modern applications with increased efficiency and better user experience. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 nuxt.js](https://nuxtjs.org/) | `frontend - framework - ui - javascript` | Nuxt.js is a JavaScript framework based on Vue.js, designed to simplify the development of universal web applications by providing a predefined structure, server-side rendering, automatic routing, seamless SSR (Server-Side Rendering) and SSG (Static Site Generation) handling, as well as easy integration of modern technologies such as Vuex and Vue Router, enabling developers to focus on building features without worrying about complex technical aspects of configuration. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 qwik](https://qwik.dev/) | `frontend - framework - ui - javascript` | Qwik is a new kind of framework that can be picked up (no early JS execution and no hydration), designed for the edge and familiar to React developers. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react.js](https://react.dev/) | `frontend - library - ui - javascript` | React is a powerful and flexible JavaScript library, designed to simplify the creation of interactive and dynamic user interfaces. With a focus on component composability and reusability, React enables developers to build scalable web applications with clear separation of concerns. Its declarative approach, based on creating reactive components, makes managing application state easy and offers optimized performance through its virtual DOM. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 solid.js](https://www.solidjs.com/) | `frontend - library - ui - javascript` | Solid is a performant and reactive JavaScript library, designed for creating dynamic and scalable user interfaces using a declarative approach based on reactive components. By focusing on reactivity and performance, Solid offers a lightweight and efficient alternative to traditional frameworks, while providing a smooth and intuitive development experience. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 svelte.js](https://svelte.dev/) | `frontend - framework - ui - javascript` | Svelte is an innovative JavaScript framework distinguished by its compile-to-build approach, allowing for generating optimized and performant code from declarative components, without requiring a runtime library at runtime. With its simple and expressive syntax, Svelte offers an efficient approach to creating reactive and scalable web applications, while minimizing bundle size and enhancing performance. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 vue.js](https://vuejs.org/) | `frontend - framework - ui - javascript` | Vue.js is a progressive, open-source JavaScript framework designed for building interactive and dynamic user interfaces with its simple and flexible structure, offering a reactive approach based on reusable components and efficient application state management, while seamlessly integrating with other libraries or existing projects. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ generator

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 anima](https://www.animaapp.com/) | `generator - figma - design - tailwind - ui - ux - html - css - react - vue - javascript` | Create responsive prototypes, export HTML and CSS, React or Vue, or publish live websites from your design. Use Anima for Figma for free. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 ASCII art generator 1](http://patorjk.com/software/taag/#p=display&h=2&f=Ogre&t=transfer-cli) | `generator - ascii - art` | ASCII art text generator to turn your messages into text art pictures. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 ASCII art generator 2](https://manytools.org/hacker-tools/convert-images-to-ascii-art) | `generator - ascii - art` | ASCII art text generator to turn your messages into text art pictures. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 border-radius](https://9elements.github.io/fancy-border-radius/full-control.html) | `generator - border - radius - css` | A CSS border generator for rounded corners. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 brumm shadow maker](https://shadows.brumm.af/) | `generator - effect - shadow` | Create a soft shadow. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fffuel](https://fffuel.co/) | `generator - illustrator - image - background - svg - texture - gradient` | fffuel is a collection of free color tools and SVG generators for gradients, patterns, textures, shapes, and backgrounds. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 flutterflow](https://flutterflow.io/) | `generator - flutter - component - ui - ux - dart` | Flutter component generator. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fontsign](https://fontmeme.com/fr/polices-de-signature/) | `generator - font - typography - signature` | Signature generator from fonts. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 function12](https://fn12.com/) | `generator - figma - design - tailwind - ui - ux - html - css - react - vue - javascript` | Get the code, simply copy and paste that automatically converts Figma designs into frontend code. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 meme generator](https://imgflip.com/memegenerator) | `generator - meme` | Create memes online. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 nanoid](https://www.npmjs.com/package/nanoid) | `generator - id - identifier - unique - javascript` | Unique identifier generator. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 pc builder](https://pcpartpicker.com/list/) | `generator - pc - build - idea` | Build your own PC based on your needs and budget. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 persona maker](https://www.hubspot.fr/make-my-persona) | `generator - persona - user` | Persona generator. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pocketbase-uml](https://dev.to/icflorescu/pocketbaseuml-2ci5) | `generator - uml - backend - framework - baas - performance - standalone - database - go - javascript` | PocketBaseUML is a free and open-source UML diagram generator for PocketBase. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 privacy policy generator](https://app.termsfeed.com/wizard/privacy-policy) | `generator - privacy - policy` | Privacy policy generator. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 regex-generator](https://regex-generator.olafneumann.org/) | `generator - regex - regular - expression` | Regex generator. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 sassdoc](https://github.com/SassDoc/sassdoc) | `generator - documentation - sass` | Documentation generator for a project using Sass. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 shields.io](https://shields.io/) | `generator - badge` | Create badges with your own customization. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 snippet-generator](https://snippet-generator.app/) | `generator - snippet - vscode - sublimetext - atom` | A snippet generator for VScode, sublimetext and atom. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 uuid](https://www.npmjs.com/package/uuid) | `generator - id - identifier - unique - javascript` |  Universal Unique Identifier (UUID) generator. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 wix](https://fr.wix.com/) | `generator` | Wix is a SaaS online platform that allows you to create HTML5 websites and their mobile version. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 yo](https://yeoman.io/) | `generator - extension - vscode - javascript` | Yeoman generator will guide you through the necessary steps to create your customization or extension by asking you for the required information. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ hosting

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 cloudflare](https://www.cloudflare.com/) | `hosting - sercurity - dns` | Cloudflare is an American company providing content delivery network services, DDoS mitigation, internet security, and distributed domain name server services. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 heroku](https://www.heroku.com/) | `hosting - backend` | Heroku is a company that creates server software enabling deployment of web applications. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 netlify](https://www.netlify.com/) | `hosting - frontend` | Netlify is both a hosting tool and a platform for building websites and web applications. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 ngrok](https://dashboard.ngrok.com/) | `hosting - tunneling - proxy` | ngrok is a globally distributed reverse proxy facing your web services running in any cloud or private network, or on your machine. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 o2switch](https://www.o2switch.fr/) | `hosting - frontend - backend` | o2switch is a French web host. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pythonanywhere](https://www.pythonanywhere.com/) | `hosting - backend - python - django` | PythonAnywhere is a web hosting service that allows users to run web applications written in the Python programming language on remote servers. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 render](https://render.com/) | `hosting - frontend - backend` | Render is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, private networks, and automatic deployments from Git. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 vercel](https://vercel.com/) | `hosting - frontend` | Vercel is a cloud deployment platform that enables developers to deploy front-end applications and serverless functions with zero configuration. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ http

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 axios](https://axios-http.com/docs/intro) | `http - promise - node - javascript` | Promise based HTTP client for the browser and node.js. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ icons

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 devicons](https://devicon.dev/) | `icons - collection - dev - svg` | Icon collection for developers. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 fontawesome](https://fontawesome.com/start) | `icons - fonts - typography - collection - svg - css - sass - less` | Font Awesome is a font and icon toolset based on CSS, LESS, and SASS. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 lordIcons](https://lordicon.com/icons) | `icons - collection - svg - lottie` | Animated icon collection (svg - lottie). | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 mui-icons](https://mui.com/material-ui/material-icons/) | `icons - collection - mui - material - svg` | Icon collection for Material UI. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-icons](https://github.com/react-icons/react-icons) | `icons - collection - react - svg - javascript` | Icon collection for React. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 uxwing](https://uxwing.com) | `icons - collection - svg` | Well-optimized vector icon collection. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 xicons](https://www.xicons.org/#) | `icons - collection - quick - vue - react` | Ultra-comprehensive SVG Vue/React components integrated from fluentui-system-icons, ionicons, etc... | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ illustration

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 404 illustration](https://error404.fun) | `illustration - 404` | Collection of illustrations about 404 errors on a web page. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 humaaans](https://www.humaaans.com) | `illustration - characters` | Beautiful illustrations of people able to mix and match. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 isoFlat](https://isoflat.com) | `illustration - collection - svg` | A free collection of isometric SVG graphic resources. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 manyPixels](https://www.manypixels.co/) | `illustration - collection - svg - png` | Collection of vector images. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 unDraw](https://undraw.co/illustrations) | `illustration - characters` | Open-source character illustrations for all the ideas you can imagine and create (customizable color). | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ image

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bloggif](https://www.bloggif.com/text) | `image - gif - converter - generator` | Convert text to GIF image. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 giphy](https://giphy.com/stickers/) | `image - gif - collection` | Collection of GIF images. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 magdeleine](https://colorcurves.app) | `image - theme` | Gallery and free high-resolution photo every day. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 onlineOCR](https://www.onlineocr.net/fr/) | `image - ocr - converter - generator` | Convert image to text. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pexels](https://www.pexels.com) | `image - video` | The largest library of free videos, provided by the community. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pixabay](https://pixabay.com) | `image - video` | Over 1.7 million high-quality images and videos. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ javascript

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 browserify](http://browserify.org/) | `javascript` | Browserify is a tool that allows you to write Node.js-style modules that compile for use in the browser. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 debug](https://www.npmjs.com/package/debug) | `javascript` | A tiny JavaScript debugging utility modeled after Node.js core's debugging technique. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 dotenv](https://www.npmjs.com/package/dotenv) | `javascript` | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 execa](https://www.npmjs.com/package/execa) | `javascript - cli - process` | Run commands in a child process. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 file-saver](https://www.npmjs.com/package/file-saver) | `javascript - file` | Save files easily in the browser. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 fs-extra](https://www.npmjs.com/package/fs-extra) | `javascript` | fs-extra adds file system methods that aren't included in the native fs module. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 lodash](https://lodash.com/) | `javascript` | JavaScript library that provides utility functions for functional programming. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 nodemon](https://nodemon.io/) | `javascript` | nodemon is a utility that monitors for changes in files and automatically restarts the server. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 prompt-sync](https://www.npmjs.com/package/prompt-sync) | `javascript` | A simple prompt for Node.js. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 underscore](https://underscorejs.org/) | `javascript` | Underscore.js is a utility-belt library for JavaScript that supports the usual suspects (each, map, reduce, filter, etc...) without extending JavaScript's core objects. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ job

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 agoramada](https://www.agoramada.com/) | `job - professional - work - esn - startup - offshore - mg - docs` | Agoramada vous aide à réussir à Madagascar depuis votre mobile: Trouvez Produits, Services, Emplois, Collaborateurs, Clients, Informations, Documentation. | N/A | Unclassifiable |
| [🔗 bocasay](https://www.bocasay.com/fr/) | `job - professional - work - esn - startup - offshore - mg` | Experts dans la production informatique Agile, nous développons des solutions WEB et MOBILE pour les startups, PME et grands comptes. | N/A | Unclassifiable |
| [🔗 codeo](https://www.codeo.mg/) | `job - professional - work - esn - startup - offshore - mg` | Nous sommes une agence de freelancing dans le domaine de developpement. Nous offrons des solutions de développement d’applications innovantes et personnalisées pour répondre aux besoins de nos clients. | N/A | Unclassifiable |
| [🔗 creativedev](https://www.creativedev-madagascar.com/) | `job - professional - work - esn - startup - offshore - mg` | CreativeDev est une agence web offshore basée à Madagascar. Nous sommes spécialisés dans le développement de site web, creation graphique 3d, logiciel sur mesure, reception d'appel, emission d'appel, data annotation, ai et bien d'autres. | N/A | Unclassifiable |
| [🔗 developa](https://www.developa.net/) | `job - professional - work - esn - startup - offshore - mg` | DevelopA est spécialisée dans la conception et developpement de Système d'Information novateurs, en exploitant pleinement la flexibilité des technologies web. | N/A | Unclassifiable |
| [🔗 etech](https://etechconsulting-mg.com) | `job - professional - work - esn - startup - offshore - mg` | Avec 500+ ingénieurs, 40+ technologies maîtrisées, ainsi que l'innovation dans notre ADN, nous pouvons mettre à votre disposition une combinaison de compétences pour mener à bien votre projet digital. | N/A | Unclassifiable |
| [🔗 hairun](https://www.hairun-technology.com/) | `job - professional - work - esn - startup - offshore - mg` | HaiRun Technology est une entreprise de service du numérique (ESN), leader en développement de logiciels à Madagascar et en France. | N/A | Unclassifiable |
| [🔗 ingenosya](https://www.ingenosya.com/) | `job - professional - work - esn - startup - offshore - mg` | Votre esn offshore spécialisée dans le développement de logiciels et de solutions informatiques, offrant les meilleurs prix du marché à Madagascar et dans l'Océan Indien. | N/A | Unclassifiable |
| [🔗 inside the mind of a recruiter](https://insidemr.vercel.app/) | `job - docs - professional - work - mg` | Tsy ataotao foana ny fitadiavana asa, misy fitsipika mipetraka izay tokony arahina izy ireny. Matetika ny olona efa manan-traikefa amin'ny tontolon'ny Asa no manoro antsika izany (ireo zokintsika, ireo mpampiasa ary ireo namana efa miasa). | N/A | Unclassifiable |
| [🔗 myagency](https://www.myagency.mg/) | `job - professional - work - esn - startup - offshore - mg` | Faites-vous accompagner par des professionnels! MyAgency est une agence web basée à Madagascar. Expert dans la création de site e-commerce sur prestashop, développement et personnalisation de site sous wordpress, développement sur mesure avec Symfony. Nous vous accompagnons depuis l’analyse de votre besoin, dans la conception de votre projet web ou mobile jusqu’à l’optimisation de votre visibilité. | N/A | Unclassifiable |
| [🔗 novity](https://www.novity.io/) | `job - professional - work - esn - startup - offshore - mg` | Add experienced engineers to your in-house team to skyrocket your software development capabilities. | N/A | Unclassifiable |
| [🔗 portaljob madagascar](https://www.portaljob-madagascar.com/emploi/liste) | `job - professional - work - esn - startup - offshore - mg` | portaljob Madagascar: portail pour l'emploi a madagascar, le recrutement , la formation et l'integration professionnelle. Diffusion et Prestation gratuite. | N/A | Unclassifiable |
| [🔗 relia consulting](https://relia-consulting.com/) | `job - professional - work - esn - startup - offshore - mg` | Expertise inégalée sur les meilleures technologies - Tarif abordable et avec facilité de paiement - Communication transparente et réactive. | N/A | Unclassifiable |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ layout

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 css grid generator](https://cssgrid-generator.netlify.app/) | `layout - grid - css - generator` | An open-source project allowing users to quickly create dynamic CSS grid-based layouts. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 css layout](https://csslayout.io/) | `layout - collection - css` | A collection of popular web layouts and patterns in Pure CSS. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 flex malven](https://flexbox.malven.co/) | `layout - flex - css` | A flexbox cheatsheet to reference when working with flexbox. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 flexbox help](https://flexbox.help/) | `layout - flexbox - generator` | A quick and easy flexbox generator. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 flexboxfroggy](http://flexboxfroggy.com/#fr) | `layout - flex - training - css` | A game where you help Froggy the frog and his friends by writing CSS flexbox code!. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 generate position](http://www.generatecss.com/css/position/) | `layout - position - generator` | This generator makes it easy to position elements on top of another element. This tool is great for things like positioning a logo over a header in a website layout or creating a banner that overlaps with text instead of an image. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 grid malven](https://grid.malven.co/) | `layout - grid - css` | A CSS grid cheatsheet to reference when creating a CSS grid. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 layoutit](https://www.layoutit.com/build) | `layout - grid - bootstrap - generator` | A Bootstrap grid generator to quickly create custom layouts. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 milligrid](http://bencoveney.github.io/Milligrid/) | `layout - grid - flexbox - css` | Milligrid is a configurable, easy-to-learn flexbox CSS grid system based on Milligram. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-responsive](https://www.npmjs.com/package/react-responsive) | `layout - responsive - react - javascript` | A media queries component for React. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ lazyloading

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 infinite-queries](https://tanstack.com/query/v4/docs/react/guides/infinite-queries) | `lazyloading - tanstack - scroll - query - performance - react - javascript` | A guide to make infinite scroll easy in React with Tanstack. | [ref](https://www.youtube.com/watch?v=Ns5wBs-HAzc) | ⭐⭐⭐⭐⭐ |
| [🔗 react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) | `lazyloading - scroll - query - performance - react - javascript` | A component to make infinite scroll easy in React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) | `lazyloading - skeleton - animation - query - ux - ui - react - javascript` | Create beautiful animated loading skeletons that automatically adapt to your app. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ loader

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 css loaders & spinners](https://cssloaders.github.io/) | `loader - spinner - css` | This is a library with a collection of different types of CSS loaders, spinners. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) | `loader - spinner - react - javascript` | Stylish Spinners for Your ReactJS Applications. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-loading-screen](https://www.npmjs.com/package/react-loading-screen) | `loader - spinner - react - javascript` | A React loading screen. Can be used as a screensaver for the initial download of the application or as an overload screen for promises. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-preloaders2](https://www.npmjs.com/package/react-preloaders2) | `loader - preloader - spinner - react - javascript` | This project is a fork of vamosgs.github.io/react-preloaders fixing a bug related to React duplication in the latest versions of React. | [ref](https://github.com/vamosgs/react-preloaders) | ⭐⭐⭐⭐⭐ |
| [🔗 spinkit](https://tobiasahlin.com/spinkit/) | `loader - spinner - css` | Simple CSS Spinners. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ logo

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 logoideas](https://www.namecheap.com/logo-maker/ideas) | `logo - idea - maker` | Logo creation idea. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 logomakr](https://logomakr.com/app) | `logo - maker` | Web application for creating a logo. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 logoSearch](https://logosear.ch/search.html?q=) | `logo - search - collection - svg` | Search engine with over 200,000 indexed SVG logos. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 SVGporn](https://svgporn.com/#search=web) | `logo - search - collection - svg` | Over 1000 high-quality SVG logos. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 wix logo](https://www.wix.com/logo/maker/esh/dashboard/my-logos?logoId=1e2c6a95-5a0b-4a57-8ca0-1907d69ab990&referralInfo=savedlogos) | `logo - maker - generator` | Logo generator from the wix site. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ modal

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 notiflix](https://notiflix.github.io) | `modal - alert - javascript` | JS library for non-blocking client-side notifications, pop-up boxes (alert), loading indicators (loader), and more, makes your web projects much better. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 rodal](https://github.com/chenjiahan/rodal) | `modal - alert - javascript` | Library to create a minimalist modal. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 sweetalert2](https://sweetalert2.github.io/) | `modal - alert - javascript` | Sweetalert2 makes popup messages easier and prettier. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 sweetalert2-react](https://github.com/sweetalert2/sweetalert2-react-content) | `modal - alert - react - javascript` | Sweetalert2 for React. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ music

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bensound](https://www.bensound.com/) | `music` | Over 1.7 million high-quality images and videos. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 mixkit](https://mixkit.co) | `music - sound` | Free music & sound effect for your projects. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ nocode

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 builder.io](https://builder.io) | `nocode - frontend - cms - ui - generator` | Builder.io is a headless visual CMS. Think of it as a drag-drop CMS that integrates with your existing codebase, allowing you and your team to edit content without having to write code. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ pdf

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 ilovePDF](https://www.ilovepdf.com/fr) | `pdf - tools` | Various tools for your PDF files. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 web2pdf](https://www.web2pdfconvert.com/) | `pdf - converter` | Convert web pages to PDF. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ plateform

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 discord](https://discord.com/) | `plateform - chat - communication - gaming - community` | Discord is a VoIP and instant messaging platform. It works on Windows, macOS, Linux, Android, iOS, and web browsers. It is distributed as freeware and developed with proprietary license. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 dribbble](https://dribbble.com/) | `plateform - design - frontend - ux - ui - idea - community - sharing` | Dribbble is a platform for sharing graphic creations. Users can share screenshots of their ongoing or completed work, comment on them, and like them. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 linkedin](https://www.linkedin.com/) | `plateform - social - network - professional - job - community` | LinkedIn is an online professional social network created in 2002 in Mountain View, California. It was launched in May 2003. The site has been available in French since 2007. On June 13, 2016, Microsoft announced the acquisition of the social network for $26.2 billion. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 slack](https://slack.com/) | `plateform - project - management - organization - communication - team - community` | Slack is a proprietary collaborative communication platform created by Stewart Butterfield. It is widely used in the professional world. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 smashing magazine](https://www.smashingmagazine.com/) | `plateform - design - frontend - ux - ui - idea - community - sharing` | Magazine on CSS, JavaScript, front-end, accessibility, UX, and design. For developers, designers, and front-end engineers. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 trello](https://trello.com/) | `plateform - project - management - organization - communication - team - community` | Trello is an online project management tool. It was created by Fog Creek Software in 2011 and was acquired by Atlassian in January 2017. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ playground

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 codepen](https://codepen.io/) | `playground - frontend - editor - cloud - ide - html - css - javascript` | CodePen is a social development environment for designers and front-end developers. Create and deploy a website, showcase your work, create test scenarios to learn and debug, and find inspiration. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 codesandbox](https://codesandbox.io/) | `playground - editor - ide - cloud` | The most popular playground of the moment. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 dartpad](https://dartpad.dev/) | `playground - editor - ide - cloud - dart` | The playground for the Dart language. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 stackblitz](https://stackblitz.com) | `playground - editor - ide - cloud` | The playground that is both fast and comprehensive for editing your projects online. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ query

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 graphQL](https://graphql.org/) | `query - database - api - graph` | GraphQL is a query language for your API, and a runtime for executing those queries by using a type system you define for your data. It was developed by Facebook in 2012 and released as an open-source project in 2015. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-query-devtools](https://www.npmjs.com/package/@tanstack/react-query-devtools) | `query - debug - test - tanstack - react - javascript` | The React Query Devtools is a browser extension that provides a set of tools for debugging and testing React Query applications. It allows you to inspect the cache, view queries, and more. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 tanstack-query](https://tanstack.com/query) | `query - database - api - rest - async - tanstack - javascript` | tanstack-query is a JavaScript library for querying data from various sources, including REST APIs, GraphQL, and more. It provides a simple and consistent API for fetching and managing data in your applications. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ react

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 beautiful-react-hooks](https://github.com/antonioru/beautiful-react-hooks) | `react - frontend - collection - hooks - javascript` | A collection of useful React hooks for your projects. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 mdb-react-ui-kit](https://mdbootstrap.com/docs/b5/react/getting-started/installation/) | `react - frontend - material - design - bootstrap - javascript` | Material Design for Bootstrap 5 - React UI Kit. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-circular-progressbar](https://github.com/kevinsqi/react-circular-progressbar) | `react - frontend - progress - javascript` | A circular progress bar component for React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-countup](https://www.npmjs.com/package/react-countup) | `react - frontend - count - javascript` | A React component wrapper around CountUp.js. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-github-calendar](https://grubersjoe.github.io/react-github-calendar/) | `react - frontend - github - calendar - javascript` | A GitHub calendar component for React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-helmet](https://www.npmjs.com/package/react-helmet) | `react - frontend - manager - javascript` | A document head manager for React. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-share](https://www.npmjs.com/package/react-share) | `react - frontend - social - javascript` | Share buttons for social networks and share count for your React applications. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-under-construction](https://www.npmjs.com/package/react-under-construction) | `react - frontend - construction - 404 - javascript` | A React component for under construction pages. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-use-cart](https://www.npmjs.com/package/react-use-cart) | `react - frontend - cart - javascript` | A shopping cart hook for React. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ roadmap

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 3d roadmap](https://github.com/oziw/3D-Web-Roadmap) | `roadmap - 3d - webgl` | A guide to learning 3D on the web. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-developer-roadmap](https://github.com/adam-golab/react-developer-roadmap) | `roadmap - frontend - react - javascript` | A guide to becoming a React developer. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 roadmap.sh](https://www.roadmap.sh/) | `roadmap - tutorial - frontend - backend - fullstack - devops - mobile - desktop - design - data - docs - security` | roadmap.sh is a community effort to create roadmaps, guides, and other educational content to help developers choose their path and guide their learning. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ router

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-router-dom](https://reactrouter.com/) | `router - react - javascript` | React router is the most popular React library for creating client-side routing with rich documentation. | [ref](https://github.com/remix-run/react-router/tree/dev/examples) | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ scroll

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-scroll](https://www.npmjs.com/package/react-scroll) | `scroll - effect - animation - frontend - react - javascript` | React component to animate vertical scrolling. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-scroll-up-button](https://www.npmjs.com/package/react-scroll-up-button) | `scroll - effect - animation - frontend - component - react - javascript` | React component for a fixed scroll-up button. The component contains all the necessary code to scroll to the top of the page (or desired position) using Easing Effect. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ searchengine

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 elasticsearch](https://www.elastic.co/fr/elasticsearch) | `searchengine - performance - database` | Elasticsearch is a distributed RESTful search and analytics engine, designed to meet a wide range of use cases. And their list keeps growing. A key component of the Elastic Stack, it centralizes your data storage and ensures ultra-fast search, high relevance, and powerful, scalable analytics. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 meilisearch](https://github.com/meilisearch/meilisearch) | `searchengine - performance - database - rust` | An ultra-fast search API that easily integrates with your applications, websites, and workflows. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ security

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 bad-words](https://www.npmjs.com/package/bad-words) | `security - filter - validator - test` | Bad Words is a word filter that allows filtering offensive words. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 bcrypt](https://www.npmjs.com/package/bcrypt) | `security - hash - password - javascript` | bcrypt is a password hashing algorithm. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 french-badwords-list](https://www.npmjs.com/package/french-badwords-list) | `security - filter - collection - validator - test - fr` | Liste de mots grossiers en français. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 owasp-password-strength-test](https://github.com/nowsecure/owasp-password-strength-test) | `security - password - validator - test` | OWASP Password Strength Test is a tool that tests password strength based on OWASP criteria. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 passport](https://www.npmjs.com/package/passport) | `security - authentication - node - javascript` | Passport is an authentication middleware for Node.js. It is extremely flexible and modular and can be easily integrated into any Express-based web application. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 urlvoid](https://www.urlvoid.com/) | `security - url - scanner` | URLVoid is an online service that allows users to scan a website to detect malware and phishing activities. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ sidebar

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-pro-sidebar](https://github.com/azouaoui-med/react-pro-sidebar) | `sidebar - component - frontend - react - javascript` | React Pro Sidebar provides a set of components to create a high-level and customizable sidebar navigation. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-sidebar](https://github.com/balloob/react-sidebar) | `sidebar - component - frontend - react - javascript` | A sidebar component for React. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ slider

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel) | `slider - react - javascript` | Fully responsive and super lightweight carousel in React. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 react-slick](https://www.npmjs.com/package/react-slick) | `slider - react - javascript` | Fully responsive and super lightweight carousel in React. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 slick.js](https://kenwheeler.github.io/slick/) | `slider - jquery - javascript` | Fully responsive and super lightweight carousel in jQuery. | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 splide.js](https://splidejs.com/) | `slider - javascript` | Splide is a lightweight, flexible, and accessible slider/carousel written in TypeScript. No dependencies, no Lighthouse errors. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 swiper.js](https://swiperjs.com/get-started/) | `slider - angular - react - vue - javascript` | Free, elegant, and modern carousel without jQuery. Available for Vanilla JS and all modern frameworks like React, Vue, Angular etc... | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ stat

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 cloc](https://github.com/kentcdodds/cloc) | `stat - dev - counter - reporter` | Count lines of code. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 nodejs libhunt](https://nodejs.libhunt.com/) | `stat - dev - awesome - node - javascript` | Find the best Node.js libraries. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 npmtrends](https://npmtrends.com/) | `stat - versus - npm - package - javascript` | Compare the number of package downloads over time. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 stateofcss](https://2021.stateofcss.com/fr-FR/) | `stat - css` | CSS and its technologies statistics. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 stateofjs](https://2021.stateofjs.com/fr-FR/) | `stat - javascript` | JavaScript and its technologies statistics. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ state-manager

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 recoil.js](https://recoiljs.org/) | `state-manager - react - javascript` | Minimal and like React. Recoil works and thinks like React. Add it to your app and get fast and flexible shared state. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 redux-toolkit](https://redux-toolkit.js.org/) | `state-manager - react - javascript` | The official, opinionated, batteries-included toolset for efficient Redux development. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 zustand](https://zustand-demo.pmnd.rs/) | `state-manager - react - javascript` | Bear necessities for state management in React. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ table

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 datatable.js](https://datatables.net/) | `table - jquery - javascript` | DataTables is an open-source jQuery plugin for enhancing an HTML table. Created by Allan Jardine under the MIT license. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 grid.js](https://gridjs.io/docs/index/) | `table - angular - react - vue - javascript` | Grid.js is a free and open-source HTML table plugin written in TypeScript. It works with most JavaScript frameworks, including React, Angular, Vue, and VanillaJs. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-table](https://react-table.tanstack.com/) | `table - tanstack - react - javascript` | React Table is a lightweight, extensible table library for React. It's designed to help you build simple or complex data tables in React quickly. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ tag

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-tag-input-component](https://www.npmjs.com/package/react-tag-input-component) | `tag - input - component - react - javascript` | Lightweight component for tag(s) input. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 react-tagsinput](https://www.npmjs.com/package/react-tagsinput) | `tag - input - component - react - javascript` | Highly customizable React component for inputing tags. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ task

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 grunt.js](https://gruntjs.com/) | `task - runner - javascript` | Grunt is a tool for automating tasks with JavaScript (file-oriented). | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 gulp.js](https://gulpjs.com/) | `task - runner - javascript` | Leverage gulp and the flexibility of JavaScript to automate slow and repetitive workflows and compose them into efficient build pipelines. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ template

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 awwwards](https://www.awwwards.com/) | `template - top - idea` | A website that evaluates and collects the best websites in the world in terms of UI. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 bootswatch](https://bootswatch.com) | `template - bootstrap - collection` | Collection of free Bootstrap themes. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 box shadow](https://getcssscan.com/css-box-shadow-examples) | `template - effect - shaddow - idea - css` | 91 Beautiful examples of CSS box-shadow. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 buttons ui](https://getcssscan.com/css-buttons-examples) | `template - collection - button - idea - css` | 84 beautiful examples of CSS buttons. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 collect UI](https://collectui.com/designs) | `template - collection - idea` | Daily inspiration collected from daily UI archives and beyond. Handpicked and updated daily. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 html5 up](https://html5up.net) | `template - html - css` | Very modern and unique responsive HTML5/CSS3 themes. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 lapa.ninja](https://www.lapa.ninja/) | `template - idea` | Best landing page inspiration. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 UI design daily](https://www.uidesigndaily.com) | `template - component - figma - sketch - photoshop` | Awesome UI components of all kinds. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ test

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 jest](https://jestjs.io/) | `test - framework - unit - javascript` | Jest is a modern, developer-friendly, and performant JavaScript testing framework, primarily used for testing Node.js and front-end applications. With its zero-configuration setup, ease of use, and seamless integration with Babel, TypeScript, and other popular tools, Jest enables developers to write tests quickly and efficiently, while offering advanced features such as automatic mocking, snapshots, and parallel execution, ensuring a pleasant and efficient testing experience. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 keyboard-test](https://www.onlinemictest.com/fr/keyboard-test/) | `test - keyboard - hardware` | Keyboard Test is a simple and convenient online tool that allows you to test the keys of a computer keyboard in real-time. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 mocha](https://mochajs.org/) | `test - framework - unit - javascript` | Mocha is a flexible and powerful JavaScript testing framework, primarily used for testing Node.js applications and front-end applications with a simple and expressive syntax. It provides a comprehensive set of tools for writing and running tests, supports both asynchronous and synchronous test styles, and allows the use of various assertion libraries to verify expected behaviors, thereby providing developers with an effective way to ensure the quality and reliability of their code. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 verdaccio](https://github.com/verdaccio/verdaccio) | `test - npm - package - registry - proxy` | Verdaccio is an open-source npm package registry server that allows managing private packages locally by storing them in a local cache and publishing them to a local server. It offers a simple and effective solution for testing npm packages locally, allowing developers to install, publish, and manage them seamlessly without having to publish them to the public npm registry. | [ref](https://dev.to/one-beyond/different-approaches-to-testing-your-own-packages-locally-verdaccio-5hd8) | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ timer

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 react-countdown-circle-timer](https://www.npmjs.com/package/react-countdown-circle-timer) | `timer - component - counter - react - javascript` | A circular countdown timer component for React. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 react-timer-hook](https://www.npmjs.com/package/react-timer-hook) | `timer - component - counter - hook - react - javascript` | The React Timer Hook is a custom React hook designed to handle timer, stopwatch, and temporal logic/state in your React component. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ torrent

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 1337x](https://1337x.to/) | `torrent - download` | 1337x is a search engine to find your favorite torrents. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 cpasbien](https://www.cpasbien.to/) | `torrent - download - fr` | Telecharger des torrents de films, séries, musique, logiciels et jeux. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 piratebay](https://thepirate-bay.org/home133) | `torrent - download` | Download music, movies, games, software and much more. The Pirate Bay is the galaxy's most resilient BitTorrent site. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 seedr](https://www.seedr.cc/) | `torrent - download - cloud` | Seedr is a secure and anonymous torrent download service that allows you to direct download torrent files anonymously. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 torrent9](https://www.torrent9.fm/) | `torrent - download` | Torrent9 allows you to download torrents of movies, series, music, software, and games. Direct access to 30,000 torrents without registration and without ratio!. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 torrentSeeker](https://torrentz2.eu/) | `torrent - search` | TorrentSeeker is a powerful torrent search combining results from dozens of torrent search engines. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 yggtorrent](https://www.yggtorrent.wtf/) | `torrent - download - fr` | YggTorrent est un site de téléchargement de torrent : Films, Séries, Albums, Logiciels, Jeux, etc... | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 zbigz](https://zbigz.com/) | `torrent - download - cloud` | ZbigZ is a cloud storage service that lets you download torrents directly from your browser. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ training

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 app-ideas](https://github.com/florinpop17/app-ideas) | `training - frontend - backend - fullstack` | A collection of app ideas that can be used to improve your coding skills. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 frontendmentor](https://www.frontendmentor.io/) | `training - frontend - html - css - javascript` | Solve real-world HTML, CSS, and JavaScript challenges while working on professional designs. Join 330,227 developers who are building projects, reviewing code, and helping each other get better. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 javascript30](https://javascript30.com/) | `training - javascript` | 30 days Vanilla JS Coding Challenge, Build 30 things in 30 days with 30 tutorials, No frameworks, No compilers, No libraries!. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ tutorial

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 coding artist](https://codingartistweb.com/) | `tutorial` | Coding Artist is dedicated to providing you with quick and simple yet effective coding tutorials. We provide the best tutorials on HTML, CSS, and JavaScript. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 docstring](https://www.docstring.fr) | `tutorial - python - django - docs` | Learn to code with Docstring's guidance. Master the PYTHON programming language. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 grafikart](https://grafikart.fr/formations/) | `tutorial - fr` | Découvrez une technologie précise à travers une série de vidéos qui vous guideront dans votre apprentissage. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 MDN](https://developer.mozilla.org/fr/docs/Web/) | `tutorial - docs - web` | DevDocs combines multiple API documentations into a fast, organized, and searchable interface. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 pierre giraud](https://www.pierre-giraud.com/) | `tutorial - fr` | Toutes vos ressources sur le développement web, apprenez à coder en HTML, CSS, JavaScript, Python, PHP. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ validator

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 validator](https://www.npmjs.com/package/validator) | `validator - security - javascript` | A library of string validators and sanitizers. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 validator.js](https://github.com/validatorjs/validator.js) | `validator - security - javascript` | String validation and sanitization. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 yup](https://www.npmjs.com/package/yup) | `validator - security - javascript` | Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ video

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 pexels](https://www.pexels.com) | `video - image` | The largest library of free videos, provided by the community. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 pixabay](https://pixabay.com) | `video - image` | Over 1.7 million high-quality images and videos. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ vps

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 contabo](https://contabo.com/en/vps/) | `vps - server - hosting` | We offer high quality Virtual Private Servers with the best price-to-performance ratio (featuring NVMe SSDs, and a truckload of RAM and traffic) so you can build more for less. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 kimsufi](https://www.kimsufi.com/fr/vps/) | `vps - server - hosting - fr` | Avec nos serveurs VPS pas chers, vous hébergez vos sites web et applications web à moindre coût tout en bénéficiant d'une flexibilité et d'une disponibilité matérielles garanties. L'accès root de votre machine virtuelle vous permet de gérer sa configuration et de contrôler vos ressources pour en ajouter davantage si l'évolution de votre projet le nécessite. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 sitebunker](https://sitebunker.net/vps-servers/) | `vps - server - hosting` | Choose from VPS Server packages below with dedicated resources and unlimited traffic or we can customize a package for your needs. | N/A | ⭐⭐⭐⭐🟊 |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ vscode

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 vsce](https://www.npmjs.com/package/vsce) | `vscode - extension - manager - generator - javascript` | VS Code Extension Manager. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ youtube

| URL | Keywords | Description | Ref | Rating |
|  :-- | :-- | :-- | :-- | :--  |
| [🔗 cocadmin](https://www.youtube.com/@cocadmin) | `youtube - tutorial - tips - sysadmin - devops - hacking - actu - fr` | Sysadmin de l'extreme. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 codeconcept](https://www.youtube.com/@codeconcept) | `youtube - tutorial - tips - dev - javascript - actu - fr` | Cette chaîne va vous permettre de passer de nouveaux paliers en JavaScript Front, Back ou Full Stack plus rapidement. Elle vous permettra également de faire votre veille techno JavaScript. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 cookie connecté](https://www.youtube.com/@Cookieconnecte) | `youtube - tutorial - tips - actu - fr` | Mon défi avec cette chaîne est de vous expliquer un sujet complexe de l'informatique ou du numérique en moins de 10 minutes. Le cloud, l'infrastructure et les nouvelles tendances IT sont ma passion et j'ai envie de vous partager mes connaissances.Des dessins simples et des explications concises sont ma méthode pour vous faire digérer l'indigeste. Chaque vidéo est une synthèse sur les concepts clé à retenir d'une notion technique informatique. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 devoxx fr](https://www.youtube.com/@DevoxxFRvideos) | `youtube - conference - tips - actu - fr` | Devoxx France est une conférence en 2 temps forts, sur 3 jours. La première journée, appelée "University", vous permet d'assister à des présentations longues et de participer à des ateliers. Le jeudi et le vendredi, Devoxx France propose d'abord des Keynotes, autour d'orateurs prestigieux, puis ensuite un cycle de 8 conférences, toutes les de 45 mn. Vous pouvez ainsi construire votre propre agenda et suivre différentes sessions selon vos envies. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 freecodecamp.org](https://www.youtube.com/@freecodecamp) | `youtube - tutorial - tips - dev` | We're an open source community of busy people who learn to code and build projects for nonprofits. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 from scratch](https://www.youtube.com/@FromScratchDeveloppementWeb) | `youtube - tutorial - tips - dev - fr` | Un specialiste en developpement web ... | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 grafikart](https://www.youtube.com/@grafikart/) | `youtube - tutorial - tips - dev - fr` | Retrouvez un concentré du web autour du monde du développement web et du graphisme ... Formez vous et améliorez vos compétences à travers près de 161 heures de formation vidéo ... | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 graven ilvec](https://www.youtube.com/@Gravenilvectuto) | `youtube - tutorial - tips - dev - fr` | Passionné par la programmation informatique depuis 7ans+, vous trouverez sur ma chaine des vidéos en lien avec ce sujet. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 khaos farbauti ibn oblivion](https://www.youtube.com/@KhaosFarbautiIbnOblivion) | `youtube - tutorial - tips - pentest - hacking - fr` | Chaine tuto pentest & CTF (capture the flag). | N/A | ⭐⭐⭐🟊🟊 |
| [🔗 kodaps](https://www.youtube.com/@kodaps_fr) | `youtube - tutorial - tips - dev - actu - fr` | Pour moi, après 15 ans de carrière dans les jeux vidéos, coder ce n'est pas seulement un travail. Pour moi, le code est un jeu: un jeu de réflexion, un jeu d'exploration, mais avant tout un jeu de construction. Et ma passion, c'est de partager cette joie de coder. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 net ninja](https://www.youtube.com/@NetNinja) | `youtube - tutorial - tips - dev` | Black-belt your web development skills. Over 2000 free programming tutorial videos about: Modern JavaScript (beginner to advanced), Node.js, React, Vue.js, Firebase, MongoDB, HTML & CSS, Web Design, Git, GitHub, Python, TypeScript, ES6, Babel, Webpack, PHP, Laravel, MySQL, WordPress, Docker, and more. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 pierre giraud](https://www.youtube.com/@PierreGiraudcom) | `youtube - tutorial - tips - dev - fr` | Sur cette chaîne, vous trouverez principalement des tutoriels vidéos complets de programmation (HTML, CSS, JavaScript, PhP, MySQL, etc.). Ces tutoriels vous apprendront à coder étape par étape et sont complètements gratuits. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 processus thief](https://www.youtube.com/@processusthief) | `youtube - tutorial - tips - sysadmin - pentest - hacking - fr` | Vous adorez la cybersécurité ? Moi aussi. Alors venez partager votre passion sur la chaîne ! Je n'ai pas la prétention de tout connaître, mais j'essaye de partager au mieux mes connaissances ! Contournement d'antivirus, Passage de certifications, Exploitation de vulnérabilités, on s'attaque à tous les sujets !. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 programming with mosh](https://www.youtube.com/@programmingwithmosh) | `youtube - tutorial - tips - dev` | Hi! I'm Mosh, a software engineer with over 20 years of experience.  I'm all about clear, concise, practical coding tutorials – no fluff, just the good stuff! My courses focus on real-world projects and the skills that will get you hired. I've helped millions of students transform their careers.. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 simon dieny](https://www.youtube.com/@codeursenior) | `youtube - tutorial - tips - dev - fr` | Un specialiste (senior) dans l'eco systeme Javascript (angular - react) ... | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 theprimetime](https://www.youtube.com/@ThePrimeTimeagen) | `youtube - tutorial - tips - dev` | This is a place for all the things that are awesome on stream. | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 traversy media](https://www.youtube.com/@traversymedia) | `youtube - tutorial - tips - dev` | Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP. | N/A | ⭐⭐⭐⭐🟊 |
| [🔗 xavki](https://github.com/priximmo/sommaire-xavki-devops-fr/) | `youtube - tutorial - tips - sysadmin - devops - gnu - linux - opensource - fr` | Des tutoriels et formations gratuites en français pour bien débuter sur des outils linux, devops et opensource. La chaine xavki c'est plus de 1400 vidéos. Cette ensemble de tutoriels représente plus de 500 heures de tutos pour progresser en toute simplicité autour du devops. Vous pouvez vous abonner mais également devenir membre pour disposer sans attendre des vidéos programmées mais en attente de publication (environ 230). | N/A | ⭐⭐⭐⭐⭐ |
| [🔗 _underscore](https://www.youtube.com/@Underscore_) | `youtube - tips - actu - fr` | Le talk-show des passionnés de l'IT. | N/A | ⭐⭐⭐⭐⭐ |

<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>
