import getSegments from "./getSegments.js";

export function getHL7Data(data){
  const now = new Date();
  const dateTimeMessage = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'America/Sao_Paulo'
  }).format(now);
  
  const segments = getSegments(data);

  // MSH
  let sendingApplication = segments.mshSegment?.getField(1).trim() ?? '';
  let sendingFacility = segments.mshSegment?.getField(2).trim() ?? '';
  let messageControlId = segments.mshSegment?.getField(8).trim() ?? '';
  let sequenceNumber = segments.mshSegment?.getField(11).trim() ?? '';
  let countryCode = segments.mshSegment?.getField(15).trim() ?? '';
  
  // PID
  let patientIdentifierList = segments.pidSegment?.getField(3).trim() ?? '';
  let patientName = segments.pidSegment?.getField(5).trim() ?? '';
  let dateTimeBirth = segments.pidSegment?.getField(7).trim() ?? '';
  let administrativeSex = segments.pidSegment?.getField(8).trim() ?? '';
  
  // OBR
  let placerOrderNumber = segments.obrSegment?.getField(2).trim() ?? '';
  let fillerOrderNumber = segments.obrSegment?.getField(3).trim() ?? '';
  let universalServiceId = segments.obrSegment?.getField(4).trim() ?? '';
  let observationDateTime = segments.obrSegment?.getField(7).trim() ?? '';
  let observationEndDateTime = segments.obrSegment?.getField(8).trim() ?? '';
  let relevantClinicalInformation = segments.obrSegment?.getField(13).trim() ?? '';
  let specimenReceivedDateTime = segments.obrSegment?.getField(14).trim() ?? '';
  let specimenSource = segments.obrSegment?.getField(15).trim() ?? '';
  let orderingProvider = segments.obrSegment?.getField(16).trim() ?? '';
  let orderCallbackPhone = segments.obrSegment?.getField(17).trim() ?? '';
  let fillerField1 = segments.obrSegment?.getField(20).trim() ?? '';
  

  
  // OBX
  let finalObxSegment = [];
  segments.obxSegments.forEach(segment => {
    const objectSegment = {
      "obxSetId": segment?.getField(1).trim() ?? '',
      "valueType": segment?.getField(2).trim() ?? '',
      "observationIdentifier": segment?.getField(3).trim() ?? '',
      "observationSubId": segment?.getField(4).trim() ?? '',
      "observationValue": segment?.getField(5).trim() ?? '',//
      "units": segment?.getField(6).trim() ?? '',
      "referencesRange": segment?.getField(7).trim() ?? '',
      // "observationResultStatus": segment?.getField(11).trim() ?? '',
      "userDefinedAccessChecks": segment?.getField(13).trim() ?? '',
      "dateTimeObservation": segment?.getField(14).trim() ?? '',//
      "responsibleObserver": segment?.getField(16).trim() ?? '',
    }
    finalObxSegment.push(objectSegment)
  })
  
  
  let jsonData = {
    "sendingApplication": sendingApplication,
    "sendingFacility": sendingFacility,
    "messageControlId": messageControlId,
    "sequenceNumber": sequenceNumber,
    "countryCode": countryCode,
    "patient": {
      "patientIdentifierList": patientIdentifierList,
      "patientName": patientName,
      "dateTimeBirth": dateTimeBirth,
      "administrativeSex": administrativeSex,
      "placerOrderNumber": placerOrderNumber,
      "fillerOrderNumber": fillerOrderNumber,
      "universalServiceId": universalServiceId,
      "observationDateTime": observationDateTime,
      "observationEndDateTime": observationEndDateTime,
      "relevantClinicalInformation": relevantClinicalInformation,
      "specimenReceivedDateTime": specimenReceivedDateTime,
      "specimenSource": specimenSource,
      "orderingProvider": orderingProvider,
      "orderCallbackPhone": orderCallbackPhone,
      "fillerField1": fillerField1,
    },
    "tests": finalObxSegment
  }
  
  console.log('* Dados *:', JSON.stringify(jsonData, null, 2))
}

/**
 * A partir do segmento recebido, extrai os dados e constrói um JSON
 * @param {number} type 1. Celer || 2. BioTech
 * @param {segment} segment Segmento criado a partir de uma mensagem fora do formato HL7.
 * @returns {Object}
 **/
export function getNonHL7Data(type, segment) {
  if (type === 1) {
    let jsonData = {
      "sendingApplication": sendingApplication,
      "sendingFacility": sendingFacility,
      "messageControlId": messageControlId,
      "sequenceNumber": sequenceNumber,
      "countryCode": countryCode,
      "patient": {
        "patientIdentifierList": patientIdentifierList,
        "patientName": patientName,
        "dateTimeBirth": dateTimeBirth,
        "administrativeSex": administrativeSex,
        "placerOrderNumber": placerOrderNumber,
        "fillerOrderNumber": fillerOrderNumber,
        "universalServiceId": universalServiceId,
        "observationDateTime": observationDateTime,
        "observationEndDateTime": observationEndDateTime,
        "relevantClinicalInformation": relevantClinicalInformation,
        "specimenReceivedDateTime": specimenReceivedDateTime,
        "specimenSource": specimenSource,
        "orderingProvider": orderingProvider,
        "orderCallbackPhone": orderCallbackPhone,
        "fillerField1": fillerField1,
      },
      "tests": finalObxSegment
    }
    
    console.log('* Dados *:', JSON.stringify(jsonData, null, 2))
  }
}