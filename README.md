# Main App

Aplicación principal desarrollada como parte del **Squadmakers Challenge**. Este proyecto implementa una arquitectura de microfrontends utilizando **Webpack Module Federation**, integrando dos módulos remotos que se comunican con esta `main-app`, la cual actúa como host y orquestador visual de toda la aplicación.

### 🧩 Microfrontends integrados

➡️ [🔗 Ver repositorio de `mfe-character-list`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-list)  
➡️ [🔗 Ver repositorio de `mfe-character-detail`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-detail)

⚠️ **IMPORTANTE**: estos microfrontends están publicados como proyectos independientes. Es necesario ejecutarlos localmente para iniciar la aplicación, cada uno cuenta con su propia documentación de instalación y ejecución en su respectivo README.md.

- [`mfe-character-list`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-list)  
  → Microfrontend que consume la API pública de **Rick & Morty** y muestra una grilla dinámica de personajes.  
  → Utiliza la librería visual [`tarjeta-lib`](https://github.com/tiansanjorge/squadmakers-challenge-card-component) para renderizar tarjetas con los estilos definidos en Figma.

- [`mfe-character-detail`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-detail)  
  → Microfrontend encargado de mostrar la vista de detalle de un personaje seleccionado.

---

## 🚀 Instalación y ejecución

```bash
npm install
npm run dev
```

Para generar una build de producción:

```bash
npm run build
```

## 🔗 Requisitos previos

Esta aplicación consume dos microfrontends publicados como proyectos independientes.
Asegurate de clonar y correr ambos para inicializar correctamente la app, consulta sus respectivos README.md. 

👉 [`mfe-character-list`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-list)  
👉 [`mfe-character-detail`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-detail)

---

## 🏗️ Arquitectura

- Aplicación host construida con React.
- Integración de microfrontends vía **Webpack Module Federation**.
- Navegación mediante `react-router-dom`.
- Estado global manejado con **Redux Toolkit**.
- Estilos globales y componentes con **TailwindCSS**.

---

## 📦 Dependencias destacadas

- `react`, `react-dom`, `react-router-dom`
- `react-redux`, `@reduxjs/toolkit`
- `webpack 5`, `webpack-dev-server`
- `tailwindcss`, `postcss`, `autoprefixer`
- Testing con `jest`, `ts-jest`, `@testing-library/react`
- ESLint configurado para TypeScript + React

---

## ✅ Testing

```bash
npm run test
```
