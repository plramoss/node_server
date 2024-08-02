import hl7 from 'simple-hl7';
import { biotech, celer, wondfo, dymind, eco, pointcare, msgEqu } from "./messages/index.js";
import fs from 'fs'

const rawMessage = fs.readFileSync(`${biotech}`, 'utf-8');

const client = hl7.Server.createTcpClient({
  host: '10.202.30.52',
  port: 7777,
  keepalive: true,
  callback: function (err, ack) {
    if (err) {
      console.log('*** Error ***')
      console.log(err.message)
    } else {
      console.log(ack.log())
    }
  }
})

console.log('** Enviando **')
client.send(rawMessage);