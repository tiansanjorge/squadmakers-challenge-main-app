# Main App

Aplicación principal que integra los microfrontends `mfe-character-list` y `mfe-character-detail` utilizando Webpack Module Federation.

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
