const mongoose = require("mongoose");
const connectDatabase = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDatabase };

// const mongoose = require("mongoose");
// const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
//       // useFindAndModify: true,
//       console.log("database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports = { connectDatabase };
