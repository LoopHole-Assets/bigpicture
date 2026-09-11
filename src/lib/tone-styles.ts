/**
 * Tone palette used by procedural placeholders.
 * Keeps a consistent premium look until real images are dropped in.
 */
export type Tone = "ink" | "paper" | "vermilion" | "graphite" | "amber" | "olive";

export const toneStyles: Record<Tone, { bg: string; fg: string; line: string; accent: string }> = {
  ink: {
    bg: "bg-[#16140F]",
    fg: "text-[#F5F2EC]",
    line: "border-[#F5F2EC]/15",
    accent: "text-[#FF4D1C]",
  },
  paper: {
    bg: "bg-[#EAE5DA]",
    fg: "text-[#16140F]",
    line: "border-[#16140F]/15",
    accent: "text-[#FF4D1C]",
  },
  vermilion: {
    bg: "bg-[#FF4D1C]",
    fg: "text-[#16140F]",
    line: "border-[#16140F]/20",
    accent: "text-[#16140F]",
  },
  graphite: {
    bg: "bg-[#3A3733]",
    fg: "text-[#F5F2EC]",
    line: "border-[#F5F2EC]/15",
    accent: "text-[#FF4D1C]",
  },
  amber: {
    bg: "bg-[#E8A33D]",
    fg: "text-[#16140F]",
    line: "border-[#16140F]/20",
    accent: "text-[#16140F]",
  },
  olive: {
    bg: "bg-[#5C6240]",
    fg: "text-[#F5F2EC]",
    line: "border-[#F5F2EC]/15",
    accent: "text-[#FF4D1C]",
  },
};
