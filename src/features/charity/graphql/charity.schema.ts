import { GraphQLID, GraphQLObjectType, GraphQLString, } from "graphql";
import { CauseType, LocationType } from "../../../graphql/types.js";

const CharityType = new GraphQLObjectType({
    name: "Charity",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        cause: { type: CauseType },
        location: { type: LocationType },
    }),
})


export default CharityType;