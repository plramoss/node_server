const pointCare = 'MSH|^~\\&|1|PointcareM|||20220725155545|2|ORU^R01|1|p|2.3.1|PM2206005Z02 36043|||0||ASCII|||\r' +
  'PID|1||ID9||||20240000000000|O|||||||||||||||||||||||\r' +
  'OBR|1||ID9|1^1|||20240416151716||||||||serum|||lipemia|||||||||||||||||||||||||| 36043-35.5-0146-0302-24-230654-911|24|230654|911|\r' +
  'OBX|1|ST||TP|4.72|g/dL|0-0|H|||||4.72|20240416151716||||3|10|\r' +
  'OBX|2|ST||ALB|��1|g/dL|0-0|H|||||��1|20240416151716||||1|6|\r' +
  'OBX|3|ST||GLO|3.72|g/dL|0-0|H|||||3.72|20240416151716||||0|100|\r' +
  'OBX|4|ST||A/G|0.3/1||0-0|H|||||0.3/1|20240416151716||||0|1000|\r' +
  'OBX|5|ST||TBIL|7.95|mg/dL|0-0|H|||||7.95|20240416151716||||0.1|46.8|\r' +
  'OBX|6|ST||DBIL|1.04|mg/dL|0-0|H|||||1.04|20240416151716||||0.1|11.7|\r' +
  'OBX|7|ST||IBIL|6.91|mg/dL|0-0|H|||||6.91|20240416151716||||0|58.5|\r' +
  'OBX|8|ST||ALT|267|U/L|0-0|H|||||267|20240416151716||||5|1100|\r' +
  'OBX|9|ST||AST|55|U/L|0-0|H|||||55|20240416151716||||5|1100|\r' +
  'OBX|10|ST||GGT|66|U/L|0-0|H|||||66|20240416151716||||5|1100|\r' +
  'OBX|11|ST||ALP|307|U/L|0-0|H|||||307|20240416151716||||25|1200|\r' +
  'OBX|12|ST||TG|354|mg/dL|0-0|H|||||354|20240416151716||||44|800|\r' +
  'OBX|13|ST||CHOL|205|mg/dL|0-0|H|||||205|20240416151716||||77|542|\r' +
  'OBX|14|ST||HDL-C|35.7|mg/dL|0-0|H|||||35.7|20240416151716||||8|115|\r' +
  'OBX|15|ST||LDL-C|98.5|mg/dL|0-0|H|||||98.5|20240416151716||||0|38460|\r' +
  'OBX|16|ST||GLU|173|mg/dL|0-0|H|||||173|20240416151716||||18|540|\r' +
  'OBX|17|ST||CRE|2.49|mg/dL|0-0|H|||||2.49|20240416151716||||0.23|16.97|\r' +
  'OBX|18|ST||UREA|102.0|mg/dL|0-0|H|||||102.0|20240416151716||||5|214|\r' +
  'OBX|19|ST||UA|7.47|mg/dL|0-0|H|||||7.47|20240416151716||||2.52|15.13|\r'

const wondfo = 'MSH|^~\\&|FineCarePlus|飞测ⅡPlus^00:21:62:41:ED:35^FS-113|POCT|POCT_SERVER^^PC|19700102044354||ORU^R01^ORU_R01|197001020073|P|2.4||||0|CHN|UTF8\r' +
  'PID|197001020052||num paciente^num admissao^num leito||nome|||F\r' +
  'OBR|197001020052|F20617504|1235||||19700102024858|19700102024858|||||nota aqui|19691202|Urina|med submet|divisao submis|||med inspetor\r' +
  'OBX|197001020052|NM||MAU|23.7|mg/L|0.0-20.0||||||23.7 mg/L  |19700102024858||med inspetor\r' +
  'DSC|1|F'

const wondfoEqu = 'MSH|^~\\&|FineCarePlus|飞测ⅡPlus^00:1F:DE:12:6A:19^FS-113|POCT|POCT_SERVER^^PC|19700101232716||ESU^U01^ESU_U01|1|P|2.4||||0|CHN|UTF8\r' +
    'EQU|00:1F:DE:12:6A:19^飞测ⅡPlus^wondfo|19700101232716|OP^正常运行|L^Local本地^App^1.0.0.1.0.7.87^2019-nCoV Ag,90;2019nCoV IgM/IgG,24;AFP,69;BNP,34;CEA,72;CK-MB,153;CRP,198;Cortisol,91;Cys C,119;D-Dimer,405;FPSA,125;FSH,,57;LH,77;MAU,127;Myo,82;NT-proBNP,318;PCT,188;PSA,216;T3,110;T4,96;TSH,91;Vitamin D,75;cTnI,413;cTnI/CK-MB/Myo,320;cTnT,115;β-hCG,167^3911|N^正常'

