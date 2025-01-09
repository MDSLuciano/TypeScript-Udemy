//assim eu não posso fazer alteração.
const clientData1: readonly [number, string] = [1, 'Luciano'];
const clientData2: [number, string, string] = [1, 'Luciano', 'Machado'];
const clientData3: [number, string, string?] = [1, 'Luciano'];
const clientData4: [number, string, ...string[]] = [1, 'Luciano'];
const clientData5: [number, string] = [1, 'Luciano'];

// clientData1[0] = 100;
// clientData1[1] = "Lucas";

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly
const array1: readonly string[] = ['Luciano', 'Machado'];
const array2: ReadonlyArray<string> = ['Luciano', 'Machado'];
