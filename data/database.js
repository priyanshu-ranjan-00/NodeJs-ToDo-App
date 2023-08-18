import mongoose from "mongoose";

export const connectMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected ${c.connection.host}`))
    .catch((e) => console.log(e));
};
