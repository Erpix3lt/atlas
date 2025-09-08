export const devElements: NavigationElement[] = [
  {
    title: "Getting Started",
    components: [
      { title: "Introduction", url: "/docs/introduction" },
      { title: "Installation", url: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    components: [
      { title: "Button", url: "/docs/components/button" },
      { title: "Card", url: "/docs/components/card" },
      { title: "Modal", url: "/docs/components/modal" },
    ],
  },
  {
    title: "Utilities",
    components: [
      { title: "Hooks", url: "/docs/utilities/hooks" },
      { title: "Helpers", url: "/docs/utilities/helpers" },
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
};

export function Navigation({ elements }: NavigationProps) {
  return (
    <div className="w-fit min-w-1/6 pt-40 pl-10 ">
      {elements.map((element) => (
        <div key={element.title} className="mb-4">
          <p className="font-bold mb-2 text-white">{element.title}</p>
          <ul>
            {element.components.map((component) => (
              <li key={component.url} className="mb-1">
                <a
                  href={component.url}
                  className="text-white hover:underline pl-5  hover:bg-tpink w-fit hover:text-black"
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
