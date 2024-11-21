import mongoose from "mongoose";

export type EventTypes = 'Fundraiser' | 'Volunteer' | 'Awareness';

export interface Event {
    id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    type: EventTypes;
    date: string;
    location: {
        country: string;
        city: string;
        coordinates: {
            latitude: number;
            longitude: number;
        }
    };
    charityId: mongoose.Types.ObjectId;
}