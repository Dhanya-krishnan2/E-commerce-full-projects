const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`The server running on port ${PORT}`));
