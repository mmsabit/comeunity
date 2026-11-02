import { EventItem } from "@/type/type";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import JoinBtn from "./JoinBtn";

const EventDetailesPage = async ({
  params,
}: {
  params: Promise<{ eventid: string }>;
}) => {
  const { eventid } = await params;
  const res = await fetch(`http://localhost:3200/events/${eventid}`);
  const event: EventItem = await res.json();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin  py-15">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-surface-container-high aspect-video sm:aspect-21/9 max-h-115">
            <Image
              className="w-full h-full object-cover"
              src={event.thumbnailUrl}
              alt={event.eventTitle}
              fill
            />
            <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2 z-10" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white z-10">
              <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-bold tracking-tight text-white max-w-4xl leading-tight drop-shadow-sm">
                {event.eventTitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Main Content Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (~68%) */}
            <div className="lg:col-span-8 flex flex-col gap-8 min-w-0">
              {/* About This Initiative */}
              <article className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between  mb-2 bg-white -mx-6 sm:-mx-8 px-6 sm:px-8 -mt-6 sm:-mt-8 pt-6 sm:pt-8 rounded-t-xl">
                  <div>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider">
                      Project Narrative
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      About This Initiative
                    </h2>
                  </div>
                </div>
                <div className="prose max-w-none text-on-surface font-body-md text-body-md space-y-4">
                  <p>{event.eventDescription}</p>
                </div>
              </article>
            </div>

            {/* RIGHT COLUMN — Sticky RSVP Sidebar (~32%) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md">
                <ul>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <FaClock className="text-primary" size={18} /> Finished{" "}
                  </li>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <FaRegCalendarAlt className="text-primary" size={18} />{" "}
                    {event.eventDate}
                  </li>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <FaUserGroup className="text-primary" size={18} /> 0 Person
                    Joinded
                  </li>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <FaLocationDot className="text-primary" size={18} />{" "}
                    {event.eventLocation}
                  </li>
                </ul>

                <div className="flex items-center gap-2 mb-4 pt-3 bg-surface-container-low/50 p-2.5 rounded-lg">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-caption bg-surface-container-high text-on-surface">
                    {event.organizerImage ? (
                      <Image
                        alt={event.organizerName || "Organizer Image"}
                        className="w-full h-full object-cover rounded-full"
                        height={28}
                        src={event.organizerImage}
                        width={28}
                        unoptimized
                      />
                    ) : (
                      <CiUser className="text-[20px]" />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-caption text-caption text-on-surface-variant">
                      Event Hosted by
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
                      {event.organizerName}
                    </span>
                  </div>
                </div>

                <JoinBtn
                  event={event}
                  user={
                    session?.user
                      ? { id: session.user.id, name: session.user.name }
                      : null
                  }
                />

                {session?.user?.id === event.organizerId && (
                  <div className="flex justify-center items-center mt-5 w-auto gap-2">
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
