"use client";

import React, { useRef, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { EventItem } from "@/type/type";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const EditEvent = ({ event }: { event: EventItem }) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState<Omit<EventItem, "_id">>({
    eventTitle: event.eventTitle,
    eventType: event.eventType,
    eventDate: event.eventDate,
    eventLocation: event.eventLocation,
    thumbnailUrl: event.thumbnailUrl,
    eventDescription: event.eventDescription,
    organizerName: event.organizerName,
    organizerEmail: event.organizerEmail,
    organizerImage: event.organizerImage,
    organizerId: event.organizerId,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const {data} = await authClient.token();
        const token = data?.token;

    try {
      const res = await fetch(`http://localhost:3200/events/${event._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${token}`, },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        // Close the modal after a short delay
        setTimeout(() => {
          (document.getElementById("Edit-modal") as HTMLDialogElement)?.close();
          setSuccess(false);
        }, 1200);
        router.refresh();
      }
    } catch (err) {
      console.error("Failed to update event:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
        onClick={() =>
          (
            document.getElementById("Edit-modal") as HTMLDialogElement
          )?.showModal()
        }
        type="button"
      >
        <RiEdit2Fill className="text-sm" />
        <span>Edit</span>
      </button>

      <dialog ref={dialogRef} id="Edit-modal" className="modal backdrop-blur-xs">
        <div className="modal-box bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 max-w-2xl shadow-card">
          {/* Close (cross) button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-slate-400 hover:text-slate-600">
              <IoClose size={20} />
            </button>
          </form>

          <h3 className="font-bold text-xl text-slate-900 mb-6">Edit Event</h3>

          {/* ── Edit Event Form ── */}
          <form
            className="space-y-5"
            id="edit-event-form"
            onSubmit={handleSubmit}
          >
            {/* Event Title */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                htmlFor="eventTitle"
              >
                Event Title <span className="text-rose-500">*</span>
              </label>
              <input
                className="block w-full px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                id="eventTitle"
                name="eventTitle"
                placeholder="Enter event title..."
                required
                type="text"
                value={formData.eventTitle}
                onChange={handleChange}
              />
            </div>

            {/* Event Type & Event Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Event Type */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="eventType"
                >
                  Event Type <span className="text-rose-500">*</span>
                </label>
                <select
                  className="block w-full px-3 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="food drive">Food Drive</option>
                  <option value="blanket relief">Blanket Relief</option>
                  <option value="tree plantation">Tree Plantation</option>
                  <option value="neighborhood cleanup">
                    Neighborhood Cleanup
                  </option>
                  <option value="winter clothes">Winter Clothes</option>
                  <option value="youth mentoring">Youth Mentoring</option>
                  <option value="blood donation">Blood Donation</option>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* Event Date */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="eventDate"
                >
                  Event Date <span className="text-rose-500">*</span>
                </label>

                <Flatpickr
                  value={formData.eventDate}
                  options={{
                    dateFormat: "F j, Y",
                    minDate: "today",
                    disableMobile: true,
                    position: (picker) => {
                      const dialog = dialogRef.current;
                      if (!dialog) return;

                      const inputBounds = picker.input.getBoundingClientRect();
                      const dialogBounds = dialog.getBoundingClientRect();
                      const calendar = picker.calendarContainer;
                      const calendarHeight = calendar.offsetHeight;
                      const calendarWidth = calendar.offsetWidth;
                      const showAbove =
                        window.innerHeight - inputBounds.bottom <
                          calendarHeight && inputBounds.top > calendarHeight;

                      const top = showAbove
                        ? inputBounds.top - calendarHeight - 2
                        : inputBounds.bottom + 2;
                      const left = Math.min(
                        inputBounds.left,
                        window.innerWidth - calendarWidth,
                      );

                      calendar.style.top = `${top - dialogBounds.top}px`;
                      calendar.style.left = `${left - dialogBounds.left}px`;
                      calendar.classList.toggle("arrowTop", !showAbove);
                      calendar.classList.toggle("arrowBottom", showAbove);
                    },
                  }}
                  onChange={(_, dateStr) =>
                    setFormData((prev) => ({ ...prev, eventDate: dateStr }))
                  }
                  onReady={(_, __, picker) => {
                    if (dialogRef.current) {
                      dialogRef.current.appendChild(picker.calendarContainer);
                    }
                  }}
                  className="block w-full px-3 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                  placeholder="Select a date"
                />
                <p className="mt-1.5 text-[11px] text-slate-400">
                  Dates must be in the future (today or later)
                </p>
              </div>
            </div>

            {/* Location / Venue */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                htmlFor="eventLocation"
              >
                Location / Venue <span className="text-rose-500">*</span>
              </label>
              <input
                className="block w-full px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                id="eventLocation"
                name="eventLocation"
                placeholder="e.g. Riverside Commons Pavilion, Gate 3"
                required
                type="text"
                value={formData.eventLocation}
                onChange={handleChange}
              />
            </div>

            {/* Thumbnail Image URL */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                htmlFor="thumbnailUrl"
              >
                Thumbnail Image URL <span className="text-rose-500">*</span>
              </label>
              <input
                className="block w-full px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                id="thumbnailUrl"
                name="thumbnailUrl"
                placeholder="https://..."
                required
                type="url"
                value={formData.thumbnailUrl}
                onChange={handleChange}
              />
            </div>

            {/* Event Description */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                htmlFor="eventDescription"
              >
                Event Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                className="block w-full p-3.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 leading-relaxed"
                id="eventDescription"
                name="eventDescription"
                placeholder="Provide event details, volunteer expectations, item drop-off points, and schedule..."
                required
                rows={5}
                value={formData.eventDescription}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : success
                    ? "✓ Saved Successfully!"
                    : "Save Changes"}
              </button>
            </div>
          </form>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditEvent;
