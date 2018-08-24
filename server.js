const express = require('express');
const cors = require('cors')
const app = express();
const request = require("request");

// allow cros sorgin request i.e from angular client
app.use(cors());

app.get("/", (req,res) => {
  console.log("/")
  // myproxy.web(req,res,{target: 'http://services.groupkt.com/country/get/all'});
  request("http://services.groupkt.com/country/get/all", (err,response,body) => {
    res.send(body);
  })
});


app.get("/isocode/:CODE",(req,res) => {
  const isoCode = req.params.CODE;
  // console.log(isoCode);
  if(isoCode.length===2){
    request("http://services.groupkt.com/country/get/iso2code/"+isoCode, (err,response,body) => {
      res.send(body);
  })
  }
  else if(isoCode.length===3){
    request("http://services.groupkt.com/country/get/iso3code/"+isoCode, (err,response,body) => {
      res.send(body);
  });
}
    else {
      res.send({"RestResponse": {}})
    }
});

app.listen(8000);

