import { EventItem } from "@/type/type";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import JoinValidation from "./JoinValidation";

const EventDetailesPage = async ({
  params,
}: {
  params: Promise<{ eventid: string }>;
}) => {
  const { eventid } = await params;
  let event: EventItem | null = null;

  const jwtTokens = await auth.api.getToken({
    headers: await headers(),
  });
  const token = jwtTokens?.token;

  try {
    const res = await fetch(`http://localhost:3200/events/${eventid}`, {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      event = await res.json();
    }
  } catch (err) {
    console.error("Failed to load event details:", err);
  }

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500 font-semibold text-lg">Event not found.</p>
      </div>
    );
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isEventPassed = (() => {
    if (!event.eventDate) return false;
    const cleanDateStr = event.eventDate.split("•")[0].trim();
    const parsedDate = new Date(cleanDateStr);
    if (isNaN(parsedDate.getTime())) return false;
    const endOfDay = new Date(parsedDate);
    endOfDay.setHours(23, 59, 59, 999);
    return endOfDay < new Date();
  })();

  return (
    <div className="flex flex-col w-full bg-surface min-h-[calc(100vh-80px)] pb-24">
      {/* Banner Section */}
      <section className="w-full pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-card border border-slate-200/80 aspect-video sm:aspect-21/9 max-h-115 bg-slate-900">
            <Image
              className="w-full h-full object-cover opacity-90"
              src={
                event.thumbnailUrl ||
                "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80"
              }
              alt={event.eventTitle || "Event banner"}
              fill
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-md capitalize">
                {event.eventType}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white z-10">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight drop-shadow-sm">
                {event.eventTitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Main Content Section */}
      <section className="w-full pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (~68%) */}
            <div className="lg:col-span-8 flex flex-col gap-8 min-w-0">
              {/* About This Initiative */}
              <article className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-subtle">
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
                    Project Narrative
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    About This Initiative
                  </h2>
                </div>
                <div className="text-slate-600 text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {event.eventDescription}
                </div>
              </article>
            </div>

            {/* RIGHT COLUMN — Sticky RSVP Sidebar (~32%) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card">
                <h3 className="text-lg font-bold text-slate-900 mb-5">
                  Event Details
                </h3>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-600 shrink-0">
                      <FaRegCalendarAlt className="text-base" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Date</p>
                      <p className="font-semibold text-slate-800">
                        {event.eventDate}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                      <FaLocationDot className="text-base" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-medium">
                        Location
                      </p>
                      <p className="font-semibold text-slate-800 truncate">
                        {event.eventLocation}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                        isEventPassed
                          ? "bg-slate-100 border-slate-200 text-slate-500"
                          : "bg-emerald-50 border-emerald-100 text-emerald-600"
                      }`}
                    >
                      <FaUserGroup className="text-base" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">
                        Community Status
                      </p>
                      <p
                        className={`font-semibold ${
                          isEventPassed ? "text-slate-500" : "text-emerald-700"
                        }`}
                      >
                        {isEventPassed
                          ? "Event Finished"
                          : "Open for Volunteers"}
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Organizer Info Box */}
                <div className="mb-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  {event.organizerImage ? (
                    <Image
                      alt={event.organizerName || "Organizer Image"}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-200"
                      height={40}
                      src={event.organizerImage}
                      width={40}
                      unoptimized
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 ring-1 ring-slate-200">
                      <CiUser className="text-xl" />
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-slate-400 font-medium">
                      Event Hosted by
                    </span>
                    <span className="text-sm text-slate-900 font-bold truncate">
                      {event.organizerName}
                    </span>
                  </div>
                </div>

                {/* RSVP / Join Button */}
                <div className="w-full">
                  <JoinValidation
                    event={event}
                    isEventPassed={isEventPassed}
                    user={
                      session?.user
                        ? { id: session.user.id, name: session.user.name }
                        : null
                    }
                  />
                </div>

                {/* Organizer Actions (Edit & Delete) */}
                {session?.user?.id === event.organizerId && (
                  <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-slate-100">
                    <EditEvent event={event} />
                    <DeleteEvent event={event} />
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailesPage;
