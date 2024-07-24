import hl7 from 'simple-hl7';

let client = hl7.Server.createTcpClient('localhost', 7777);
let msg = new hl7.Message(`MSH|^~\\&|FineCarePlus|飞测ⅡPlus^00:21:62:41:ED:35^FS-113|POCT|POCT_SERVER^^PC|19700102044354||ORU^R01^ORU_R01|197001020073|P|2.4||||0|CHN|UTF8\r` +
`PID|197001020052||num paciente^num admissao^num leito||nome|||F\r` +
`OBR|197001020052|F20617504|1235||||19700102024858|19700102024858|||||nota aqui|19691202|Urina|med submet|divisao submis|||med inspetor\r` +
`OBX|197001020052|NM||MAU|23.7|mg/L|0.0-20.0||||||23.7 mg/L  |19700102024858||med inspetor\r` +
`DSC|1|F`
)

console.log('* sending message *');
client.send(msg, function (err, ack){
  console.log('response');
  console.log('* ack received *');
  console.log(ack.log());
})

// MSH 1 |^~& 2 |FineCarePlus 3 |飞测ⅡPlus^00:21:62:41:ED:35^FS-113 4 |POCT 5 |POCT_SERVER^^PC 6 |19700101224805 7 | 8 |ORU^R01^ORU_R01 9 |197001010128 10 |P 11 |2.4 12 | 13 | 14 |15 |0 16|CHN 17|UTF8
// PID 18|197001010128 19| 20| 21| 22| 23| 24| 25|O
// OBR 26 |197001010128 27|F20617504 28 |1119 29| 30 |31 |32 |19700101224804 33|19700101224804 34| 35 |36 |37 |38 |39 |40 |Urina
// OBX 41|197001010128 42|NM 43| 44|MAU 45|23.8 46|mg/L 47|0.0-20.0 48| 49| 50| 51| 52| 53|23.8 mg/L  54|19700101224804
// DSC 55|1 56|F 57