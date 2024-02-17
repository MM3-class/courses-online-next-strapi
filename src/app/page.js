import Products from "@/components/Products";
import Hero from "../components/Hero";
import TrustedCompany from "@/components/TrustedCompanies";
import OutImpressiveStats from "@/components/OutImpressiveStats";
import CoursesCategories from "@/components/CoursesCategories";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <Products />
      <Events />
      <TrustedCompany />
    </main>
  );
}
