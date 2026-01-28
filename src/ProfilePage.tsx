import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const ACCENT = "#6C63FF";
const BG = "#0f0f1a";
const CARD_BG = "#1a1a2e";
const TEXT = "#e0e0e0";
const TEXT_SECONDARY = "#a0a0b0";

const skills = ["React", "TypeScript", "Node.js", "Python", "UI/UX", "Remotion"];

const experiences = [
  { year: "2024 - Present", role: "Senior Frontend Engineer", company: "Tech Corp" },
  { year: "2022 - 2024", role: "Full-Stack Developer", company: "Startup Inc" },
  { year: "2020 - 2022", role: "Junior Developer", company: "Digital Agency" },
];

const socials = [
  { label: "GitHub", url: "github.com/yourname" },
  { label: "LinkedIn", url: "linkedin.com/in/yourname" },
  { label: "Email", url: "hello@example.com" },
];

export const ProfilePage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const avatarScale = spring({ frame, fps, from: 0, to: 1, durationInFrames: 25 });
  const nameOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const nameY = interpolate(frame, [15, 35], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bioOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const skillStart = 40;
  const expStart = 70;
  const socialStart = 110;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: TEXT,
        display: "flex",
        flexDirection: "row",
        padding: 80,
        gap: 60,
      }}
    >
      {/* Left Column - Avatar & Basic Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 480,
          flexShrink: 0,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${ACCENT}, #ff6584)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `scale(${avatarScale})`,
            boxShadow: `0 0 60px ${ACCENT}44`,
          }}
        >
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              backgroundColor: CARD_BG,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
            }}
          >
            👤
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            marginTop: 40,
            textAlign: "center",
            opacity: nameOpacity,
            transform: `translateY(${nameY}px)`,
          }}
        >
          <h1
            style={{
              fontSize: 52,
              fontWeight: 700,
              margin: 0,
              color: "#ffffff",
            }}
          >
            Alex Chen
          </h1>
          <p
            style={{
              fontSize: 26,
              color: ACCENT,
              margin: "12px 0 0",
              fontWeight: 500,
            }}
          >
            Full-Stack Developer
          </p>
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.6,
            color: TEXT_SECONDARY,
            textAlign: "center",
            marginTop: 30,
            opacity: bioOpacity,
            maxWidth: 400,
          }}
        >
          Passionate about building elegant, performant web applications.
          Turning ideas into reality with clean code and creative design.
        </p>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 40,
          }}
        >
          {socials.map((s, i) => {
            const o = interpolate(
              frame,
              [socialStart + i * 8, socialStart + i * 8 + 15],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            return (
              <div
                key={s.label}
                style={{
                  padding: "12px 24px",
                  borderRadius: 30,
                  backgroundColor: `${ACCENT}22`,
                  border: `1px solid ${ACCENT}44`,
                  color: ACCENT,
                  fontSize: 18,
                  opacity: o,
                }}
              >
                {s.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column - Skills & Experience */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 50 }}>
        {/* Skills Section */}
        <div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 24,
              opacity: interpolate(frame, [skillStart, skillStart + 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Skills
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {skills.map((skill, i) => {
              const delay = skillStart + 10 + i * 6;
              const o = interpolate(frame, [delay, delay + 12], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const s = interpolate(frame, [delay, delay + 12], [0.7, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={skill}
                  style={{
                    padding: "14px 28px",
                    borderRadius: 12,
                    backgroundColor: CARD_BG,
                    border: `1px solid ${ACCENT}33`,
                    fontSize: 22,
                    fontWeight: 500,
                    color: TEXT,
                    opacity: o,
                    transform: `scale(${s})`,
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 24,
              opacity: interpolate(frame, [expStart, expStart + 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {experiences.map((exp, i) => {
              const delay = expStart + 10 + i * 12;
              const o = interpolate(frame, [delay, delay + 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const x = interpolate(frame, [delay, delay + 15], [40, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={exp.year}
                  style={{
                    padding: "24px 30px",
                    borderRadius: 16,
                    backgroundColor: CARD_BG,
                    borderLeft: `4px solid ${ACCENT}`,
                    opacity: o,
                    transform: `translateX(${x}px)`,
                  }}
                >
                  <div style={{ fontSize: 15, color: ACCENT, marginBottom: 6, fontWeight: 500 }}>
                    {exp.year}
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: "#ffffff" }}>
                    {exp.role}
                  </div>
                  <div style={{ fontSize: 18, color: TEXT_SECONDARY, marginTop: 4 }}>
                    {exp.company}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
