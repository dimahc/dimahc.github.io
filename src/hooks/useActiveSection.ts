"use client";

import { DEFAULT_SECTION } from "@/lib/constants";
import { useCallback, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSectionState] =
    useState<string>(DEFAULT_SECTION);

  const setActiveSection = useCallback((section: string) => {
    setActiveSectionState(section);
  }, []);

  return { activeSection, setActiveSection };
}
