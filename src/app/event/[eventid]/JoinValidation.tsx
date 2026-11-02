import React from "react";
import JoinBtn from "./JoinBtn";
import { EventItem, EventRegistration } from "@/type/type";
import JoinCancle from "./JoinCancle";

const JoinValidation = async ({
  event,
  user,
}: {
  event: EventItem;
  user: { id: string; name: string } | null;
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
        <JoinCancle joindata={joinRecord} />
      ) : (
        <JoinBtn event={event} user={user} />
      )}
      
    </>
  );
};

export default JoinValidation;
