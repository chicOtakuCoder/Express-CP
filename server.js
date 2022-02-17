const express = require('express');
const checkTime = require('./middleware/checkTime');
const app = express();

app.set('view engine', 'ejs')

app.get('/',checkTime, (req, res) => {
    console.log('Here')
    res.render('index')
});

const contactRouter = require('./Routes/contact');
const servicesRouter = require('./Routes/services');
const siteClosedRouter = require('./Routes/siteClosed');

app.use('/contact', contactRouter);
app.use('/services', servicesRouter);
app.use('/site-closed', siteClosedRouter);


app.listen(3000);