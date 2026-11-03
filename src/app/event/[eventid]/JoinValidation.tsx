import React from "react";
import JoinBtn from "./JoinBtn";
import { EventItem, EventRegistration } from "@/type/type";
import JoinCancle from "./JoinCancle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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
      const jwtTokens = await auth.api.getToken({
    headers: await headers(),
  });
  const token = jwtTokens?.token;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/event-joins/${user.id}/event/${event._id}`,{headers: {
        authorization: `Bearer ${token}`,
      }}
      ,
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
