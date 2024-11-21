import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";
import CharityType from "../features/charity/graphql/charity.schema.js";
import EventType from "../features/events/graphql/event.schema.js";
import CharityModel from "../features/charity/charity.model.js";
import EventModel from "../features/events/event.model.js";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        charities: {
            type: new GraphQLList(CharityType),
            resolve() {
                return CharityModel.find();
            }
        },
        charity: {
            type: CharityType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return CharityModel.findById(args.id);
            }
        },
        events: {
            type: new GraphQLList(EventType),
            resolve() {
                return EventModel.find();
            }
        },
        event: {
            type: EventType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return EventModel.findById(args.id);
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});


export default schema;