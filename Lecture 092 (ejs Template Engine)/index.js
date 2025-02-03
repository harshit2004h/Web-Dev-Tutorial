const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    let SiteName="Harshit";
    let SearchTxt="Search Karo Abhi";
    res.render("index", {SiteName, SearchTxt});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
