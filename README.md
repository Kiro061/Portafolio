# Andrés Castellanos — Junior Backend Developer Portfolio

Portafolio profesional de una sola página construido con HTML5, CSS3 y JavaScript vanilla.
Diseñado para presentar proyectos reales de backend, automatización e integración de sistemas
ante reclutadores y equipos técnicos.

---

## 📁 Estructura del proyecto

```
portfolio/
├── index.html          # Documento HTML principal (semántico, accesible)
├── styles.css          # Estilos — variables, layout, componentes, responsivo
├── main.js             # JS vanilla — nav, animaciones, validación de formulario
├── assets/
│   ├── andres-castellanos-cv.pdf   # (Agrega tu CV aquí)
│   └── images/                     # (Capturas de proyectos)
└── README.md           # Este archivo
```

---

## 🧠 Enfoque técnico

Este portafolio está orientado a posiciones **backend y automatización**. Refleja:

- Integración de APIs externas (OpenAI, Telegram, Google Sheets)
- Automatización de procesos con n8n y lógica de decisión con IA
- Desarrollo de aplicaciones web con JavaScript vanilla y arquitectura modular
- Manejo de webhooks, flujos asíncronos y servicios de terceros
- Buenas prácticas de control de versiones con Git

---

## ✨ Características del sitio

- **Responsivo** — mobile-first, funciona en móvil, tablet y escritorio
- **HTML semántico** — `header`, `nav`, `main`, `section`, `footer` correctamente usados
- **Accesibilidad** — etiquetas ARIA, focus-visible, soporte para `prefers-reduced-motion`
- **Navegación sticky** — header transparente que toma fondo al hacer scroll
- **Menú hamburguesa** — con cierre por teclado (Esc) y clic externo
- **Animaciones de entrada** — reveladas con Intersection Observer al hacer scroll
- **Barras de habilidades** — animadas al entrar al viewport
- **Formulario de contacto** — validación en tiempo real lado cliente
- **Sin dependencias** — cero frameworks, cero build tools, carga instantánea

---

## 🚀 Despliegue en GitHub Pages

### Paso 1 — Crear el repositorio

```bash
# Opción A: sitio personal (URL raíz)
# Nombre del repo: tu-usuario.github.io

# Opción B: sitio de proyecto (vive en /portfolio)
# Nombre del repo: portfolio
```

### Paso 2 — Subir el código

```bash
git init
git add .
git commit -m "feat: portafolio inicial — junior backend developer"

git remote add origin https://github.com/Kiro061/portfolio.git
git branch -M main
git push -u origin main
```

### Paso 3 — Activar GitHub Pages

1. Ir al repositorio en GitHub
2. **Settings** → **Pages** (menú lateral)
3. En **Source**, seleccionar rama `main` y carpeta `/ (root)`
4. Clic en **Save**
5. En ~60 segundos el sitio estará en `https://kiro061.github.io/portfolio`

### Paso 4 — Dominio personalizado (opcional)

1. Compra un dominio (Namecheap, Porkbun, etc.)
2. En GitHub Pages → **Custom domain**, escribe tu dominio
3. Agrega un archivo `CNAME` en la raíz con tu dominio:
   ```
   www.tudominio.com
   ```
4. Configura el DNS de tu dominio con un registro CNAME apuntando a `kiro061.github.io`

---

## 📝 Guía de Conventional Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/) para un historial de Git limpio y legible.

| Prefijo | Cuándo usarlo | Ejemplo |
|---------|--------------|---------|
| `feat:` | Nueva sección o funcionalidad | `feat: agregar sección de proyectos con tarjetas reales` |
| `fix:` | Corrección de bug | `fix: corregir menú móvil que no cierra al hacer clic fuera` |
| `style:` | Cambios visuales/CSS sin lógica | `style: ajustar espaciado de tarjetas en móvil` |
| `refactor:` | Reestructura de código sin cambio de comportamiento | `refactor: extraer validación del formulario en función separada` |
| `docs:` | Cambios en documentación | `docs: actualizar README con enfoque backend` |
| `perf:` | Mejora de rendimiento | `perf: agregar throttle al listener de scroll` |
| `a11y:` | Mejoras de accesibilidad | `a11y: agregar aria-label a botón hamburguesa` |
| `chore:` | Tareas de mantenimiento | `chore: eliminar variables CSS sin uso` |

### Ejemplo de historial de commits

```
feat: agregar proyecto Sistema N8N con mockup animado
feat: agregar proyecto Catálogo de Cursos con buscador
style: rediseñar tarjetas de skills con iconos por tecnología
fix: corregir barra de habilidades que no anima en Safari móvil
refactor: mover estilos de mockups a sección separada en CSS
docs: actualizar README — reemplazar enfoque frontend por backend
feat: portafolio inicial — junior backend developer
```

---

## 🔧 Guía de personalización

### Datos personales
- Busca `Andrés Castellanos` en `index.html` y reemplaza donde sea necesario
- Actualiza email, GitHub y LinkedIn
- Reemplaza el avatar SVG con tu foto:
  ```html
  <img src="assets/images/foto.jpg" alt="Andrés Castellanos" class="avatar-img" />
  ```
  Y agrega en CSS:
  ```css
  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
  }
  ```

### Proyectos
- Reemplaza los mockups CSS con capturas reales de tus proyectos
- Actualiza títulos, descripciones y links de GitHub
- Agrega o elimina tarjetas según necesites

### Skills
- Ajusta `aria-valuenow` y `--w` en cada barra de habilidad según tu nivel real
- Cambia los niveles: `Familiar` / `Intermedio` / `Avanzado`

### Colores
- Todos los colores están en variables CSS al inicio de `styles.css`
- Cambia `--accent` para personalizar el color de acento

### Formulario de contacto
- El formulario es solo UI por defecto (delay simulado de 1.2s)
- Para hacerlo funcional con [Formspree](https://formspree.io) (gratuito):
  ```js
  // En main.js, reemplaza el setTimeout con:
  const res = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  });
  ```

---

## 🛠️ Desarrollo local

Sin build tools — solo abre en el navegador:

```bash
# Opción 1: extensión Live Server de VS Code (recomendada)
# Clic derecho en index.html → "Open with Live Server"

# Opción 2: servidor Python
python3 -m http.server 3000
# Abrir http://localhost:3000

# Opción 3: Node.js
npx serve .
```

---

## ♿ Checklist de accesibilidad

- [x] Landmarks HTML semánticos
- [x] Jerarquía de encabezados correcta (h1 → h2 → h3)
- [x] ARIA labels en botones e íconos sin texto visible
- [x] `aria-expanded` en el toggle del menú hamburguesa
- [x] `role="alert"` + `aria-live` en errores del formulario
- [x] `role="progressbar"` en barras de habilidad con valuenow/min/max
- [x] Estilos `focus-visible` en todos los elementos interactivos
- [x] Media query `prefers-reduced-motion`
- [x] Contraste de color suficiente (WCAG AA)
- [x] `noopener noreferrer` en todos los enlaces externos
- [x] `lang="es"` en el elemento `<html>`

---

## 📄 Licencia

MIT — libre de usar, modificar y distribuir.

---

*Construido con ❤️ y mucho ☕ por Andrés Castellanos · Bucaramanga, Colombia*
