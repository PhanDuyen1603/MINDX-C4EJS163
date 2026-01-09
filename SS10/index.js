//Câu 1:
function linearFunction(A, B, x) {
  return A * x + B;
}

console.log(linearFunction(3, 4, 5))

const functionName = (A, B, x) => {
    return A * x + B;
}

console.log(functionName(6, 48, 6));

// function functionName() {
//     // code...
// }

// khai báo hàm
const newFunction = function(A, B, x) {
    return A * x + B;
}
// newFunction(3, 4, 5);
console.log(newFunction(3, 4, 5)); // gọi hàm

//Bai 2:
function chuViHCN(length, width) {
    return (length + width) * 2;
}

console.log("Chu vi hình chữ nhật là: " + chuViHCN(5, 10));
console.log("Chu vi hình chữ nhật là: " + chuViHCN(20, 50));
console.log("Chu vi hình chữ nhật là: " + chuViHCN(100, 120));

//Bai 3:
function dienTichHinhTron(r) {
    return (Math.PI * r * r).toFixed(2);
}

console.log("Diện tích hình tròn là: " + dienTichHinhTron(5));
console.log("Diện tích hình tròn là: " + dienTichHinhTron(10));
console.log("Diện tích hình tròn là: " + dienTichHinhTron(20));