const dymind = 'MSH|^~\&|DP-H1x|Dymind|||20240725160643||ORU^R01|20240718_114704_524|P|2.3.1|DMP1012249003|||||UNICODE\r' +
  'PID|1\r' +
  'PV1|1\r' +
  'OBR|1||TLRHEM 12 10|01001^Automated Count^99MRC||20240718114704|20240718114704|||||||20240718114704||||||||20240718115229||HM||||admin||||admin\r' +
  'OBX|1|IS|02001^Take Mode^99MRC||O||||||F\r' +
  'OBX|2|IS|02002^Blood Mode^99MRC||W||||||F\r' +
  'OBX|3|IS|02003^Test Mode^99MRC||CBC||||||F\r' +
  'OBX|4|NM|30525-0^Age^LN|||yr|||||F\r' +
  'OBX|5|IS|09001^Remark^99MRC||||||||F\r' +
  'OBX|6|IS|03001^Ref Group^99MRC||General||||||F\r' +
  'OBX|7|NM|6690-2^WBC^LN||17.48|10*3/uL|3.50-9.50|H~A|||F\r' +
  'OBX|8|NM|736-9^LYM%^LN||57.2|%|20.0-50.0|H~A|||F\r' +
  'OBX|9|NM|20482-6^GRAN%^LN||21.1|%|40.0-75.0|L~A|||F\r' +
  'OBX|10|NM|32155-4^MID%^LN||21.7|%|3.0-15.0|H~A|||F\r' +
  'OBX|11|NM|731-0^LYM#^LN||10.00|10*3/uL|1.10-3.20|H~A|||F\r' +
  'OBX|12|NM|19023-1^GRAN#^LN||3.68|10*3/uL|1.80-6.30|~A|||F\r' +
  'OBX|13|NM|32154-7^MID#^LN||3.80|10*3/uL|0.10-1.00|H~A|||F\r' +
  'OBX|14|NM|789-8^RBC^LN||5.24|10*6/uL|3.80-5.80|~N|||F\r' +
  'OBX|15|NM|718-7^HGB^LN||17.0|g/dL|11.5-17.5|~N|||F\r' +
  'OBX|16|NM|4544-3^HCT^LN||46.8|%|35.0-50.0|~N|||F\r' +
  'OBX|17|NM|787-2^MCV^LN||89.4|fL|82.0-100.0|~N|||F\r' +
  'OBX|18|NM|785-6^MCH^LN||32.5|pg|27.0-34.0|~N|||F\r' +
  'OBX|19|NM|786-4^MCHC^LN||36.4|g/dL|31.6-35.4|H~A|||F\r' +
  'OBX|20|NM|788-0^RDW-CV^LN||17.0|%|11.0-16.0|H~A|||F\r' +
  'OBX|21|NM|21000-5^RDW-SD^LN||63.2|fL|35.0-56.0|H~A|||F\r' +
  'OBX|22|NM|777-3^PLT^LN||502|10*3/uL|125-350|H~A|||F\r' +
  'OBX|23|NM|32623-1^MPV^LN||13.2|fL|6.5-12.0|H~A|||F\r' +
  'OBX|24|NM|32207-3^PDW^LN||19.9|fL|9.0-17.0|H~A|||F\r' +
  'OBX|25|NM|11003^PCT^99MRC||0.660|%|0.108-0.282|H~A|||F\r' +
  'OBX|26|NM|48386-7^P-LCR^LN||43.5|%|11.0-45.0|~N|||F\r' +
  'OBX|27|NM|34167-7^P-LCC^LN||218|10*3/uL|30-90|H~A|||F\r' +
  'OBX|28|IS|13105^Lymphocytosis^99MRC||T||||||F\r' +
  'OBX|29|IS|13112^Increased Mid Cells^99MRC||T||||||F\r'

const eco = 'MSH|^~\&|VA20DBITG2633^ac00000300000000^EUI-64|BioNote|||20240725155527||ORU^R01^ORU_R01|{57f7798a-1cd5-4116-8d4e-b854edb9fddb}|P|2.6|||AL|NE||UNICODE UTF-8|EN^English^ISO639||IHE_PCD_ORU_R01^IHE PCD^1.3.6.1.4.1.19376.1.6.4.1^ISO\r' +
  'PID|||||^^^^^^U\r' +
  'OBR|1|e2fa3483-c13d-4b4e-bda7-8ed7fb7f783a^VA20DBITG2633^ac00000300000000^GUID|e2fa3483-c13d-4b4e-bda7-8ed7fb7f783a^VA20DBITG2633^ac00000300000000^GUID|BN0280^cPRG^BN|||20240131155805|20240131155805\r' +
  'NTE|1||Device Information,Date of manufacture=20231030,LotNo=5,SerialNo=00000,Kind=FLine23\r' +
  'OBX|1|NM|BN0280^cPRG^BN|1.0.0.28|1.33|ng/mL^nanogram per milliliter^UCUM|[1.00;30.00]||||F|||20240131155805||guest|||20240131155805\r' +
  'NTE|1||Interpretation=Pre-LH surge\r'

export {eco, dymind, pointCare, wondfo, wondfoEqu}