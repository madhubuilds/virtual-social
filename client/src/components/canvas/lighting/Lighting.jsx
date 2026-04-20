import React from "react";

export const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 0]} />
      <directionalLight position={[-5, 5, 0]} />
    </>
  );
};
