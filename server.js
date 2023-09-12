const app = require('./app');
const config = require('./app/config');

//start serve
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
