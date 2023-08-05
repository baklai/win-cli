# Windows command line interpreter

<img src="/public/img/preview.png">

## Demo application -> [Windows cli service](https://win-cli.netlify.app/)

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
| `HOST_NAME`            | Hostname for sitemap generation                                |
| ---------------------- | -------------------------------------------------------------- |

To preview the static generated app, run `npm run preview`

For detailed explanation on how things work, checkout [vitepress](https://vitepress.dev/).
