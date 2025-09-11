# React Paged Components

A comprehensive React component library for creating print-ready documents with Paged.js, featuring a built-in development preview system.

## Features

- 🖨️ **Print-First Design**: Components optimized for Paged.js and print layouts
- 📄 **A5 Paper Support**: Built-in support for A5 format with proper margins and page breaks
- 🎨 **Rich Typography**: Comprehensive set of typography components with custom fonts
- 📐 **Layout Components**: Flexible column layouts for complex document structures
- 🔍 **Development Preview**: Built-in navigation and preview system for component development
- 📚 **Academic Features**: Bibliography, footnotes, figures, and citation support

## Installation

```bash
npm install react-paged-components
```

## Quick Start

### Basic Setup

```jsx
import { Layouter, TwoColumns, PageBreak } from "react-paged-components";
import "react-paged-components/styles"; // Import fonts
import "react-paged-components/print.css"; // Import print styles

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

### With Development Preview

```jsx
import {
  Layouter,
  Navigation,
  TwoColumnsPage,
  ThreeColumnsLeftPage,
} from "react-paged-components";

const previewElements = [
  {
    title: "layouts",
    components: [
      { title: "two columns", url: "#two-columns" },
      { title: "three columns left", url: "#three-columns-left" },
    ],
  },
];

function DevelopmentApp() {
  return (
    <div>
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <TwoColumnsPage />
        <ThreeColumnsLeftPage />
      </div>

      <div id="preview"></div>
      <Navigation elements={previewElements} />
      <Layouter />
    </div>
  );
}
```

## Components

### Layout Components

- `TwoColumns` - Two-column layout
- `ThreeColumnsLeft` - Three-column layout with emphasis on left
- `ThreeColumnsRight` - Three-column layout with emphasis on right
- `PageBreak` - Force page break

### Typography Components

- `HighlightedBlack`, `HighlightedPink` - Text highlighting
- `Keyword` - Styled keyword badges
- `Quote` - Citation quotes
- `Footnote` - Footnote text
- `VerticalText` - Vertical text display
- `List`, `ListItem` - Styled lists

### Visual Components

- `Figure` - Image figures with captions
- `Chart` - Data visualization
- `Gallery` - Image galleries

### Page Components

- `Atlas` - Table of contents
- `References` - Bibliography
- `ImageReferences` - Figure references

### Preview System

- `Navigation` - Development navigation
- `ChapterName` - Hidden chapter markers
- `LoremIpsum` - Placeholder content

## Styling

The package includes three main style files:

1. **Component Styles**: Imported automatically with components
2. **Font Definitions**: `import 'react-paged-components/styles'`
3. **Print Styles**: `import 'react-paged-components/print.css'`

## Development Workflow

This package is designed for a development workflow where you can visually see components while building them:

1. Use preview components like `TwoColumnsPage` for development
2. Use the `Navigation` component to jump between different layouts
3. Build in the actual A5 print context to see real behavior
4. Use production components in your final documents

## License

MIT © Max Schmalenbach
