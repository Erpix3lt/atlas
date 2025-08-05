import { DottedLineWhite } from "../../components/dotted-line";

export function CoverPage() {
  return (
    <div>
      <div className="absolute w-full bottom-20 transform rotate-270 text-tpink flex flex-col items-start justify-center">
        <h1 className="whitespace-nowrap">Sabotage in</h1>
        <h1>Artificial</h1>
        <h1>Intelligence</h1>
      </div>
      <div className="h-[723px] w-full flex items-end text-white">
        <div className="w-2/3 pr-[20px]">
          <DottedLineWhite />

          <p className="cover-page">
            Can sabotage against Artificial Intelligence give people back their
            agency?{" "}
          </p>
        </div>
        <div className="w-1/3">
          <DottedLineWhite />

          <p className="cover-page">© Maximilian Schmalenbach, 2025</p>
        </div>
      </div>
    </div>
  );
}
