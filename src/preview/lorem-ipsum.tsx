const contents = {
  short: "Lorem ipsum.",
  normal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  extraLong: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
};

type LoremIpsumProps = {
  content?: "short" | "normal" | "long" | "extraLong";
};

export function LoremIpsum({ content = "normal" }: LoremIpsumProps) {
  return <p>{contents[content]}</p>;
}
