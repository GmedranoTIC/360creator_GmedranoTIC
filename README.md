# Panocraft 360 Tour Editor

Editor visual para crear tours virtuales con imágenes 360º equirectangulares.

## Características

- ✨ Editor visual de tours 360º
- 🎯 Hotspots interactivos (escenas, enlaces, imágenes)
- 💾 Guardar/cargar proyectos (.pano)
- 📦 Exportar a HTML con imágenes (ZIP)
- 🚀 Compatible con GitHub Pages

## Instalación y Desarrollo

**Requisitos previos:** Node.js

```bash
npm install
npm run dev
```

## Desplegar en GitHub Pages

### 1. Construir el proyecto
```bash
npm run build
```

### 2. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: Selecciona `main` (o la rama que uses) y carpeta `/dist`
5. Guarda los cambios

### 3. Subir la carpeta dist
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push
```

**Nota:** El archivo `vite.config.ts` ya está configurado con `base: './'` para funcionar correctamente en GitHub Pages.

### Alternativa: GitHub Actions (Automático)

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Exportar Tours

El botón "Export HTML" genera un archivo ZIP que contiene:
- `index.html` - Tour interactivo standalone
- `images/` - Carpeta con todas las imágenes 360º y de hotspots

Para visualizar el tour exportado:
1. Descomprime el archivo ZIP
2. Abre `index.html` en un navegador web

## Uso

1. **Nuevo Tour**: Botón "New Tour" para empezar un proyecto desde cero
2. **Agregar Escenas**: Arrastra imágenes 360º equirectangulares a la barra lateral
3. **Crear Hotspots**: Haz clic en la imagen para añadir puntos interactivos
4. **Configurar Hotspots**: 
   - SCENE: Enlaza a otra escena del tour
   - LINK: Abre una URL externa
   - IMAGE: Muestra una imagen en overlay
5. **Guardar Proyecto**: "Save .pano" para guardar tu trabajo (incluye imágenes)
6. **Exportar**: "Export HTML" para generar el tour final en formato ZIP

## Formato de Imágenes

Las imágenes deben ser equirectangulares (proyección 2:1, típicamente 4096x2048 o similar). Puedes obtenerlas de:
- Cámaras 360º (Ricoh Theta, Insta360, etc.)
- Software de renderizado 3D
- Conversión de panoramas desde otras proyecciones
