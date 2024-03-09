const express = require('express');
require('./config/mongoose.config');
const cors = require('cors');
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const allDevsRoutes = require('./routes/dev.routes');
allDevsRoutes(app);

app.listen(port, () => {
    console.log("Server listening at port", port);
})
