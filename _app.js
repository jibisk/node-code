// const http = require('http');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const errorController = require('../controllers/error');

// const expressHbs = require('express-handlebars');

// const routes = require('./routes');

// const server = http.createServer((req, res) => {

  // console.log(req.url, req.method, req.headers )
  // process.exit()
  // res.setHeader('content-type', 'text/html')

// });

// const server = http.createServer(routes.handler);


const app = express();

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layout/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
// app.set('view engine', 'hbs');

// app.set('view engine', 'pug');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin'); // adminRoutes
const shopRoutes = require('./routes/shop');


//middleware
// app.use('/', (req, res, next)=>{
//   console.log('first')
//   next(); // allows req to continue to next middleware
// });

app.use(bodyParser.urlencoded({extended:false}))



//middleware
// app.use('/add-product', (req, res, next)=>{
//   // console.log('two')
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
// })

// app.post('/product', (req, res, next)=>{
//   // console.log('three')
//   console.log(req.body)
//   res.redirect('/');
// })

app.use(express.static(path.join( __dirname, 'public' )));

app.use('/admin', adminRoutes)
// app.use('/admin', adminData.routers)


// app.use('/', (req, res, next)=>{
//   console.log('four')
//     res.send('<h1>sasasa</h1>')
// });
app.use(shopRoutes)

// app.use((req, res, next)=>{
  // res.status(404).send('<h1>page not found</h1>')
  // res.status(404).sendFile(path.join( __dirname, 'views', '404.html' ))
  // res.status(404).render('404', {docTitle:'Page Not Found'});
//   res.status(404).render('404', { pageTitle: 'Page Not Found', path:'' });
// })

app.use(errorController.get404);

// const server = http.createServer(app);

// console.log(routes.someText)

// server.listen(3000);

app.listen(3000);
