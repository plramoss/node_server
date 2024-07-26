export default function filterSegments(data) {
  const counts = {};
  const duplicates = {};
  
  let hasNte = false;
  let nteDuplicated = false;
  let hasPV1 = false;
  
  data.segments.forEach(segment => {
    counts[segment.name] = (counts[segment.name] || 0) + 1;
  });
  
  for (const segment in counts) {
    if (counts[segment] > 1) {
      duplicates[segment] = counts[segment];
    }
  }
  
  if ('NTE' in counts) {
    hasNte = true;
    if ('NTE' in duplicates) {
      nteDuplicated = true;
    }
  }

  if ('PV1' in counts) {
    hasPV1 = true;
  }
  
  const obxSegments = data.segments.filter(segment => segment.name === 'OBX');
  const nteSegments = hasNte ? data.segments.filter(segment => segment.name === 'NTE') : [];
  const pv1Segment = hasPV1 ? data.segments.filter(segment => segment.name === 'PV1') : [];
  
  if (hasPV1 && hasNte) {
    return { obxSegments, nteSegments, hasPV1 };
  } else if (hasPV1) {
    return { obxSegments, pv1Segment };
  } else if (hasNte) {
    return { obxSegments, nteSegments }
  } else {
    return obxSegments;
  }
}