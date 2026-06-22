import { defineConfig } from 'astro/config';

// Sitio publicado en GitHub Pages como "user page" (repo caricorrejidor.github.io):
//   https://caricorrejidor.github.io/
// Al servirse en la raíz del dominio, el `base` es '/'.
export default defineConfig({
  site: 'https://caricorrejidor.github.io',
  base: '/',
});
