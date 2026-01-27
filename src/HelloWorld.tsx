import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b1215",
      }}
    >
      <h1
        style={{
          fontSize: 100,
          fontWeight: "bold",
          color: "white",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        Hello, Remotion!
      </h1>
    </AbsoluteFill>
  );
};
