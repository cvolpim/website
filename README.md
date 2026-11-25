# Sitio personal

Sitio estático en Astro con estilos Sass. Usa Node.js 24 (`nvm use` si tienes nvm).

```sh
npm ci
npm run dev
```

Abre `http://localhost:4321/website/`. Edita `src/pages/index.astro` para cambiar el contenido, `src/styles/global.scss` para los estilos y `src/layouts/Base.astro` para los metadatos compartidos. Para imágenes de proyectos, usa `Image` de `astro:assets` con archivos en `src/assets/` para que Astro los procese durante el build.

`npm run check` valida el proyecto. `npm run build` genera los archivos estáticos en `dist/` y `npm run preview` permite comprobar ese resultado en local.

## Publicación

En [Settings → Pages](https://github.com/cvolpim/website/settings/pages), selecciona **GitHub Actions** como fuente. Cada push a `main` ejecuta la validación y publica el resultado en [GitHub Pages](https://cvolpim.github.io/website/). También puedes lanzar el flujo manualmente desde [Actions](https://github.com/cvolpim/website/actions).

La ruta `/website/` está configurada en `astro.config.mjs`. El build genera la URL canónica y el mapa del sitio. En GitHub Pages, el archivo `robots.txt` se lee desde la raíz de `cvolpim.github.io`, por lo que el sitio enlaza su sitemap desde el HTML.
