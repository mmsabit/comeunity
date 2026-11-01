"use client";
import { EventItem } from "@/type/type";
import { redirect } from "next/navigation";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast, Bounce } from "react-toastify";

const DeleteEvent = ({ event }: { event: EventItem }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3200/events/${event._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      (
        document.getElementById("delete-modal") as HTMLDialogElement | null
      )?.close();
      toast.success(`${event.eventTitle} deleted successfully!`, {
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

      redirect("/event");
    }
  };
  return (
    <>
      <button
        className="btn bg-[#e7000b] text-white hover:bg-[#fb2c36] w-1/2"
        onClick={() =>
          (
            document.getElementById("delete-modal") as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <RiDeleteBin2Fill /> Delete Event
      </button>
      <dialog id="delete-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            Deleting {event.eventTitle} will permanently remove it from your
            event list.
          </p>
          <div className="modal-action">
            <button
              className="btn btn-ghost bg-[#e7000b] text-white hover:bg-[#fb2c36]"
              onClick={handleDelete}
            >
              Yes, Delete
            </button>
            <button
              className="btn btn-ghost"
              onClick={() =>
                (
                  document.getElementById(
                    "delete-modal",
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

export default DeleteEvent;
