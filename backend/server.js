const {createServer} = require("http");
const express = require('express');
var favicon = require("serve-favicon");
const path = require('path'); 
const app = express();
// const compression = require('compression');
// const morgan = require('morgan');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))




const { normalize } = require("path");

const normalizePort = port => parseInt(port,10);

const PORT = normalizePort(process.env.PORT || 5000);


const dev = app.get("env") !== "production"


//TODO Commented From here

// if(!dev){
//   app.disable("x-powered-by")
//   app.use(compression())
//   app.use(morgan('common'))


//   app.use(express.static(path.resolve(__dirname,"build")))
  

//   app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//         res.json(list);
//             console.log('Sent list of items');
// });

//   app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"build","index.html"))
//   })
// }


// if(dev){
//   app.use(morgan('dev'))
// }

//TODO untill HERE UNCOMMENT




// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
        res.json(list);
            console.log('Sent list of items');
});

/*Important main Logic*/
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});



const server = createServer(app)

server.listen(PORT,err=>{
  if(err) throw err;

  console.log("Server started")
})