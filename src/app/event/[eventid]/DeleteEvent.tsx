"use client";
import { authClient } from "@/lib/auth-client";
import { EventItem } from "@/type/type";
import { useRouter } from "next/navigation";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast, Bounce } from "react-toastify";

const DeleteEvent = ({ event }: { event: EventItem }) => {
  const router = useRouter();

  

  const handleDelete = async () => {

    const {data} = await authClient.token();
            const token = data?.token;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${event._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
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

      router.push("/event");
    }
  };

  return (
    <>
      <button
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 text-xs font-semibold transition-colors cursor-pointer"
        onClick={() =>
          (
            document.getElementById("delete-modal") as HTMLDialogElement | null
          )?.showModal()
        }
        type="button"
      >
        <RiDeleteBin2Fill className="text-sm" />
        <span>Delete</span>
      </button>

      <dialog id="delete-modal" className="modal backdrop-blur-xs">
        <div className="modal-box bg-white rounded-2xl border border-slate-200/80 p-6 max-w-md shadow-card">
          <h3 className="font-bold text-lg text-slate-900">Delete Event?</h3>
          <p className="py-3 text-sm text-slate-600">
            Deleting <strong className="text-slate-800">{event.eventTitle}</strong> will permanently remove it from the directory.
          </p>
          <div className="modal-action flex items-center justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
              type="button"
              onClick={() =>
                (
                  document.getElementById(
                    "delete-modal"
                  ) as HTMLDialogElement | null
                )?.close()
              }
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition-colors cursor-pointer"
              onClick={handleDelete}
              type="button"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteEvent;
