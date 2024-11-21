import { GraphQLEnumType, GraphQLObjectType, GraphQLString } from "graphql";

const CoordinatesType = new GraphQLObjectType({
    name: "Coordinates",
    fields: () => ({
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
    }),
});

export const CauseType = new GraphQLEnumType({
    name: 'Cause',
    values: {
        Health: { value: 'Health' },
        Education: { value: 'Education' },
        Environment: { value: 'Environment' },
        Animals: { value: 'Animals' },
        HumanRights: { value: 'Human Rights' },
        Poverty: { value: 'Poverty' },
        Other: { value: 'Other' },
    }
});

export const LocationType = new GraphQLObjectType({
    name: "Location",
    fields: () => ({
        country: { type: GraphQLString },
        city: { type: GraphQLString },
        coordinates: { type: CoordinatesType },
    }),
})