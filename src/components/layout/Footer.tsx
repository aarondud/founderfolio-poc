import React from "react";
import { useNavigate } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FOUNDER_FOLIO_LOGO_DARK } from "@/lib";
import { SECTION_IDS } from "@/lib/sections";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-header text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <img
                src={FOUNDER_FOLIO_LOGO_DARK}
                alt="FounderFolio Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold tracking-wider ml-2">
                FounderFolio
              </span>
            </div>
            <p className="text-white/80 mb-4 text-center md:text-left">
              Your premier platform for monitoring and investing in startup
              growth opportunities.
            </p>
            <p className="text-[#E2FB6C] italic text-center md:text-left">
              "Invest in the Future of Startup Intelligence."
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start hidden md:flex">
            <h3 className="footer-heading text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <a
                  href={`#${SECTION_IDS.EXECUTIVES}`}
                  onClick={(e) =>
                    scrollToSection(e, `#${SECTION_IDS.EXECUTIVES}`)
                  }
                  className="footer-link"
                >
                  Executives
                </a>
              </li>
              <li>
                <a
                  href={`#${SECTION_IDS.PORTFOLIO}`}
                  onClick={(e) =>
                    scrollToSection(e, `#${SECTION_IDS.PORTFOLIO}`)
                  }
                  className="footer-link"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href={`#${SECTION_IDS.SIMULATOR}`}
                  onClick={(e) =>
                    scrollToSection(e, `#${SECTION_IDS.SIMULATOR}`)
                  }
                  className="footer-link"
                >
                  Market Simulator
                </a>
              </li>
              <li>
                <a
                  href={`#${SECTION_IDS.ANALYSIS}`}
                  onClick={(e) =>
                    scrollToSection(e, `#${SECTION_IDS.ANALYSIS}`)
                  }
                  className="footer-link"
                >
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-heading text-center md:text-left">
              Contact Us
            </h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#E2FB6C]" />
                <a
                  href="mailto:invest@founderfolio.com"
                  className="footer-link"
                >
                  invest@founderfolio.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#E2FB6C]" />
                <span className="text-white/80">(555) FOUNDER</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#E2FB6C]" />
                <span className="text-white/80">
                  450 Sansome St, San Francisco
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-heading text-center md:text-left">
              Stay Updated
            </h3>
            <p className="text-white/80 mb-4 text-center md:text-left">
              Subscribe to our newsletter for the latest market insights.
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="bg-accent text-header border-none hover:bg-accent/90"
                onClick={() => navigate("/demo")}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2026 FounderFolio. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <button
                onClick={() => navigate("/demo")}
                className="text-white/60 hover:text-[#E2FB6C] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate("/demo")}
                className="text-white/60 hover:text-[#E2FB6C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <a
                href="https://github.com/aarondud/founderfolio-poc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#E2FB6C] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
