import hl7 from 'simple-hl7';
import getData from "./functions/getData.js";

let server = hl7.tcp();

server.use(function(req, res, next) { //novo
  const segmentos = req.msg.segments;
  console.log(`* message received *`);
  console.log(req.msg.log());
  console.log('');
  getData(req.msg);
  
  next();
});

server.use(function(req, res, next){
  console.log('* sending ack *');
  console.log(res.ack.log())
  res.end();
});

server.use(function (err, req, res, next){
  console.log('* error *');
  console.log(err);
  
  if(res && res.ack) {
    let msa = res.ack.getSegment('MSA');
    if(msa) {
      msa.setField(1, 'AR');
    }
    res.ack.addSegment('ERR', err.message);
    res.end();
  } else {
    console.error('Response or ACK is undefined');
  }
});

server.start(7777);
console.log('Servidor HL7 ouvindo na porta 7777');