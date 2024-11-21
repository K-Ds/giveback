import { GraphQLEnumType, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { LocationType } from "../../../graphql/types.js";
import CharityType from "../../charity/graphql/charity.schema.js";
import CharityModel from "../../charity/charity.model.js";


const EventTypeEnum = new GraphQLEnumType({
    name: 'EventType',
    values: {
        Fundraiser: { value: 'Fundraiser' },
        Awareness: { value: 'Awareness' },
        Volunteer: { value: 'Volunteer' },
    }
})

const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        type: { type: EventTypeEnum },
        description: { type: GraphQLString },
        date: { type: GraphQLString },
        location: { type: LocationType },
        charityId: {
            type: CharityType,
            resolve(parent, args) {
                return CharityModel.findById(parent.charityId);
            }
        },
    }),
})

export default EventType;