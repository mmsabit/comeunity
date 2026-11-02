'use client';

import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { IoMdAddCircleOutline } from 'react-icons/io';
import {
  MdOutlineTextFields,
  MdOutlineLocalOffer,
  MdOutlineCalendarToday,
  MdOutlineLocationOn,
  MdOutlineImage,
} from 'react-icons/md';
import { authClient } from '@/lib/auth-client';
import { toast, Bounce } from 'react-toastify';

const NewEvent = () => {
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      flatpickr(dateRef.current, {
        dateFormat: 'F j, Y',       // e.g. October 31, 2026
        minDate: 'today',            // today and future only
        disableMobile: true,         // always show flatpickr, not native picker
        allowInput: false,
      });
    }
  }, []);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Capture the form element before any `await` — React nullifies e.currentTarget after async suspension
    const form = e.currentTarget;
    const formData = new FormData(form);
    const eventData = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Validate that the date field is filled (flatpickr readOnly inputs bypass HTML required)
    const requiredFields: { key: string; label: string }[] = [
      { key: 'eventTitle', label: 'Event Title' },
      { key: 'eventDate', label: 'Event Date' },
      { key: 'eventLocation', label: 'Location / Venue' },
      { key: 'thumbnailUrl', label: 'Thumbnail Image URL' },
      { key: 'eventDescription', label: 'Event Description' },
    ];

    for (const field of requiredFields) {
      if (!eventData[field.key]?.trim()) {
        toast.error(`${field.label} is required.`, {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          transition: Bounce,
        });
        return;
      }
    }

    const res = await fetch('http://localhost:3200/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (res.ok) {
      toast.success('Your event was successfully created!', {
        position: 'bottom-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
      });
      form.reset();
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Organizer Launchpad</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Create a New Event
          </h1>
          <p className="mt-2.5 text-base text-slate-600 max-w-md mx-auto">
            Mobilize your neighborhood, organize volunteers, and publish civic initiatives.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-card p-7 sm:p-10">
          <form className="space-y-6" id="create-event-form" onSubmit={handleSubmit}>
            {/* Event Title */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                htmlFor="eventTitle"
              >
                Event Title <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MdOutlineTextFields className="w-5 h-5" />
                </div>
                <input
                  className="block w-full pl-10 pr-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                  id="eventTitle"
                  name="eventTitle"
                  placeholder="Enter event title..."
                  required
                  type="text"
                />
              </div>
            </div>

            {/* Two-Column Grid: Event Type & Event Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Event Type */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="eventType"
                >
                  Event Type <span className="text-rose-500">*</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MdOutlineLocalOffer className="w-5 h-5" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-8 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                    id="eventType"
                    name="eventType"
                    required
                  >
                    <option value="food drive">Food Drive</option>
                    <option value="blanket relief">Blanket Relief</option>
                    <option value="tree plantation">Tree Plantation</option>
                    <option value="neighborhood cleanup">Neighborhood Cleanup</option>
                    <option value="winter clothes">Winter Clothes</option>
                    <option value="youth mentoring">Youth Mentoring</option>
                    <option value="blood donation">Blood Donation</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="eventDate"
                >
                  Event Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MdOutlineCalendarToday className="w-5 h-5" />
                  </div>
                  <input
                    ref={dateRef}
                    className="block w-full pl-10 pr-3 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 cursor-pointer transition-all"
                    id="eventDate"
                    name="eventDate"
                    placeholder="October 31, 2026"
                    required
                    readOnly
                    type="text"
                  />
                </div>
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
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MdOutlineLocationOn className="w-5 h-5" />
                </div>
                <input
                  className="block w-full pl-10 pr-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                  id="eventLocation"
                  name="eventLocation"
                  placeholder="e.g. Riverside Commons Pavilion, Gate 3"
                  required
                  type="text"
                />
              </div>
            </div>

            {/* Thumbnail Image URL */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                htmlFor="thumbnailUrl"
              >
                Thumbnail Image URL <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MdOutlineImage className="w-5 h-5" />
                </div>
                <input
                  className="block w-full pl-10 pr-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                  id="thumbnailUrl"
                  name="thumbnailUrl"
                  placeholder="https://..."
                  required
                  type="url"
                />
              </div>
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
                className="block w-full p-4 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 leading-relaxed transition-all"
                id="eventDescription"
                name="eventDescription"
                placeholder="Provide event details, volunteer expectations, item drop-off points, and schedule..."
                required
                rows={5}
              />
            </div>

            <input type="hidden" name="organizerName" value={user?.name ?? ''} />
            <input type="hidden" name="organizerEmail" value={user?.email ?? ''} />
            <input type="hidden" name="organizerImage" value={user?.image ?? ''} />
            <input type="hidden" name="organizerId" value={user?.id ?? ''} />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                type="submit"
              >
                <IoMdAddCircleOutline size={20} />
                <span>Publish Event</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
