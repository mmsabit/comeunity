'use client';

import { EventItem } from "@/type/type";
import { useRouter } from "next/navigation";
import { MdArrowForward } from "react-icons/md";
import { toast, Bounce } from "react-toastify";

const JoinBtn = ({
  event,
  user,
}: {
  event: EventItem;
  user: { id: string; name: string } | null;
}) => {
  const router = useRouter();
  const joinerdata = {
    joinerId: user?.id,
    joinerName: user?.name,
  };

  const eventdata = {
    ...event,
  };

  const handleJoinEvent = async () => {
    if (!user) {
      toast.info("Please sign in to join this event", {
        position: "bottom-right",
        theme: "light",
        transition: Bounce,
      });
      router.push("/signin");
      return;
    }

    const res = await fetch(`http://localhost:3200/event-joins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joinerdata,
        eventdata,
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
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleJoinEvent}
      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-linear-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
      id="rsvp-submit-btn"
      type="button"
    >
      <span>Join this Event</span>
      <MdArrowForward className="text-lg" />
    </button>
  );
};

export default JoinBtn;
