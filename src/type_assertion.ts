// Type Assertion Feature de TS
// Si no sabemos exactamamte el tipo de un valor podemos convertirlo con un cast

let channel: any = 'LuchiThor';

let channelStr = <string>channel;
// let channelStr2 = channel as string; // Otra forma

const myCanvas = document.getElementById('main') as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById('main');