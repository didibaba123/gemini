import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";
import { menuMeta } from "../data/recipes";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Decorative line expand
  const lineWidth = interpolate(frame, [15, 50], [0, 300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Title fade in and slide up
  const titleOpacity = interpolate(frame, [25, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [25, 55], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Subtitle fade in
  const subtitleOpacity = interpolate(frame, [50, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [50, 75], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Description fade in
  const descOpacity = interpolate(frame, [70, 95], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Corner decorations
  const cornerSize = interpolate(frame, [5, 40], [0, 60], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const cornerStyle = (
    top: boolean,
    left: boolean
  ): React.CSSProperties => ({
    position: "absolute",
    [top ? "top" : "bottom"]: 60,
    [left ? "left" : "right"]: 80,
    width: cornerSize,
    height: cornerSize,
    borderTop: top ? "2px solid #c9a96e" : "none",
    borderBottom: top ? "none" : "2px solid #c9a96e",
    borderLeft: left ? "2px solid #c9a96e" : "none",
    borderRight: left ? "none" : "2px solid #c9a96e",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a2e",
        fontFamily:
          "'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif",
      }}
    >
      {/* Corner decorations */}
      <div style={cornerStyle(true, true)} />
      <div style={cornerStyle(true, false)} />
      <div style={cornerStyle(false, true)} />
      <div style={cornerStyle(false, false)} />

      {/* Top decorative line */}
      <div
        style={{
          width: lineWidth,
          height: 1,
          backgroundColor: "#c9a96e",
          marginBottom: 40,
        }}
      />

      {/* Main title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontSize: 120,
          fontWeight: 700,
          color: "#e8d5b7",
          letterSpacing: 20,
          textShadow: "0 0 40px rgba(201, 169, 110, 0.3)",
        }}
      >
        {menuMeta.title}
      </div>

      {/* English subtitle */}
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          fontSize: 28,
          color: "#c9a96e",
          letterSpacing: 8,
          marginTop: 16,
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
        }}
      >
        {menuMeta.subtitle}
      </div>

      {/* Bottom decorative line */}
      <div
        style={{
          width: lineWidth,
          height: 1,
          backgroundColor: "#c9a96e",
          marginTop: 40,
        }}
      />

      {/* Description */}
      <div
        style={{
          opacity: descOpacity,
          fontSize: 24,
          color: "rgba(232, 213, 183, 0.6)",
          marginTop: 50,
          letterSpacing: 12,
        }}
      >
        {menuMeta.description}
      </div>

      {/* Version badge */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 100,
          opacity: descOpacity,
          fontSize: 14,
          color: "rgba(201, 169, 110, 0.4)",
          fontFamily: "'Georgia', serif",
        }}
      >
        {menuMeta.version} &middot; by {menuMeta.author}
      </div>
    </AbsoluteFill>
  );
};
