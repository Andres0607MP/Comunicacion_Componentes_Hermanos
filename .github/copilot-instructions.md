# Copilot / AI agent instructions for this repo

Breve: este repo es una app Angular (SSR) mínima con dos barras principales — `barra_interaccion` (selector de categoría) y `barra-navegacion` (opciones por categoría). Las modificaciones pequeñas de apariencia y texto están bien; no rompas contratos de componentes, selectores o rutas.

**Arquitectura (por qué):**
- App principal: `src/app/app.ts` usa `standing-alone` components y mantiene `categoriaActual` como estado compartido vía `@Input`/`@Output` entre `barra_interaccion` y `barra-navegacion`.
- SSR: configurado en `angular.json` y `src/main.server.ts` / `src/server.ts` — evita cambios que afecten el `server` o la salida de `dist`.

**Archivos clave:**
- `src/app/app.ts` — raíz, mantiene `categoriaActual` y método `actualizarCategoria()`.
- `src/app/app.html` — layout principal que incluye `<app-barra-interaccion>` y `<app-barra-navegacion>`.
- `src/app/components/barra_interaccion/barra_interaccion.component.html` — botones de categoría y `@Output` que emite selección.
- `src/app/components/barra-navegacion/barra-navegacion.html` — lista de opciones que llama a `navegar()`.
- `angular.json`, `package.json` — scripts de build/serve/test. Usa `npm run start` o `ng serve` localmente.

**Cómo ejecutar (dev):**
1. instalar dependencias: `npm install`
2. servir en desarrollo: `npm run start` (usa `ng serve` por configuración en `package.json`).
3. build SSR: `npm run build` y luego `npm run serve:ssr:pagina` para correr `dist`.

**Patrones y convenciones del proyecto:**
- Components son `standalone: true` y se importan en `app.ts` (no hay módulos clásicos). Mantén `imports` consistentes.
- Estilos con `scss`; archivos globales en `src/styles.scss`. Componentes usan `inlineStyleLanguage: scss` (ver `angular.json`).
- Avoid tocar: selectores de componente (`app-barra-interaccion`, `app-barra-navegacion`), nombres de Inputs/Outputs (`categoriaActual`, `categoriaSeleccionada`), y rutas del `router-outlet`.

**Qué puedes cambiar libremente (seguro):**
- Texto visible: títulos en `src/app/home/home.html`, labels en `barra_interaccion.component.html` y `barra-navegacion.html`.
- Estilos: colores, espaciado y tipografía en `src/styles.scss` o los `*.scss` de componentes.
- Iconos y emojis usados como marca en `barra_interaccion` (`⚡`) o `label` strings.

**Qué no cambiar sin preguntar:**
- Contratos Input/Output entre componentes (nombres, tipos, e interacciones). Ej: `@Input() categoria` en `barra-navegacion`.
- Entrypoints SSR y `server.ts` que sirven la build.

Si algo no está claro, edita una sola plantilla pequeña y crea un PR con la descripción: "Cambio estético — texto/colores; mismas APIs". Pide revisión si modificas selectores, inputs/outputs o la configuración de build.

---
Pide feedback a los mantenedores si necesitas renombrar props o adaptar SSR.
