import hl7 from 'simple-hl7';
import { eco, wondfo, pointCare, dymind } from "./messages.js";

let client = hl7.Server.createTcpClient('localhost', 7777);
let msg = new hl7.Message(eco)

console.log('* sending message *');
client.send(msg, function (err, ack){
  console.log('* ack received *');
  console.log(ack.log());
})
