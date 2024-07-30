import getSegments from "./getSegments.js";

export default function getData(data){
  const now = new Date();
  const brasilDateTime = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'America/Sao_Paulo'
  }).format(now);
  
  const segments = getSegments(data);
  // MSH
  let sendingApplication = segments.mshSegment.getField(3).trim() ?? '';
  let sendingFacility = segments.mshSegment.getField(4).trim() ?? '';
  
  // OBR
  let obr2 = segments.obrSegment.getField(2).trim() ?? '';
  let obr3 = segments.obrSegment.getField(3).trim() ?? '';
  let obr15 = segments.obrSegment.getField(15).trim() ?? '';
  let obr14 = segments.obrSegment.getField(14).trim() ?? '';
  let obr13 = segments.obrSegment.getField(13).trim() ?? '';
  let obr16 = segments.obrSegment.getField(16).trim() ?? '';
  let obr17 = segments.obrSegment.getField(17).trim() ?? '';
  let obr20 = segments.obrSegment.getField(20).trim() ?? '';
  
  // PID
  let name = segments.pidSegment.getField(5).trim() ?? '';
  let gender = segments.pidSegment.getField(8).trim() ?? '';
  let patientNumber = segments.pidSegment.getComponent(3, 1).trim() ?? '';
  let admissionNumber = segments.pidSegment.getComponent(3, 2). trim() ?? '';
  let bedNumber = segments.pidSegment.getComponent(3, 3).trim() ?? '';
  
  // OBX
  let finalObxSegment = [];
  segments.obxSegments.forEach(segment => {
    const objectSegment = {
      "id": segment.getField(4).trim() ?? '',
      "result": segment.getField(5).trim() ?? '',
      "unit": segment.getField(6).trim() ?? '',
      "resultText": segment.getField(13).trim() ?? '',
      "pid": segment.getField(1).trim() ?? '',
    }
    finalObxSegment.push(objectSegment)
  })
  
  
  let jsonData = {
    "instrumentId": sendingApplication,
    "instrumentModel": sendingFacility,
    "sourceIp": "",
    "patient": {
      "name": name,
      "gender":gender,
      "bedNumber": bedNumber,
      "patientNumber": patientNumber,
      "admissionNumber": admissionNumber,
      "submissionDivision": obr2,
      "doctorSubmitted": obr3,
      "submissionTime": obr2,
      "doctorInspector": obr2,
      "note": obr2
    },
    "tests": finalObxSegment
  }
  
  console.log('* Dados *:', JSON.stringify(jsonData, null, 2))
}