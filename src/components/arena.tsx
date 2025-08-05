import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

export type ArenaProps = {
  modelUrl: string;
};

export function Arena({ modelUrl }: ArenaProps) {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const beforePrint = () => setIsPrinting(true);
    const afterPrint = () => setIsPrinting(false);

    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    // Safari compatibility
    const mediaQueryList = window.matchMedia("print");
    const mediaQueryListener = (mql: MediaQueryListEvent) => {
      setIsPrinting(mql.matches);
    };
    mediaQueryList.addEventListener("change", mediaQueryListener);

    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
      mediaQueryList.removeEventListener("change", mediaQueryListener);
    };
  }, []);

  if (isPrinting) return null;

  return (
    <Canvas shadows camera={{ position: [2, 0.6, 2] }}>
      <Stage environment="city" intensity={0.6} shadows adjustCamera>
        <Model url={modelUrl} />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
