import { model, Mongoose, Schema } from "mongoose";
import { Event } from "./types.js";


const eventSchema = new Schema<Event>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Fundraiser', 'Volunteer', 'Awareness'],
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    location: {
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        coordinates: {
            latitude: {
                type: Number,
                required: true,
            },
            longitude: {
                type: Number,
                required: true,
            }
        }
    },
    charityId: {
        type: Schema.Types.ObjectId,
        ref: 'Charity',
    }
})

const EventModel = model<Event>('Event', eventSchema);

export default EventModel;