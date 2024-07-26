export default function extractValue(field) {
  if(Array.isArray(field.value)){
    field.value.forEach((subField) => {
      if (subField.hasOwnProperty('value')){
        extractValue(subField)
      } else {
        console.log(subField)
      }
    })
  } else {
    console.log(field)
  }
}