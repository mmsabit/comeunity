'use client';

import { EventItem } from "@/type/type";
import { MdArrowForward } from "react-icons/md";
import { toast, Bounce } from "react-toastify";

const JoinBtn = ({
  event,
  user,
}: {
  event: EventItem;
  user: { id: string; name: string } | null;
}) => {
  const data = {
    joinerId: user?.id,
    joinerName: user?.name,
    ...event,
  };

  const handleJoinEvent = async () => {
    const res = await fetch(`http://localhost:3200/event-joins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
    if (res.ok) {
      toast.success("You have successfully joined the event!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <button
        onClick={handleJoinEvent}
        className="w-full btn btn-primary text-white py-6 text-sm"
        id="rsvp-submit-btn"
        type="submit"
      >
        <span>Join this Event</span>
        <MdArrowForward className="text-[20px]" />
      </button>
    </>
  );
};

export default JoinBtn;
