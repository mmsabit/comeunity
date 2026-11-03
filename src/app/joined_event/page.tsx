import EventList from '@/component/EventList';
import { auth } from '@/lib/auth';
import { EventRegistration } from '@/type/type';
import { headers } from 'next/headers';

const JoinedEvent = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  let joinedEvents: EventRegistration[] = [];

    const jwtTokens = await auth.api.getToken({
    headers: await headers(),
  });
  const token = jwtTokens?.token;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event-joins/${userId}`, {
        cache: 'no-store',
        headers: {
        authorization: `Bearer ${token}`,
      },
      });
      if (res.ok) {
        joinedEvents = await res.json();
      }
    } catch (err) {
      console.error('Failed to load joined events:', err);
    }

  return (
    <div className="w-full pt-10 pb-20 bg-surface min-h-[calc(100vh-80px)]">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Volunteer Schedule</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Joined Events
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
            Review and track all the grassroots community initiatives you have registered to attend.
          </p>
        </div>

        {joinedEvents.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-subtle">
            <p className="text-slate-500 font-medium">You haven&apos;t joined any events yet. Explore upcoming initiatives!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {joinedEvents.map((event: EventRegistration) => (
              <EventList event={event.eventdata} key={event._id || event.eventdata._id} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default JoinedEvent;
