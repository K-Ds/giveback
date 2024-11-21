import { model, Mongoose, Schema } from "mongoose";
import { Charity } from "./types.js";
import { CHARITY_CAUSES } from "../../constants/charity.js";

const charitySchema = new Schema<Charity>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cause: {
        type: String,
        enum: CHARITY_CAUSES,
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
    }
});

const CharityModel = model<Charity>('Charity', charitySchema);

export default CharityModel;