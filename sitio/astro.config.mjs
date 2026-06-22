import { defineConfig } from 'astro/config';

// Sitio publicado en GitHub Pages como "project page":
//   https://caricorrejidor.github.io/cv
// Por eso el `base` es '/cv'. Si en el futuro hay dominio propio, se ajusta acá.
export default defineConfig({
  site: 'https://caricorrejidor.github.io',
  base: '/cv',
});
