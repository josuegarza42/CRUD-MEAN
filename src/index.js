const express = require('express');
const app = express();

//setup express

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server is running on port 3000', app.get('port'));
});

