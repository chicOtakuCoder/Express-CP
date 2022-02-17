module.exports =(req, res, next) => {
   const hour = new Date();
    const time = hour.getHours();

    const day = new Date();
    const weekDay = day.getDay();

    if(weekDay !== 0 && weekDay !== 6 && time > 9 && time < 17) next();

    else {
        res.render('siteClosed');
    }
}