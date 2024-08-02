const celerPattern = /^FF&\d+&\d+\.\d+&\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}&[a-zA-Z0-9]+&[a-zA-Z]{2}$/
const biotechPattern = /^R\|\d{12}\|\d+\|[a-zA-Z0-9-]+\|<?\d+\.\d+\|\d+\.\d+\|\d+\.\d+\|\d+\.\d+\|<?\d+\.\d+\|[a-zA-Z/]+\|[a-zA-Z()/-]+\|\d{14}\|\d+\|\d+\|[a-fA-F0-9]+\|\d+$/

export { celerPattern, biotechPattern }

// ***** Celer *****
// Descrição da Regex
// ^: Início da string.
//   FF: Correspondência exata do texto "FF".
// &: Caractere literal &.
// \d+: Um ou mais dígitos, representando um número inteiro (por exemplo, 981).
// \d+\.\d+: Um número decimal com um ou mais dígitos antes e depois do ponto (por exemplo, 7.11).
// \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}: Data e hora no formato YYYY-MM-DD HH:MM:SS:
//   \d{4}: Quatro dígitos para o ano.
// -: Caractere de hífen.
//     \d{2}: Dois dígitos para o mês e o dia.
// : Espaço entre a data e a hora.
//   :: Caractere de dois pontos entre horas, minutos e segundos.
//   [a-zA-Z0-9]+: Texto alfanumérico (pelo menos um caractere) para cTnI ou outros valores variáveis.
//   [a-zA-Z]{2}: Dois caracteres alfabéticos para o código final (por exemplo, EE).
// $: Fim da string.


// ***** BioTech *****
// Descrição da Regex
// ^: Início da string.
// R\|: Caractere fixo "R" seguido de |.
// \d{12}: Exatamente 12 dígitos (para o identificador ou timestamp YYYYMMDDHHMM).
// \|: Caractere literal |.
// \d+: Um ou mais dígitos, representando um número inteiro (por exemplo, 15).
// [a-zA-Z0-9-]+: Texto alfanumérico, permitindo hífens (por exemplo, NT-proBNP).
// \|<?\d+\.\d+: Um número decimal que pode começar com < (por exemplo, <0.30).
// \|\d+\.\d+: Um número decimal (para os próximos campos como 0.300, 22.000, etc.).
// [a-zA-Z/]+: Unidade de medida (por exemplo, ng/ml).
// [a-zA-Z()/-]+: Texto para estado ou resultado (por exemplo, Neg(-)).
// \d{14}: Exatamente 14 dígitos para o timestamp YYYYMMDDHHMMSS.
// \d+: Um ou mais dígitos para inteiros (por exemplo, 0, 0).
// [a-fA-F0-9]+: Um identificador hexadecimal.
// \d+: Um número inteiro no final (por exemplo, 1234).
// $: Fim da string.