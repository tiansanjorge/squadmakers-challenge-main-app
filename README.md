# Main App

Aplicación principal desarrollada como parte del **Squadmakers Challenge**. Este proyecto implementa una arquitectura de microfrontends utilizando **Webpack Module Federation** para integrar dos módulos independientes:

- [`mfe-character-list`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-list): consume la API pública de **Rick & Morty** y muestra una grilla dinámica de personajes. Además, utiliza la librería de componentes [`tarjeta-lib`](https://github.com/tiansanjorge/squadmakers-challenge-card-component) para renderizar las tarjetas visuales siguiendo el diseño proporcionado en Figma.
- [`mfe-character-detail`](https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-detail): recibe los datos del personaje seleccionado y presenta su vista de detalle.

Ambos microfrontends están coordinados desde esta `main-app`, que actúa como host y orquestador visual de la aplicación.

## 🚀 Instalación y ejecución

```bash
npm install
npm run dev
```

Para generar build:

```bash
npm run build
```

## 🔗 Requisitos previos

Antes de ejecutar esta aplicación, asegurate de que los siguientes microfrontends estén corriendo:

- `mfe-character-list`
- `mfe-character-detail`

Cada uno debe estar ejecutándose localmente con:

```bash
npm run dev
```

## 🏗️ Arquitectura

- Aplicación base que actúa como `host`.
- Integra 2 microfrontends de forma remota.
- Navegación mediante `react-router-dom`.
- Estado global con Redux Toolkit.

## 📦 Dependencias destacadas

- `react`, `react-dom`, `react-router-dom`
- `react-redux`, `@reduxjs/toolkit`
- Webpack 5
- TailwindCSS
- Testing con `jest`, `ts-jest`, `@testing-library/react`
- ESLint configurado para TypeScript + React

## ✅ Testing

```bash
npm run test
```
