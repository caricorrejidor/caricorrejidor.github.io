<p align="center">
  <img src="sitio/public/favicon.svg" width="100" alt="Mascota — robot violeta">
</p>

<h1 align="center">Sitio de Carina Correjidor</h1>

<p align="center">
  Sitio personal + blog, hecho en <a href="https://astro.build">Astro</a>.<br>
  🔗 En vivo: <a href="https://caricorrejidor.github.io/">caricorrejidor.github.io</a>
</p>

> Manual del proyecto para mí. Cómo está armado, cómo correrlo y dónde tocar cada cosa.

---

## 🗂️ Estructura

Sitio hecho con **Astro 5**. El proyecto vive en `sitio/`. En la raíz quedan solo este README y la config de GitHub.

```
.
├── README.md
├── .github/workflows/deploy.yml   despliegue automático
└── sitio/
    ├── astro.config.mjs           site caricorrejidor.github.io + base '/'
    ├── package.json               Astro ^5.6.0
    ├── src/
    │   ├── pages/
    │   │   ├── index.astro        la landing (ensambla los componentes)
    │   │   └── notas/
    │   │       ├── index.astro    lista del blog
    │   │       └── [...slug].astro post individual
    │   ├── layouts/Base.astro     layout del blog
    │   ├── content.config.ts      colección "blog" tipada (Markdown)
    │   ├── components/            Header, Footer + 10 secciones de la landing
    │   ├── content/blog/          los posts en Markdown
    │   └── styles/                global.css (blog) · landing.css (landing)
    └── public/                    favicon.svg (mascota), avatar.svg
```

**Componentes de la landing** (`src/components/`, ensamblados en `index.astro`):
`Header` · `Hero` · `ProofBand` · `Servicios` · `Proceso` · `Testimonio` · `SobreMi` · `Stack` · `Faq` · `Contacto` · `WhatsappFloat` · `Footer`.

**Posts del blog** (`src/content/blog/`, hoy de ejemplo):
*RAG sin humo* · *¿Qué es MCP (Model Context Protocol)?* · *Mi setup de IA*.

## 🚀 Desarrollo

```bash
cd sitio
npm install
npm run dev      # http://localhost:4321/
npm run build    # genera sitio/dist/
npm run preview  # previsualiza el build
```

## 📦 Despliegue

Automático: cada **push a `main`** dispara GitHub Actions (`.github/workflows/deploy.yml`), que buildea desde `sitio/` y publica en GitHub Pages.
Requiere *Settings → Pages → Source = GitHub Actions*.

> ⚠️ El sitio se publica gratis **porque el repo es público**. Si alguna vez lo paso a privado, Pages deja de andar en plan free (haría falta GitHub Pro o mover el deploy a Netlify/Vercel).

## ✏️ Dónde tocar cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Número de WhatsApp | `sitio/src/components/WhatsappFloat.astro` |
| Testimonio (hoy oculto) | `sitio/src/components/Testimonio.astro` |
| Respuestas del FAQ | `sitio/src/components/Faq.astro` |
| Hero / servicios / textos | `Hero.astro` / `Servicios.astro` |
| Sectores (prueba social) | `ProofBand.astro` |
| Menú / pie de página | `Header.astro` / `Footer.astro` |
| Posts del blog | `sitio/src/content/blog/*.md` |
| Estilos landing / blog | `sitio/src/styles/landing.css` · `global.css` |

## 📌 Pendientes

- [ ] Pegar el número real de WhatsApp (hoy `NUMERO-A-DEFINIR`)
- [ ] Testimonio real (la sección está oculta con `display:none`)
- [ ] Confirmar respuestas del FAQ (trabajo remoto / costos)
- [ ] Contenido real de los 3 posts (hoy son de ejemplo)
- [ ] A futuro: ¿dominio propio? ¿repo privado? (ver nota de despliegue)
