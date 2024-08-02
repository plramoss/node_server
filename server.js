import hl7 from 'simple-hl7';
import { celerPattern, biotechPattern } from "./patterns.js";
import {getNonHL7Data} from "./functions/getData.js";

const app = hl7.tcp()

app.use(function (req, res, next) {
  let parser = new hl7.Parser({segmentSeperator: '\n'});
  const rawMessage = req.raw.toString();
  
  console.log('Message received from: ' +  req.facility);
  console.log(req)
  console.log('')
  
  if (rawMessage.startsWith('\x0BMSH')) {
    console.log('* Mensagem HL7 recebida *');
    console.log(req.msg.log());
    const hl7Message = parser.parse(rawMessage)
    // getDataHL7Data(hl7Message)
  } else {
    console.log('* A mensagem recebida não é HL7 *');
    const msg = rawMessage.replace('\x0B', '').replace('\x1C\r', '')
    if (celerPattern.test(msg)) {
      const parsedMsg = msg.replace(/&/g, '|')
      const parsedSegment = parser.parseSegment(parsedMsg)
      getNonHL7Data(1, parsedSegment)
    } else if (biotechPattern.test(msg)) {
      getNonHL7Data(2, req.msg.header)
    }
  }
  console.log('')
  next();
});

app.use(function(req, res, next){
  // console.log('* sending ack *');
  // console.log(res.ack.log())
  res.end();
});

app.use(function (err, req, res, next){
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

app.start(7777);