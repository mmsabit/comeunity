import React from "react";
import Image from "next/image";
import { MdEvent, MdLocationOn } from "react-icons/md";
import { EventItem } from "@/type/type";
import { CiUser } from "react-icons/ci";

const EventCard = ({ item }: { item: EventItem }) => {
  return (
    <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden bg-surface-container">
        <Image
          alt={item.imageAlt || item.title || "Event Image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          height={192}
          src={item.image}
          width={400}
          unoptimized
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-sm bg-primary-container text-white`}
          >
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 font-label-sm text-label-sm font-semibold mb-2 text-primary-container">
          <MdEvent className="text-[16px]" />
          <span>{item.date}</span>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary-container transition-colors line-clamp-2 mb-2 font-bold">
          {item.title}
        </h3>

        <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-4">
          <MdLocationOn className="text-[18px] text-outline shrink-0" />
          <span className="truncate">{item.location}</span>
        </div>

        <div className="flex items-center gap-2 mb-4 pt-3 bg-surface-container-low/50 p-2.5 rounded-lg">
          <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-caption bg-surface-container-high text-on-surface">
            <CiUser size={20} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-caption text-caption text-on-surface-variant">
              Event Hosted by
            </span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
              {item.organizerName}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-2">
          <button
            className="w-full py-2.5 px-4 rounded-lg bg-primary-container hover:bg-primary text-white font-label-md text-label-md font-semibold transition-all text-center cursor-pointer shadow-sm active:scale-[0.99]"
            type="button"
          >
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
