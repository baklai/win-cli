# Windows command line interpreter

<img src="/src/public/img/preview.png">

## Demo [![Netlify Status](https://api.netlify.com/api/v1/badges/9a95cf10-032a-41ca-9f33-e797564da1d6/deploy-status)](https://app.netlify.com/sites/win-cli/deploys) [Windows cli service](https://win-cli.netlify.app/)

## Setup

Install dependencies:

```bash
npm run install
```

## Development

```bash
npm run dev
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
npm run build
```

## Project variables

| Key                    | Comment                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `VITE_HOST_NAME`       | Hostname for sitemap generation                                |
| ---------------------- | -------------------------------------------------------------- |

To preview the static generated app, run `npm run preview`

For detailed explanation on how things work, checkout [vitepress](https://vitepress.dev/).
