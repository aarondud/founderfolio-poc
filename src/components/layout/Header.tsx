import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FOUNDER_FOLIO_LOGO } from "@/lib/constants";
import { SECTION_IDS } from "@/lib/sections";

interface NavLink {
  text: string;
  href: string;
}

const desktopNavLinks: NavLink[] = [
  { text: "Portfolio", href: `#${SECTION_IDS.PORTFOLIO}` },
  { text: "Market Simulator", href: `#${SECTION_IDS.SIMULATOR}` },
  { text: "Market Analysis", href: `#${SECTION_IDS.ANALYSIS}` },
  { text: "Reports", href: `#${SECTION_IDS.REPORTS}` },
];

const mobileNavLinks: NavLink[] = [
  { text: "Company", href: `#${SECTION_IDS.COMPANY_OVERVIEW}` },
  { text: "Executives", href: `#${SECTION_IDS.EXECUTIVES}` },
  { text: "Portfolio", href: `#${SECTION_IDS.PORTFOLIO}` },
  { text: "Market Simulator", href: `#${SECTION_IDS.SIMULATOR}` },
  { text: "Market Sentiment", href: `#${SECTION_IDS.MARKET_SENTIMENT}` },
  { text: "Analysis", href: `#${SECTION_IDS.ANALYSIS}` },
  { text: "Distribution", href: `#${SECTION_IDS.RESULTS}` },
  { text: "Reports", href: `#${SECTION_IDS.REPORTS}` },
];

interface HeaderProps {
  demoPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ demoPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (demoPage) {
      e.preventDefault();
      navigate("/");
    } else {
      scrollToTop(e);
    }
  };

  const handleButtonClick = () => {
    if (demoPage) {
      navigate("/");
    } else {
      navigate("/demo");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-background/80 shadow-md" : "bg-transparent",
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href={demoPage ? "/" : "#"}
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <img
              src={FOUNDER_FOLIO_LOGO}
              alt="FounderFolio Logo"
              className="h-12 w-12 rounded-lg"
            />
            <span className="text-3xl font-bold text-primary tracking-wider ml-2 sm:inline">
              FounderFolio
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {!demoPage && (
              <nav className="flex items-center space-x-8">
                {desktopNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-header hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            )}
            <Button
              onClick={handleButtonClick}
              className="bg-primary text-accent text-xl hover:bg-[#003428] px-6 py-6"
            >
              {demoPage ? "Back to Home" : "Invest Now"}
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden transition-all duration-300",
            isScrolled ? "bg-background/80 shadow-md" : "bg-background/95",
            "backdrop-blur-sm",
          )}
        >
          <div className="px-4 py-4 space-y-2">
            {!demoPage &&
              mobileNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-lg font-medium text-header hover:text-primary transition-colors py-2"
                >
                  {link.text}
                </a>
              ))}
            <div className="pt-4">
              <Button
                onClick={handleButtonClick}
                className="w-full bg-primary text-accent text-xl hover:bg-[#003428] py-6"
              >
                {demoPage ? "Back to Home" : "Invest Now"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
