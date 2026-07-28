"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Space_Grotesk } from "next/font/google";
import { ChevronDown } from "lucide-react";
import PipelineDiagram from "./PipelineDiagram";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="max-w-[920px] mx-auto px-8 pt-[88px] pb-[72px]">
      <style>{`
        @keyframes scroll-hint {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(4px); opacity: 1; }
        }
        .animate-scroll-hint {
          animation: scroll-hint 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-hint {
            animation: none;
            opacity: 0.4;
          }
        }
      `}</style>

      <div className="grid grid-cols-[1.1fr_0.9fr] max-md:grid-cols-1 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-accent font-mono text-[12px] uppercase tracking-wider">
            <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
            <span>{t("hero.eyebrow")}</span>
          </div>

          <h1
            className={`${spaceGrotesk.className} font-bold text-[44px] max-md:text-[34px] leading-[1.12] tracking-tight`}
            dangerouslySetInnerHTML={{ __html: t("hero.title") }}
          />

          <p className="text-[17px] text-muted max-w-[46ch]">
            {t("hero.lede")}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#oss"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all bg-accent text-amber-950 hover:bg-accent/90"
            >
              {t("hero.ctaWork")}
            </a>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all border border-border text-foreground hover:border-secondary hover:text-secondary"
            >
              {t("hero.ctaLog")}
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-10 opacity-20 dark:opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, var(--amber) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />
          <PipelineDiagram />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex flex-col items-center gap-1 text-faint animate-scroll-hint">
          <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  );
}
