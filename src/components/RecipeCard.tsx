import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";
import type { Recipe } from "../data/recipes";

const difficultyColor = {
  简单: "#6ecf9a",
  中等: "#e8c547",
  较难: "#e85d5d",
};

export const RecipeCard: React.FC<{ recipe: Recipe; index: number }> = ({
  recipe,
  index,
}) => {
  const frame = useCurrentFrame();

  // Header animations
  const headerOpacity = interpolate(frame, [5, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headerY = interpolate(frame, [5, 30], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Divider line animation
  const dividerWidth = interpolate(frame, [20, 50], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Ingredients animation
  const ingredientsOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Steps animation
  const stepsOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tips animation
  const tipsOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Accent bar on left
  const accentHeight = interpolate(frame, [0, 40], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        fontFamily:
          "'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif",
        padding: "70px 90px",
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 50,
          top: "50%",
          transform: "translateY(-50%)",
          width: 3,
          height: `${accentHeight}%`,
          background:
            "linear-gradient(to bottom, transparent, #c9a96e, transparent)",
          maxHeight: 800,
        }}
      />

      {/* Recipe number - large watermark */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 70,
          fontSize: 180,
          fontWeight: 800,
          color: "rgba(201, 169, 110, 0.05)",
          fontFamily: "'Georgia', serif",
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Header section */}
      <div
        style={{
          opacity: headerOpacity,
          transform: `translateY(${headerY}px)`,
          marginBottom: 10,
        }}
      >
        {/* Category & difficulty tags */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 16,
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#c9a96e",
              border: "1px solid rgba(201, 169, 110, 0.3)",
              padding: "3px 12px",
              borderRadius: 3,
              letterSpacing: 2,
            }}
          >
            {recipe.category}
          </div>
          <div
            style={{
              fontSize: 13,
              color: difficultyColor[recipe.difficulty],
              letterSpacing: 2,
            }}
          >
            {recipe.difficulty}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(232, 213, 183, 0.3)",
              fontFamily: "'Georgia', serif",
            }}
          >
            {recipe.time} &middot; {recipe.servings} servings
          </div>
        </div>

        {/* Recipe name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#e8d5b7",
            letterSpacing: 12,
          }}
        >
          {recipe.name}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(201, 169, 110, 0.4)",
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            marginTop: 4,
          }}
        >
          {recipe.nameEn}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: `${dividerWidth}%`,
          height: 1,
          backgroundColor: "rgba(201, 169, 110, 0.2)",
          margin: "20px 0",
        }}
      />

      {/* Content area - two columns */}
      <div
        style={{
          display: "flex",
          gap: 60,
          flex: 1,
        }}
      >
        {/* Left column - Ingredients */}
        <div
          style={{
            opacity: ingredientsOpacity,
            width: 380,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#c9a96e",
              letterSpacing: 4,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 18,
                height: 1,
                backgroundColor: "#c9a96e",
              }}
            />
            食材
            <span
              style={{
                fontSize: 12,
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                color: "rgba(201, 169, 110, 0.4)",
              }}
            >
              Ingredients
            </span>
          </div>

          {recipe.ingredients.map((ing, i) => {
            const ingDelay = 35 + i * 5;
            const ingOpacity = interpolate(
              frame,
              [ingDelay, ingDelay + 15],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            return (
              <div
                key={i}
                style={{
                  opacity: ingOpacity,
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom:
                    "1px solid rgba(201, 169, 110, 0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    color: "rgba(232, 213, 183, 0.8)",
                  }}
                >
                  {ing.name}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: "rgba(201, 169, 110, 0.4)",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {ing.amount}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right column - Steps */}
        <div style={{ opacity: stepsOpacity, flex: 1 }}>
          <div
            style={{
              fontSize: 20,
              color: "#c9a96e",
              letterSpacing: 4,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 18,
                height: 1,
                backgroundColor: "#c9a96e",
              }}
            />
            步骤
            <span
              style={{
                fontSize: 12,
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                color: "rgba(201, 169, 110, 0.4)",
              }}
            >
              Steps
            </span>
          </div>

          {recipe.steps.map((step, i) => {
            const stepDelay = 45 + i * 8;
            const stepOpacity = interpolate(
              frame,
              [stepDelay, stepDelay + 18],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );
            const stepX = interpolate(
              frame,
              [stepDelay, stepDelay + 18],
              [20, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }
            );
            return (
              <div
                key={i}
                style={{
                  opacity: stepOpacity,
                  transform: `translateX(${stepX}px)`,
                  display: "flex",
                  gap: 16,
                  marginBottom: 14,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(201, 169, 110, 0.3)",
                    fontFamily: "'Georgia', serif",
                    paddingTop: 5,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    color: "rgba(232, 213, 183, 0.75)",
                    lineHeight: 1.7,
                  }}
                >
                  {step}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips section */}
      <div
        style={{
          opacity: tipsOpacity,
          position: "absolute",
          bottom: 55,
          left: 90,
          right: 90,
          padding: "14px 24px",
          backgroundColor: "rgba(201, 169, 110, 0.06)",
          borderLeft: "3px solid rgba(201, 169, 110, 0.3)",
          borderRadius: "0 4px 4px 0",
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: "#c9a96e",
            letterSpacing: 2,
            marginRight: 12,
          }}
        >
          小贴士
        </span>
        <span
          style={{
            fontSize: 15,
            color: "rgba(232, 213, 183, 0.5)",
          }}
        >
          {recipe.tips}
        </span>
      </div>
    </AbsoluteFill>
  );
};
