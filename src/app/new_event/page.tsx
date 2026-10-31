'use client';

import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdOutlineTextFields, MdOutlineLocalOffer, MdOutlineCalendarToday, MdOutlineLocationOn, MdOutlineImage } from 'react-icons/md';

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
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-slate-50 text-slate-800">

      {/* Main Content */}
      <div className="grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Create a New Event
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Mobilize your neighborhood, organize volunteers, and publish civic initiatives.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
            <form className="space-y-6" id="create-event-form">

              {/* Event Title */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  htmlFor="eventTitle"
                >
                  Event Title <span className="text-rose-500">*</span>
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MdOutlineTextFields className="w-4 h-4" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
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
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MdOutlineLocalOffer className="w-4 h-4" />
                    </div>
                    <select
                      className="block w-full pl-10 pr-8 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                      id="eventType"
                      name="eventType"
                      required
                    >
                      <option value="Food Drive">Food Drive</option>
                      <option value="Blanket Relief">Blanket Relief</option>
                      <option value="Tree Plantation">Tree Plantation</option>
                      <option value="Neighborhood Cleanup">Neighborhood Cleanup</option>
                      <option value="Winter Clothes">Winter Clothes</option>
                      <option value="Youth Mentoring">Youth Mentoring</option>
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
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MdOutlineCalendarToday className="w-4 h-4" />
                    </div>
                    <input
                      ref={dateRef}
                      className="block w-full pl-10 pr-3 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 cursor-pointer"
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
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MdOutlineLocationOn className="w-4 h-4" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
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
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MdOutlineImage className="w-4 h-4" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
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
                  className="block w-full p-3.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 leading-relaxed"
                  id="eventDescription"
                  name="eventDescription"
                  placeholder="Provide event details, volunteer expectations, item drop-off points, and schedule..."
                  required
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="btn btn-primary w-full"
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

    </div>
  );
};

export default NewEvent;
