import React from "react";
import { navigationLayout } from "./chapter/layout";

export const devElements: NavigationElement[] = [
  navigationLayout,
  {
    title: "typography",
    components: [
      { title: "title", url: "#title" },
      { title: "headings", url: "#headings" },
      { title: "paragraph", url: "#paragraph" },
    ],
  },
  {
    title: "footnote",
    components: [{ title: "footnote", url: "#footnote" }],
  },
  {
    title: "visual",
    components: [
      { title: "highlighted black", url: "#highlighted-black" },
      { title: "highlighted pink", url: "#highlighted-pink" },
      { title: "keyword", url: "#keyword" },
      { title: "quote", url: "#quote" },
      { title: "repitition", url: "#repitition" },
      { title: "vertical text", url: "#vertical-text" },
      { title: "list", url: "#list" },
    ],
  },
];

export type NavigationComponent = {
  title: string;
  url: string;
};

export type NavigationElement = {
  title: string;
  components: NavigationComponent[];
};

export type NavigationProps = {
  elements: NavigationElement[];
  isPreviewReady?: boolean;
};

export function Navigation({
  elements,
  isPreviewReady = false,
}: NavigationProps) {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    if (!isPreviewReady) {
      return;
    }
    const targetId = url.replace("#", "");
    const previewContainer = document.querySelector("#preview");
    if (!previewContainer) {
      console.warn("Preview container not found");
      return;
    }
    const targetElement = previewContainer.querySelector(`#${targetId}`);
    if (!targetElement) {
      console.warn(`Target element with id "${targetId}" not found in preview`);
      return;
    }

    const pageElement = targetElement.closest(".pagedjs_page");
    if (pageElement) {
      pageElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-fit min-w-1/6 pt-40 pl-10 fixed ">
      {!isPreviewReady && (
        <>
          <p>Loading preview...</p>
        </>
      )}
      {elements.map((element) => (
        <div key={element.title} className="mb-4">
          <p className="font-bold mb-2 text-white">{element.title}</p>
          <ul>
            {element.components.map((component) => (
              <li key={component.url} className="mb-1">
                <a
                  href={component.url}
                  onClick={(e) => handleNavClick(e, component.url)}
                  className={`text-white hover:underline pl-5 hover:bg-tpink w-fit hover:text-black link ${
                    !isPreviewReady
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {component.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
