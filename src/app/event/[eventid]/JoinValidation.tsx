import React from "react";
import JoinBtn from "./JoinBtn";
import { EventItem, EventRegistration } from "@/type/type";
import JoinCancle from "./JoinCancle";

const JoinValidation = async ({
  event,
  user,
  isEventPassed,
}: {
  event: EventItem;
  user: { id: string; name: string } | null;
  isEventPassed: boolean;
}) => {

  let joinRecord: EventRegistration | null = null;
  if (user) {
    const res = await fetch(
      `http://localhost:3200/event-joins/${user.id}/event/${event._id}`,
    );
    if (!res.ok) {
      throw new Error(`Failed to check event registration: ${res.status}`);
    }
    joinRecord = await res.json();
  }
  return (
    <>
      {joinRecord ? (
        <JoinCancle joindata={joinRecord} isEventPassed={isEventPassed} />
      ) : (
        <JoinBtn event={event} user={user} isEventPassed={isEventPassed} />
      )}
      
    </>
  );
};

export default JoinValidation;
