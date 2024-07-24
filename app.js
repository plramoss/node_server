import hl7 from 'simple-hl7';

let app = hl7.tcp();
let counter = 0;

const now = new Date();
const brasilDateTime = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  timeZone: 'America/Sao_Paulo'
}).format(now);

function getData(data){
  // segmentos
  let pidSegment = data.getSegment('PID');
  let obrSegment = data.getSegment('OBR');
  let obxSegment = data.getSegment('OBX');
  
  // equipamento
  let instrumentId = `${data.header.getComponent(2, 2).trim()} ${data.header.getComponent(2, 3).trim()}`;
  let instrumentModel = data.header.getComponent(2, 1).trim();
  
  // testes
  let id = obxSegment.getField(4).trim();
  let result = obxSegment.getField(5).trim();
  let unit = obxSegment.getField(6).trim();
  let resultText = obxSegment.getField(13).trim();
  let pid = obxSegment.getField(1).trim();
  let recordId = obrSegment.getField(2).trim();
  let sampleId = obrSegment.getField(3).trim();
  let sampleType = obrSegment.getField(15).trim();
  
  // paciente
  let name = pidSegment.getField(5).trim();
  let gender = pidSegment.getField(8).trim();
  let bedNumber = pidSegment.getComponent(3, 3).trim();
  let patientNumber = pidSegment.getComponent(3, 1).trim();
  let admissionNumber = pidSegment.getComponent(3, 2).trim();
  let submissionTime = obrSegment.getField(14).trim();
  let note = obrSegment.getField(13).trim();
  
  let submissionDivision = '';
  let doctorSubmitted = '';
  let doctorInspector = '';
  
  if (obrSegment.fields.length >= 16) {
    doctorSubmitted = obrSegment.getField(16).trim();
    if(obrSegment.fields.length >= 17) {
      submissionDivision = obrSegment.getField(17).trim();
      if (obrSegment.fields.length === 20) {
        doctorInspector = obrSegment.getField(20).trim()
      }
    }
  }
  
  let dadosGerais = {
    "instrumentId": instrumentId,
    "instrumentModel": instrumentModel,
    "sourceIp": "",
    "tests": [
    {
      "id": id,
      "result": result,
      "unit": unit,
      "resultText": resultText,
      "testTime": brasilDateTime,
      "pid": pid,
      "recordId": recordId,
      "sampleId": sampleId,
      "sampleType": sampleType,
      "patient": {
        "name": name,
        "gender":gender,
        "bedNumber": bedNumber,
        "patientNumber": patientNumber,
        "admissionNumber": admissionNumber,
        "submissionDivision": submissionDivision,
        "doctorSubmitted": doctorSubmitted,
        "submissionTime": submissionTime,
        "doctorInspector": doctorInspector,
        "note": note
      }
    }]
  }
  
  console.log('* Dados *:', JSON.stringify(dadosGerais, null, 2))
}

app.use(function(req, res, next) {
  counter++
  console.log('* message received *');
  console.log('')
  console.log(req.msg.log());
  if(counter === 2) getData(req.msg)
  next();
});

app.use(function(req, res, next){
  console.log('* sending ack *');
  console.log(res.ack.log())
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
console.log('Servidor HL7 ouvindo na porta 7777');