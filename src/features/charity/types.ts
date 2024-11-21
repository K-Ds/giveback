import mongoose from "mongoose";

export type CharityCausesEnum = 'Health' | 'Education' | 'Environment' | 'Animals' | 'Human Rights' | 'Poverty' | 'Other'

export interface Charity {
    id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    cause: CharityCausesEnum;
    location: {
        country: string;
        city: string;
        coordinates: {
            latitude: number;
            longitude: number;
        }
    }
}
