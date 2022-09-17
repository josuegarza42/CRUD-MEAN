const cors = require('cors');
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
//setup express

app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);	//render html files
app.set('views engine', 'ejs');    //render html filesystem

//middleware
app.use(cors()); //accepts cors headers
app.use(express.json()); //accept json
app.use(express.urlencoded({extended:false})); //

//routes
app.use(indexRoutes);

app.listen(app.get('port'), () => {
  console.log('Server is running on port 3000', app.get('port'));
});

