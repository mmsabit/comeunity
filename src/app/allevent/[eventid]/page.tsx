import React from 'react';

const EventDetailesPage = async({
  params,
}: {
  params: Promise<{ eventid: string }>
}) => {

const { eventid } = await params;
const res = await fetch(`http://localhost:5000/events/${eventid}`);
const event = await res.json();

    return (
        <div>
            {event.title}
        </div>
    );
};

export default EventDetailesPage;