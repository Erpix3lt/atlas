# Paged.js learnings

## 2 column layout

- A two column layout can be achieved with `className={"columns-2"}`
- An element can span the total number of columns using `style={{ columnSpan: "all" }}`

## Coloring pages

- Coloring pages can be achieved by the following inside index.css:
  `#page-4 {
  background: linear-gradient(to bottom, white 50%, #FFD2FE 50%);
}`

## Overriding text element styles

- Pre existing styles can be overriden using the style prop: `style={{ fontSize: "9px" }}`
