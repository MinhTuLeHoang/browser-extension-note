# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Info

Node: 22.16.0
npm: 10.9.2
pnpm: 10.25.0

## Running & Testing Locally

To test this browser extension on your local machine, follow these steps:

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```
2.  **Build the project**:
    ```bash
    pnpm run build
    ```
    This command will generate a `build/` folder containing the compiled code and the extension manifest.

3.  **Load the extension in Chrome**:
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable **Developer mode** using the toggle in the top right corner.
    - Click the **Load unpacked** button.
    - Navigate to this project folder and select the `quick-note/build` directory.

4.  **Open the Note app**:
    - Click the Extensions icon (puzzle piece) in your browser toolbar.
    - Find **QuickNote** and (optionally) pin it for easy access.
    - Click the icon to open the note editor popup.

> [!TIP]
> **Fast UI Testing**: For quicker UI development, you can run `pnpm run dev`. This will open a local dev server (usually at `http://localhost:5173`) where you can see and edit the popup's interface directly in a browser tab with Hot Module Replacement (HMR). However, browser extension APIs (like `chrome.storage`) only work when the extension is loaded in Chrome as described in Step 3.


## How to Deploy/Update

When you make changes to the code, follows these steps to "deploy" them to your local browser extension:

1.  **Modify the source**: Make your changes in the `src/` directory.
2.  **Update version (optional)**: If you want to track versions, update the `"version"` field in `public/manifest.json`.
3.  **Rebuild**:
    ```bash
    pnpm run build
    ```
4.  **Reload in Chrome**:
    - Go back to `chrome://extensions/`.
    - Find the **QuickNote** extension.
    - Click the **Reload icon** (circular arrow) on the extension card to apply your latest changes.

---


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
