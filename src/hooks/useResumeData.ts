"use client";

import {
  getResumeData,
  getResumeLabels,
  type ResumeData,
  type ResumeLabels,
} from "@/lib/resumeData";
import { useTranslation } from "./useTranslation";

export { type ResumeData, type ResumeLabels };

export function useResumeData(): { data: ResumeData; labels: ResumeLabels } {
  const { language } = useTranslation();

  const data = getResumeData(language);
  const labels = getResumeLabels(language);

  return { data, labels };
}
