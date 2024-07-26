import hl7 from 'simple-hl7';
import extractValue from "./functions/extractValue.js";
import getData from "./functions/getData.js";
import filterSegments from "./functions/filterSegments.js";

let server = hl7.tcp();

server.use(function(req, res, next) { //novo
  const segmentos = req.msg.segments;
  console.log(`* message received *`);
  console.log(req.msg.log());
  console.log('');
  const filter = filterSegments(req.msg)
  console.log(filter)
  // console.log('');
  // console.log('Segmento: MSH')
  // req.msg.header.fields.forEach(field => extractValue(field))
  // console.log('='.repeat(30))
  // console.log('')
  //
  // segmentos.forEach((segment, index) => {
  //   const fields = segment.fields;
  //   console.log(`Segmento: ${segment.name}`)
  //   fields.map((f) => {
  //     extractValue(f)
  //   })
  //   console.log('='.repeat(30))
  //   console.log('')
  // })
  // getData(req.msg)
  
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