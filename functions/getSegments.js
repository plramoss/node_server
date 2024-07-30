import filterSegments from "./filterSegments.js";

export default function getSegments(data) {
  const segments = filterSegments(data);
  
  let pidSegment = data.getSegment('PID');
  let obrSegment = data.getSegment('OBR');
  let mshSegment = data.header
  let obxSegments = segments.obxSegments;
  let pv1Segments = segments.pv1Segment;
  let nteSegments = segments.nteSegments
  
  return {
    mshSegment,
    pidSegment,
    pv1Segments,
    obrSegment,
    nteSegments,
    obxSegments
  }
}