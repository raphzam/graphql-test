import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Graph ql is amazing");
});

app.listen(8080, () =>
  console.log("Runnning on server port localhost:8080/graphql")
);
