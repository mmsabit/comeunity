import EventList from '@/component/EventList';
import { auth } from '@/lib/auth';
import { EventItem, EventRegistration } from '@/type/type';
import { headers } from 'next/headers';

const session = await auth.api.getSession({
    headers: await headers()
})

const JoinedEvent = async () => {
  const UserId = session?.user?.id;
  const res = await fetch(`http://localhost:3200/event-joins/${UserId}`);
  const joinedEvents = await res.json();

    return (
        <div className="flex flex-col w-full">
                
              {/* Main Events Grid Section */}
              <main className="w-full max-w-7xl mx-auto px-margin py-space-md">
                <div className='py-10'>
                    <h2 className='text-4xl text-center font-semibold'>Joined Event</h2>
                </div>
                <div className="grid grid-cols-1 gap-space-md">
                {joinedEvents.map((event: EventRegistration) => (
                  <EventList event={event.eventdata} key={event.eventdata._id} />
                ))}
                </div>
        
                {/* Organizer Callout Banner */}
                <section className="w-full max-w-7xl mx-auto my-space-xl" />
              </main>
        
            </div>
    );
};

export default JoinedEvent;