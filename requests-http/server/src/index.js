const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

// run with npm run start
//npm install -save express body-parser connect-multiparty cors
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsoptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsoptions));

const multipartMiddleware = multipart({ uploadDir: './uploads' });

app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({message : files});
});

app.get('/DownloadExcel', (req,res)=>{
  res.download('./uploads/report.txt');
});

app.get('/DownloadPDF', (req,res)=>{
  res.download('./uploads/report.pdf');
});


app.use((err,req, res,nex)=>
  res.json({error: err.message})
)

app.listen(8000, () => {
    console.log('Server started on port 8000');
})





