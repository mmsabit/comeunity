import React from "react";

const Features = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fafbff]" data-purpose="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Communities Thrive on CommUnity
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Built with transparency, human warmth, and frictionless tooling to empower organizers and protect local volunteer energies.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div
            className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            data-purpose="feature-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-brand-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Grassroots Event Builder
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Intuitive step-by-step tools to launch cleanups, food drives, and charity runs with RSVP quotas, custom waiver forms, and role-based tasks.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            data-purpose="feature-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100 flex items-center justify-center text-pink-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Live RSVP &amp; Roster Sync
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Real-time participant verification, contactless check-in QR codes, waitlist automation, and instant emergency broadcasts for site organizers.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            data-purpose="feature-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50/80 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Cause Categories &amp; Tags
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Precise multi-tag taxonomies covering Environmental Renewal, Food Security, Youth Mentorship, Senior Companion Care, and Emergency Relief.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div
            className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            data-purpose="feature-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-center text-purple-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Badges &amp; Service Hours
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verified volunteer hour tracking with exportable certificates for school credit, employer corporate giving programs, and verified civic milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
