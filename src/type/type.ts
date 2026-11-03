export interface EventItem {
  _id: string;
  eventTitle: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  thumbnailUrl: string;
  eventDescription: string;
  organizerName: string;
  organizerEmail: string;
  organizerImage: string;
  organizerId: string;
}

export interface JoinerData {
  joinerId: string;
  joinerName: string;
}


export interface EventRegistration {
  _id: string;
  joinerdata: JoinerData;
  eventdata: EventItem;
}

export interface GalleryType{
  _id: string;
  imagename:string;
  event_name:string;
  location:string;
}