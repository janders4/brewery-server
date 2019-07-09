const { app } = require("./app.js");

app.listen(process.env.PORT || 9090, () => {
  console.log("listening...");
});
