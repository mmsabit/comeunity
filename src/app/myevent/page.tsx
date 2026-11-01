import EventList from '@/component/EventList';
import { auth } from '@/lib/auth';
import { EventItem } from '@/type/type';
import { headers } from 'next/headers';

const session = await auth.api.getSession({
    headers: await headers()
})

const MyEvent = async () => {
  const userId = session?.user?.id;

  const res = await fetch(`http://localhost:3200/myevents/${userId}`);
  const events: EventItem[] = await res.json();

  return (
    <div className="flex flex-col w-full">
        
      
      <main className="w-full max-w-7xl mx-auto px-margin py-space-md">
        <div className='py-10'>
            <h2 className='text-4xl text-center font-semibold'>My Event</h2>
        </div>
        <div className="grid grid-cols-1 gap-space-md">
          {events.map((event) => (
            <EventList key={event._id} event={event} />
          ))}
        </div>


          

          
       
        
      </main>

    </div>
  );
};

export default MyEvent;
