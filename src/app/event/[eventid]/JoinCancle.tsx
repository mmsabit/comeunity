"use client";
import { authClient } from "@/lib/auth-client";
import { EventRegistration } from "@/type/type";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

const JoinCancle = ({
  joindata,
  isEventPassed,
}: {
  joindata: EventRegistration;
  isEventPassed: boolean;
}) => {
  const router = useRouter();

  const handleCancleJoin = async () => {
    const { data } = await authClient.token();
    const token = data?.token;
    const res = await fetch(
      `http://localhost:3200/event-joins/${joindata._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );

    if (res.ok) {
      (
        document.getElementById("JoinCancleModal") as HTMLDialogElement | null
      )?.close();
      toast.success(
        `${joindata.eventdata.eventTitle} registration cancelled!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
      router.refresh();
    }
  };

  return (
    <>
      <button
        className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors ${
          isEventPassed
            ? "border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"
            : "border border-brand-600 text-brand-600 hover:bg-brand-50 cursor-pointer"
        }`}
        id="rsvp-submit-btn"
        type="button"
        disabled={isEventPassed}
        onClick={() =>
          !isEventPassed &&
          (
            document.getElementById(
              "JoinCancleModal",
            ) as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <span>
          {isEventPassed
            ? "Event Ended • Attended"
            : "Joined • Click to Cancel"}
        </span>
      </button>

      <dialog id="JoinCancleModal" className="modal backdrop-blur-xs">
        <div className="modal-box bg-white rounded-2xl border border-slate-200/80 p-6 max-w-md shadow-card">
          <h3 className="font-bold text-lg text-slate-900">
            Cancel Registration?
          </h3>
          <p className="py-3 text-sm text-slate-600">
            Are you sure you want to cancel your attendance for{" "}
            <strong className="text-slate-800">
              {joindata.eventdata.eventTitle}
            </strong>
            ?
          </p>
          <div className="modal-action flex items-center justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
              type="button"
              onClick={() =>
                (
                  document.getElementById(
                    "JoinCancleModal",
                  ) as HTMLDialogElement | null
                )?.close()
              }
            >
              Keep My Spot
            </button>
            <button
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition-colors cursor-pointer"
              onClick={handleCancleJoin}
              type="button"
            >
              Yes, Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default JoinCancle;
