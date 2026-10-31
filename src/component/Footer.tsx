
import { MdGroups, MdForum, MdCampaign, MdTerminal } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.02)] mt-space-xl">
        <div className="max-w-7xl mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg pb-space-lg">
            <div className="lg:col-span-2 pr-0 lg:pr-space-lg">
              <div className="flex items-center gap-space-xs mb-space-sm">
                <div className="w-7 h-7 rounded-lg bg-primary-container text-white flex items-center justify-center shadow-sm">
                  <MdGroups className="text-[17px]" />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold ml-1.5">
                  CommUnity
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed mb-space-md">
                Empowering grassroots initiatives, volunteer action, and local community events worldwide.
              </p>
              <div className="flex items-center gap-space-xs">
                <a
                  aria-label="Public Forum"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-white transition-all"
                  href="#"
                >
                  <MdForum className="text-[18px]" />
                </a>
                <a
                  aria-label="Global Announcements"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-white transition-all"
                  href="#"
                >
                  <MdCampaign className="text-[18px]" />
                </a>
                <a
                  aria-label="Community Network"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-white transition-all"
                  href="#"
                >
                  <MdGroups className="text-[18px]" />
                </a>
                <a
                  aria-label="Open Code Repository"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-white transition-all"
                  href="#"
                >
                  <MdTerminal className="text-[18px]" />
                </a>
              </div>
            </div>

            <div>
              <p className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-space-sm">
                Explore
              </p>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary-container transition-colors" data-path="upcoming-events" href="#events-catalogue">
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" data-path="all-events" href="#events-catalogue">
                    All Events
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Civic Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Volunteer Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Grant Program
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-space-sm">
                Organizers
              </p>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary-container transition-colors" data-path="create-event" href="#">
                    Create Event
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" data-path="manage-events" href="#">
                    Event Guidelines
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Verification
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Safety &amp; Code of Conduct
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Organizer Handbook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-space-sm">
                Platform &amp; Support
              </p>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    API &amp; Developers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary-container transition-colors" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-space-md mt-space-md border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-caption text-caption">
            <div>© 2025 CommUnity Platform Inc. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>MongoDB Atlas Sync Active • 99.98% Uptime</span>
            </div>
            <div className="flex items-center gap-space-sm">
              <label className="sr-only" htmlFor="lang-select">
                Language Selector
              </label>
              <select
                className="bg-surface-container-low text-on-surface rounded-lg px-2.5 py-1 text-caption font-caption outline-none border-none cursor-pointer focus:ring-1 focus:ring-primary-container"
                defaultValue="English (US)"
                id="lang-select"
              >
                <option>English (US)</option>
                <option>Español (ES)</option>
                <option>Français (FR)</option>
                <option>Deutsch (DE)</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;