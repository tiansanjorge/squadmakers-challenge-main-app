# Main App

Aplicación principal desarrollada como parte del **Squadmakers Challenge**. Este repositorio integra dos microfrontends independientes (`mfe-character-list` y `mfe-character-detail`) utilizando **Webpack Module Federation**, que consumen la API pública de **Rick & Morty** y presentan contenido dinámico en base a un diseño proporcionado por Figma.  
Ambos microfrontends utilizan además una librería de componentes desarrollada especialmente para este ejercicio: [`tarjeta-lib`](https://github.com/tiansanjorge/squadmakers-challenge-card-component).

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
