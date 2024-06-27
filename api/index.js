import express from "express";

const app = express();
const PORT = process.env.PORT || 4000; // Define a default port if not set in the environment variables

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
