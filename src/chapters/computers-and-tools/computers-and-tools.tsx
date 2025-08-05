import { Gallery } from "../../components/pages/gallery";

export function ComputerAndTools() {
  const computerAndTools = [
    "hilti",
    "mac",
    "hammer",
    "hilti",
    "mac",
    "hammer",
    "hilti",
    "mac",
    "hammer",
    "mac",
    "hammer",
    "hilti",
    "hammer",
    "hilti",
    "mac",
    "mac",
  ];

  return (
    <>
      <h2 className="col-span-full hidden">Computer and tools</h2>
      <Gallery ids={computerAndTools}></Gallery>
    </>
  );
}
