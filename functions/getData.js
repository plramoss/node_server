import getSegments from "./getSegments.js";

export function getHL7Data(data){
  const now = new Date();
  const dateTimeMessage = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'America/Sao_Paulo'
  }).format(now);
  
  const segments = getSegments(data);
  
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
    "sendingApplication": segments.mshSegment?.getField(1).trim() ?? '',
    "sendingFacility": segments.mshSegment?.getField(2).trim() ?? '',
    "messageControlId": segments.mshSegment?.getField(8).trim() ?? '',
    "sequenceNumber": segments.mshSegment?.getField(11).trim() ?? '',
    "countryCode": segments.mshSegment?.getField(15).trim() ?? '',
    "patient": {
      "patientIdentifierList": segments.pidSegment?.getField(3).trim() ?? '',
      "patientName": segments.pidSegment?.getField(5).trim() ?? '',
      "dateTimeBirth": segments.pidSegment?.getField(7).trim() ?? '',
      "administrativeSex": segments.pidSegment?.getField(8).trim() ?? '',
      "placerOrderNumber": segments.obrSegment?.getField(2).trim() ?? '',
      "fillerOrderNumber": segments.obrSegment?.getField(3).trim() ?? '',
      "universalServiceId": segments.obrSegment?.getField(4).trim() ?? '',
      "observationDateTime": segments.obrSegment?.getField(7).trim() ?? '',
      "observationEndDateTime": segments.obrSegment?.getField(8).trim() ?? '',
      "relevantClinicalInformation": segments.obrSegment?.getField(13).trim() ?? '',
      "specimenReceivedDateTime": segments.obrSegment?.getField(14).trim() ?? '',
      "specimenSource": segments.obrSegment?.getField(15).trim() ?? '',
      "orderingProvider": segments.obrSegment?.getField(16).trim() ?? '',
      "orderCallbackPhone": segments.obrSegment?.getField(17).trim() ?? '',
      "fillerField1": segments.obrSegment?.getField(20).trim() ?? '',
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
      "sendingApplication": '',
      "sendingFacility": '',
      "messageControlId": '',
      "sequenceNumber": '',
      "countryCode": '',
      "patient": {
        "patientIdentifierList": '',
        "patientName": '',
        "dateTimeBirth": '',
        "administrativeSex": '',
        "placerOrderNumber": '',
        "fillerOrderNumber": '',
        "universalServiceId": '',
        "observationDateTime": segment?.getField(3).trim() ?? '',
        "observationEndDateTime": '',
        "relevantClinicalInformation": '',
        "specimenReceivedDateTime": '',
        "specimenSource": '',
        "orderingProvider": '',
        "orderCallbackPhone": '',
        "fillerField1": '',
      },
      "tests": [{
        "obxSetId": segment?.getField(1).trim() ?? '',
        "valueType": '',
        "observationIdentifier": '',
        "observationSubId": segment?.getField(4).trim() ?? '',
        "observationValue": segment?.getField(2).trim() ?? '',//
        "units": '',
        "referencesRange": '',
        "userDefinedAccessChecks": '',
        "responsibleObserver": '',
      }]
    }
    
    console.log('* Dados *:', JSON.stringify(jsonData, null, 2))
  } else if (type === 2) {
  
  }
}