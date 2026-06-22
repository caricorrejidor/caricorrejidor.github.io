# CV · Carina Correjidor

Sitio personal, blog y CV de [Carina Correjidor](https://linkedin.com/in/carinacorrejidor) — Arquitecta de Software con foco en Fintech & Banca e IA aplicada. Buenos Aires.

## 🔗 Links

- **Sitio:** [caricorrejidor.github.io/cv](https://caricorrejidor.github.io/cv)
- **Notas (blog):** [caricorrejidor.github.io/cv/notas](https://caricorrejidor.github.io/cv/notas)
- **CV:** [caricorrejidor.github.io/cv/cv.html](https://caricorrejidor.github.io/cv/cv.html)
- **LinkedIn:** [linkedin.com/in/carinacorrejidor](https://linkedin.com/in/carinacorrejidor)
- **Email:** carinacorrejidor@outlook.com

## 📁 Estructura

El código del sitio vive en `sitio/`; este README queda en la raíz.

```
cv/
├── README.md            (este archivo)
└── sitio/               proyecto Astro
    ├── astro.config.mjs
    ├── package.json
    ├── src/
    │   ├── pages/        → /  (landing)  y  /notas  (blog)
    │   ├── layouts/      Base.astro (layout del blog)
    │   ├── components/   Header.astro · Footer.astro (compartidos)
    │   ├── content/blog/ posts en Markdown
    │   └── styles/       global.css
    └── public/           cv.html, favicon.svg, avatar.svg
```

> El CV (`sitio/public/cv.html`) se sirve tal cual en `/cv/cv.html`. Tiene que vivir
> dentro de `public/` para que GitHub Pages lo publique.

## 🛠️ Stack y desarrollo

[Astro](https://astro.build) (sitio estático). Tipografías DM Sans + JetBrains Mono.

```bash
cd sitio
npm install      # instalar dependencias
npm run dev      # desarrollo local (http://localhost:4321/cv)
npm run build    # build de producción → sitio/dist/
npm run preview  # previsualizar el build
```

> El sitio es un *project page* de GitHub Pages, por eso `astro.config.mjs` usa `base: '/cv'`.

## 🚀 Despliegue

Automático vía GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` buildea con Astro (desde `sitio/`) y publica en GitHub Pages. Requiere que en *Settings → Pages → Source* esté seleccionado **GitHub Actions**.

## 🎨 Diseño

Paleta unificada en **violeta Milka** (`#684FA3`) sobre fondo claro; tipografías DM Sans (texto) + JetBrains Mono (código/labels). La landing y el blog comparten header y footer. El CV mantiene su estética editorial técnica optimizada para impresión A4.

## 📝 Licencia

Contenido y diseño © 2026 Carina Correjidor. El código es libre de consultar; el contenido personal (experiencia, formación, marca) no es reutilizable sin permiso.

---

*Repo mantenido como parte del portfolio público. Cualquier feedback o typo reportado como issue es bienvenido.*
