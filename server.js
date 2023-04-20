const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
