import { navItems } from "@/data";
import dynamic from 'next/dynamic';

// Dynamically import components that use browser APIs
const DynamicFloatingNav = dynamic(
  () => import('@/components/ui/floating-nav').then((mod) => mod.FloatingNav),
  { ssr: false }
);

const DynamicHero = dynamic(
  () => import('@/components/hero').then((mod) => mod.Hero),
  { ssr: true }
);

const DynamicGrid = dynamic(
  () => import('@/components/grid').then((mod) => mod.Grid),
  { ssr: false }
);

const DynamicRecentProjects = dynamic(
  () => import('@/components/recent-projects').then((mod) => mod.RecentProjects),
  { ssr: true }
);

const DynamicExperience = dynamic(
  () => import('@/components/experience').then((mod) => mod.Experience),
  { ssr: true }
);

const DynamicApproach = dynamic(
  () => import('@/components/approach').then((mod) => mod.Approach),
  { ssr: true }
);

const DynamicFooter = dynamic(
  () => import('@/components/footer').then((mod) => mod.Footer),
  { ssr: true }
);

const DynamicMLShowcase = dynamic(
  () => import('@/components/ml-showcase').then((mod) => mod.MLShowcase),
  { ssr: true }
);

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <DynamicFloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <DynamicHero />
        <DynamicGrid />
        <DynamicRecentProjects />
        <DynamicMLShowcase />
        <DynamicExperience />
        <DynamicApproach />
        <DynamicFooter />
      </div>
    </main>
  );
};

export default MainPage;
