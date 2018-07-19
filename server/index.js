const app = require('./app');
const { db } = require('./db');
const PORT = process.env.PORT || 1234;

db.sync()
  .then(() => {
    console.log("DB synced!");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  });
