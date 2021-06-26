import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Graph ql is amazing");
});

const root = {
  friend: () => {
    return {
      id: 1235135,
      firstName: "Manny",
      lastName: "Santos",
      gender: "Male",
      email: "example@example.com",
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Runnning on server port localhost:8080/graphql")
);
