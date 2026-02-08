import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";
import { recipes } from "../data/recipes";

const difficultyColor = {
  简单: "#6ecf9a",
  中等: "#e8c547",
  较难: "#e85d5d",
};

export const TableOfContents: React.FC = () => {
  const frame = useCurrentFrame();

  // Header animation
  const headerOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        fontFamily:
          "'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif",
        padding: 80,
      }}
    >
      {/* Section header */}
      <div
        style={{
          opacity: headerOpacity,
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            width: 4,
            height: 40,
            backgroundColor: "#c9a96e",
          }}
        />
        <div
          style={{
            fontSize: 48,
            color: "#e8d5b7",
            fontWeight: 700,
            letterSpacing: 8,
          }}
        >
          目 录
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(201, 169, 110, 0.5)",
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            marginLeft: 10,
          }}
        >
          Menu
        </div>
      </div>

      {/* Recipe list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {recipes.map((recipe, index) => {
          const itemDelay = 20 + index * 12;
          const itemOpacity = interpolate(
            frame,
            [itemDelay, itemDelay + 20],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const itemX = interpolate(
            frame,
            [itemDelay, itemDelay + 20],
            [40, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }
          );

          return (
            <div
              key={recipe.id}
              style={{
                opacity: itemOpacity,
                transform: `translateX(${itemX}px)`,
                display: "flex",
                alignItems: "center",
                padding: "18px 30px",
                borderBottom: "1px solid rgba(201, 169, 110, 0.1)",
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: 16,
                  color: "rgba(201, 169, 110, 0.3)",
                  fontFamily: "'Georgia', serif",
                  width: 40,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Name */}
              <div
                style={{
                  fontSize: 32,
                  color: "#e8d5b7",
                  fontWeight: 600,
                  letterSpacing: 4,
                  flex: 1,
                }}
              >
                {recipe.name}
              </div>

              {/* English name */}
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(201, 169, 110, 0.4)",
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                {recipe.nameEn}
              </div>

              {/* Category tag */}
              <div
                style={{
                  fontSize: 14,
                  color: "#c9a96e",
                  border: "1px solid rgba(201, 169, 110, 0.3)",
                  padding: "4px 14px",
                  borderRadius: 4,
                  marginRight: 16,
                }}
              >
                {recipe.category}
              </div>

              {/* Difficulty */}
              <div
                style={{
                  fontSize: 14,
                  color: difficultyColor[recipe.difficulty],
                  width: 50,
                  textAlign: "center",
                }}
              >
                {recipe.difficulty}
              </div>

              {/* Time */}
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(232, 213, 183, 0.4)",
                  fontFamily: "'Georgia', serif",
                  width: 70,
                  textAlign: "right",
                }}
              >
                {recipe.time}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom decoration */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          right: 80,
          height: 1,
          backgroundColor: "rgba(201, 169, 110, 0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 14,
          color: "rgba(201, 169, 110, 0.25)",
          fontFamily: "'Georgia', serif",
        }}
      >
        {recipes.length} recipes in total
      </div>
    </AbsoluteFill>
  );
};
