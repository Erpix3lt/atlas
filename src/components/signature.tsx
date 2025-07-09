export function Signature() {
  const signature = import.meta.env.VITE_SIGNATURE;

  if (signature === "true") {
    return (
      <div>
        <img className="w-3/4" src="signature.svg" alt="signature"></img>
      </div>
    );
  }

  return null;
}
