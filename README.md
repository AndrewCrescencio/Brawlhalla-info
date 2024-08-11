<a name="readme-top"></a>

<div align="center">
  <h1 align="center">Brawlhalla Info</h1>

  <p align="center">
    Brawlhalla Legends Info and Top Player Ranking Stats
    <br />
    <a href="https://brawlhalla-info.vercel.app/">View Demo</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#cloning-the-project">Cloning the Project</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li>
      <a href="#setup">Setup</a>
      <ul>
        <li><a href="#development-server">Development Server</a></li>
        <li><a href="#production">Production</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

[![Preview][product-screenshot]](https://brawlhalla-info.vercel.app/)

Website built using Brawlhalla game API data.

You'll find details about legends, their stats, and the weapons they wield, along with rankings for 1v1 and 2v2 matches.

### Built With

[![Nuxt][Nuxt.js]][Nuxt-url] [![Vue][Vue.js]][Vue-url] [![TypeScript][TypeScript]][TypeScript-url] [![Sass][Sass]][Sass-url]

The application data comes from Brawlhalla's official Beta API. https://dev.brawlhalla.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Cloning the Project

### Prerequisites

This application consumes data from the Brawlhalla API. You can request a Brawlhalla API key by sending an email to api@brawlhalla.com - https://dev.brawlhalla.com/

- npm
- API key

<br/>

Clone the repository

```bash
git clone https://github.com/AndrewCrescencio/brawlhalla-info.git
```

Create a .env file and use your API key (.env.example as an example)

```env
    API_URL=https://api.brawlhalla.com
    API_KEY=YOURAPIKEY
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: /src/public/images/preview.png
[Nuxt.js]: https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82
[Nuxt-url]: https://nuxt.com/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Sass]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[Sass-url]: https://sass-lang.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
