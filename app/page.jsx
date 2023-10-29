// sections
import LanguagesSection from "@/sections/languages.section";
import FrameworksSection from "@/sections/frameworks.section";
import DatabasesSection from "@/sections/databases.section";
import ToolsSection from "@/sections/tools.section";
import NavbarSection from "@/sections/navbar.section";
import FooterSection from "@/sections/footer.section";

// components
import AboutMeComponent from "@/components/aboutme.component";
import ContactUsComponent from "@/sections/contactus.section";

// data
import languages from "@/data/languages.data";
import frameworks from "@/data/frameworks.data";
import databases from "@/data/databases.data";
import tools from "@/data/tools.data";

export default function Home() {
  return (
    <main>
      <NavbarSection />
      <AboutMeComponent />
      <LanguagesSection languages={languages} />
      <FrameworksSection frameworks={frameworks} />
      <DatabasesSection databases={databases} />
      <ToolsSection tools={tools} />
      <ContactUsComponent />
      <FooterSection />
    </main>
  );
}
