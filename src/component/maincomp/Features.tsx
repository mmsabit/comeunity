import React from "react";
import {
  MdHandshake,
  MdQrCodeScanner,
  MdCategory,
  MdMilitaryTech,
} from "react-icons/md";

const Features = () => {
  return (
    <section className="w-full py-16 lg:p-25 bg-surface" id="how-it-works">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-xl">
          <div className="max-w-2xl">
            
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Why Communities Thrive on CommUnity
            </h2>
            <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
              Built with transparency, human warmth, and frictionless tooling to
              empower organizers and protect local volunteer energies.
            </p>
          </div>
        </div>

        {/* Feature Bento Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary-container flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MdHandshake className="text-[26px]" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-2 font-bold">
              Grassroots Event Builder
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
              Intuitive step-by-step tools to launch cleanups, food drives, and
              charity runs with RSVP quotas, custom waiver forms, and role-based
              tasks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MdQrCodeScanner className="text-[26px]" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-2 font-bold">
              Live RSVP &amp; Roster Sync
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
              Real-time participant verification, contactless check-in QR codes,
              waitlist automation, and instant emergency broadcasts for site
              organizers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-tertiary-fixed-dim/30 text-tertiary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MdCategory className="text-[26px]" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-2 font-bold">
              Cause Categories &amp; Tags
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
              Precise multi-tag taxonomies covering Environmental Renewal, Food
              Security, Youth Mentorship, Senior Companion Care, and Emergency
              Relief.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary-container flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MdMilitaryTech className="text-[26px]" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-2 font-bold">
              Badges &amp; Service Hours
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
              Verified volunteer hour tracking with exportable certificates for
              school credit, employer corporate giving programs, and verified
              civic milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
