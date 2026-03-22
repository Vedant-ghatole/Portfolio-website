"use client";

import { useRef } from 'react';
import { useScroll } from 'framer-motion';

// Core Components
import { TreeLine } from '@/components/TreeLine';

// Sections
import { Section1Seed } from '@/sections/Section1_Seed';
import { Section2Roots } from '@/sections/Section2_Roots';
import { Section3Sprout } from '@/sections/Section3_Sprout';
import { Section4Plant } from '@/sections/Section4_Plant';
import { Section5GithubBranches } from '@/sections/Section5_GithubBranches';
import { Section6Achievements } from '@/sections/Section6_Achievements';
import { Section7Experience } from '@/sections/Section7_Experience';
import { Section8PresentTree } from '@/sections/Section8_PresentTree';
import { Section9FutureSky } from '@/sections/Section9_FutureSky';
import { Section10Contact } from '@/sections/Section10_Contact';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden bg-[#0f1712]">
      {/* Central animated trunk connecting the journey */}
      <TreeLine scrollYProgress={scrollYProgress} />

      {/* Cinematic Narrative Flow */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Section1Seed />
        <Section2Roots />
        <Section3Sprout />
        <Section4Plant />
        <Section5GithubBranches />
        <Section6Achievements />
        <Section7Experience />
        <Section8PresentTree />
        <Section9FutureSky />
        <Section10Contact />
      </div>
    </main>
  );
}
