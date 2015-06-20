var express = require('express');
var router = express.Router();
var x=[];
var msg=[[]];
var inc=0;
var id=0;
var numarr=new Object();
/* GET contacts */
router.get('/:id', function(req, res, next) {
	id=req.params.id;
	console.log(id);
	
	res.send(x[id]);
});
router.get('/messages/:id/:mid', function(req, res, next) {
	id=req.params.id;
	var mid=req.params.mid;

	
	res.send(msg[id][mid]);
});

router.post('/', function(req, res, next) {
  //console.log("req.body is"+req.body);
  x[id]=req.body;
  id=id+1;
  
res.send((id-1).toString());
  
});

router.post('/messages/:im', function(req, res, next) {
  //console.log("req.body is"+req.body);
  var im=req.params.im;
  if(numarr[im])
  	inc=numarr[im];
  else
       inc=0;
  msg[im][inc]=req.body;
  numarr[im]=inc+1;
  
  
 
res.send((inc-1).toString());
  
});


router.put('/:id', function(req, res, next) {
	var k=req.params.id;
  console.log(req.body);
  x[k].firstName=req.body.firstName;
  console.log(x[k]);
  
  res.send(x[k]);
  

});

module.exports = router;
