# Atlas Paged

![Preview](preview.png)

A comprehensive React component library for creating print-ready documents with Paged.js, featuring a built-in development preview system.

## Installation

```bash
npm install atlas-paged
```

## Install Peer Dependencies

```bash
npm install react react-dom tailwindcss pagedjs
```

## Quick Start

```ts
import { Layouter, TwoColumns, PageBreak } from 'atlas-paged';
import 'atlas-paged/styles'; // Import fonts
import 'atlas-paged/print.css'; // Import print styles

function MyDocument() {
  return (
    <div>
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <TwoColumns>
          <p>Your content here...</p>
        </TwoColumns>
        <PageBreak />
        <p>Next page content...</p>
      </div>

      <div id="preview"></div>
      <Layouter />
    </div>
  );
}
```

## Technologies Used

React, Vite, TypeScript, Paged.js, Tailwind CSS

This is a comprehensive component library for creating print-ready documents with Paged.js and React. It includes Tailwind CSS integration and TypeScript support, making it easy to build complex, print-ready documents with a custom component architecture.

---

License
MIT © Max Schmalenbach EOF ```
