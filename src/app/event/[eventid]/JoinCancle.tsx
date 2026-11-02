"use client";
import { EventRegistration } from "@/type/type";
import { useRouter } from 'next/navigation';
import { Bounce, toast } from "react-toastify";

const JoinCancle = ({ joindata }: { joindata: EventRegistration }) => {
    const router = useRouter();
  const handleCancleJoin = async () => {
    const res = await fetch(
      `http://localhost:3200/event-joins/${joindata._id}`,
      {
        method: "DELETE",
      },
    );

    if (res.ok) {
      (
        document.getElementById("JoinCancleModal") as HTMLDialogElement | null
      )?.close();
      toast.success(`${joindata.eventdata.eventTitle} deleted successfully!`, {
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
    <>
      <button
        className="w-full btn btn-primary btn-outline py-6 text-sm"
        id="rsvp-submit-btn"
        type="submit"
        onClick={() =>
          (
            document.getElementById(
              "JoinCancleModal",
            ) as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <span>Joined. Click for Cancel</span>
      </button>
      <dialog id="JoinCancleModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            Are you sure you want to cancel your attendance for the{" "}
            {joindata.eventdata.eventTitle} event?
          </p>
          <div className="modal-action">
            <button
              className="btn btn-ghost bg-[#e7000b] text-white hover:bg-[#fb2c36]"
              onClick={handleCancleJoin}
            >
              Yes, Cancle
            </button>
            <button
              className="btn btn-ghost"
              onClick={() =>
                (
                  document.getElementById(
                    "JoinCancleModal",
                  ) as HTMLDialogElement | null
                )?.close()
              }
            >
              close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default JoinCancle;
