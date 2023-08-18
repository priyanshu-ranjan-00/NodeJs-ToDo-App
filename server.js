import { app } from "./app.js";
import { connectMongoDB } from "./data/database.js";

connectMongoDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
