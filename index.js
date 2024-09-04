const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
port = 4000;

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/' , require(path.join(__dirname,'routes/blog.js')));

app.listen(port , () => {
    console.log(`Server started on port ${port}`);
})