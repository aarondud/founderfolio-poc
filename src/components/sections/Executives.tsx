import React from "react";
import { TEAM_MEMBERS, CONTENT } from "@/lib/constants";
import { SECTION_IDS } from "@/lib/sections";
import { Tag } from "@/components/ui/tag";
import { ProfileCard } from "../ui/profile-card";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";

export const Executives: React.FC = () => {
  const { sectionRef } = useSectionAnimation();

  return (
    <section
      id={SECTION_IDS.EXECUTIVES}
      ref={sectionRef}
      className="container-section slide-up"
    >
      <Tag icon={Users} text="Executives" />
      <Card className="bg-white bg-header pt-8 pb-8">
        <CardHeader>
          <h2 className="section-title text-white">
            {CONTENT.executives.header}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-6 text-white max-w-6xl mx-auto">
            {CONTENT.executives.sub}
          </p>
          <div className="bg-header">
            {/* Alex Chen row: only on desktop is it centered in 3 columns, on mobile it's just the first card */}
            <div className="pt-6 px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                {/* Empty left column for desktop, hidden on mobile */}
                <div className="hidden md:block" />
                {/* Alex Chen's card */}
                {TEAM_MEMBERS.filter((member) => member.name === "Alex Chen").map(
                  (member, index) => (
                    <div
                      key={`${member.name}-${index}`}
                      className="flex justify-center md:justify-start"
                    >
                      <ProfileCard
                        name={member.name}
                        title={member.title}
                        quote={member.quote}
                        useIcon={true}
                        imagePosition="left"
                        className="h-full md:text-base text-sm bg-gradient-to-r from-green-100 via-yellow-100 to-green-50"
                      />
                    </div>
                  )
                )}
                {/* Empty right column for desktop, hidden on mobile */}
                <div className="hidden md:block" />
              </div>
            </div>
            {/* Other team members, excluding Alex Chen */}
            <div className="pt-6 px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                {TEAM_MEMBERS.filter((member) => member.name !== "Alex Chen").map(
                  (member, index) => (
                    <div
                      key={`${member.name}-${index}`}
                      className="flex justify-center md:justify-start"
                    >
                      <ProfileCard
                        name={member.name}
                        title={member.title}
                        quote={member.quote}
                        useIcon={true}
                        imagePosition="left"
                        className="h-full md:text-base text-sm"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
