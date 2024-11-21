import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema.js";
import { connectDB } from "./configs/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP({
    graphiql: process.env.NODE_ENV === 'development',
    schema: schema,
}))

app.listen(PORT, async () => {

    console.log(`Server is running on ${PORT}`);
    await connectDB();
});