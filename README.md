# CV · Carina Correjidor

Sitio personal, blog y CV de [Carina Correjidor](https://linkedin.com/in/carinacorrejidor) — Arquitecta de Software con foco en Fintech & Banca e IA aplicada. Buenos Aires.

## 🔗 Links

- **Sitio:** [caricorrejidor.github.io/cv](https://caricorrejidor.github.io/cv)
- **Notas (blog):** [caricorrejidor.github.io/cv/notas](https://caricorrejidor.github.io/cv/notas)
- **CV:** [caricorrejidor.github.io/cv/cv.html](https://caricorrejidor.github.io/cv/cv.html)
- **LinkedIn:** [linkedin.com/in/carinacorrejidor](https://linkedin.com/in/carinacorrejidor)
- **Email:** carinacorrejidor@outlook.com

## 📁 Estructura

| Ruta | Descripción |
|---|---|
| `src/pages/notas/` | Blog ("Notas") — lista y posts, generados desde `src/content/blog/*.md` |
| `src/layouts/Base.astro` | Layout común (header + footer compartidos) |
| `src/content/blog/` | Posts en Markdown (hoy de ejemplo) |
| `src/styles/global.css` | Sistema de diseño del sitio |
| `public/index.html` | Landing — se sirve tal cual (migración a componentes pendiente) |
| `public/cv.html` | CV completo en formato editorial, listo para imprimir en A4 |

## 🛠️ Stack

[Astro](https://astro.build) (sitio estático). Tipografías DM Sans + JetBrains Mono vía Google Fonts.

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo local (http://localhost:4321/cv)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

> El sitio es un *project page* de GitHub Pages, por eso `astro.config.mjs` usa `base: '/cv'`.

## 🚀 Despliegue

Automático vía GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` buildea con Astro y publica en GitHub Pages. Requiere que en *Settings → Pages → Source* esté seleccionado **GitHub Actions**.

## 🎨 Diseño

Paleta unificada en **violeta Milka** (`#684FA3`) con acentos, sobre fondo claro; tipografías DM Sans (texto) + JetBrains Mono (código/labels). El CV mantiene además su estética editorial técnica optimizada para impresión A4.

## 📝 Licencia

Contenido y diseño © 2026 Carina Correjidor. El código es libre de consultar; el contenido personal (experiencia, formación, marca) no es reutilizable sin permiso.

---

*Repo mantenido como parte del portfolio público. Cualquier feedback o typo reportado como issue es bienvenido.*
