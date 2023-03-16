interface length { length: number }
function req0<T extends length>(value: T) {
    console.log(value)
}
const req = (x: number, y: number): void => {
    console.log(x + y);
}
function req1(x: number, y: number): void {
    console.log(x * y);
}
const req2: (x: number, y: number) => void = (x, y) => {
    console.log(x - y);
}

class sum {
    x: number
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        console.log(x + y);
    }
}
const req3 = new sum(1, 2);
console.log(req(1, 2), req1(1, 2), req2(1, 2), req3);