const cors = require('cors');
const express = require('express');
const app = express();
// const indexRoutes = require('./routes/index');
const taskRoutes = require('./routes/tasks');
const path = require('path');
//setup express

app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);	//render html files
app.set('views engine', 'ejs');    //render html filesystem
app.set('views', path.join(__dirname, 'views'));	//render views
//middleware
app.use(cors()); //accepts cors headers
app.use(express.json()); //accept json
app.use(express.urlencoded({ extended: false })); //

//routes
// app.use(indexRoutes);
app.use('/api', taskRoutes);

//static files

app.use(express.static(path.join(__dirname, 'dist')));


app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000', app.get('port'));
});


