export default function getData(data){
  const now = new Date();
  const brasilDateTime = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'America/Sao_Paulo'
  }).format(now);
  
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