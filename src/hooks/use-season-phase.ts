import { useState } from "react";
import { getSeasonPhase, type SeasonPhase } from "@/config/season";

/** Season phase for this page load (respects the ?season= preview override). */
export function useSeasonPhase(): SeasonPhase {
  const [phase] = useState(getSeasonPhase);
  return phase;
}
