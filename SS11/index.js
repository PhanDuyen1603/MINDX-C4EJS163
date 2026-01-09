// Bài 01: Viết một chương trình thêm một phần tử vào cuối mảng sử dụng push().

let names = ["Join", "Alice"];
let nameAdd = "Tom";

//push()
names.push(nameAdd);
console.log(names);

//Cách 2: Logic
let result2 = ["Join", "Alice"];
result2[result2.length] = nameAdd;
console.log(result2);

//Baif 02: Sử dụng map() để tạo ra một mảng mới với các giá trị là bình phương của các số trong mảng ban đầu.
let numbers = [1, 2, 3, 4];
// 1 => 1*1 = 1
// 2 => 2*2 = 4
// 3 => 3*3 = 9
// 4 => 4*4 =16

//map()
let result3 = numbers.map(n => n * n);
console.log(result3);

//Cách 2: Logic
let result4 = [];
for (let i = 0; i < numbers.length; i++) {
    result4.push(numbers[i] * numbers[i]);
}
console.log(result4);

//Bai 03: Sử dụng filter() để lọc ra các số chẵn trong mảng.
let numbers3 = [5, 10, 15, 20];
//filter()
let result5 = numbers3.filter(n => n % 2 === 0);
console.log(result5);

//Cách 2: Logic
let result6 = [];
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] % 2 === 0) {
        result6.push(numbers3[i]);
    }
}
console.log(result6);

//Bai 04: Sử dụng find() để tìm sinh viên đầu tiên có điểm số lớn hơn hoặc bằng 8 trong một mảng đối tượng sinh viên.
let students = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];

//find()
let firstGoodStudent = students.find(student => student.score >= 8);
console.log(firstGoodStudent);

//Cách 2: Logic
let firstGoodStudent2;
for(let i = 0; i <students.length; i++) {
    if(students[i].score >= 8) {
        firstGoodStudent2 = students[i];
        break;
    }
}
console.log(firstGoodStudent2);

//Bai 05: Sử dụng findIndex() để tìm chỉ số (index) của phần tử đầu tiên lớn hơn 10 trong mảng.
let scores = [3,5,8,12,15];

//findIndex()
let firstIndex = scores.findIndex(score => score > 10);
console.log(firstIndex);

//Cách 2: Logic
let firstIndex2;
for(let i=0; i< scores.length; i++){
    if(scores[i] > 10){
        firstIndex2 = i;
        break;
    }
}
console.log(firstIndex2);

//Bai 06 Sử dụng splice() để thêm, xóa, và thay thế phần tử trong mảng. Thêm 'f' vào sau 'c' và xóa 'd'.
let letters = ['a', 'b', 'c', 'd', 'e'];

//splice()
letters.splice(3,1,'f');
console.log(letters);

//Cách 2: Logic
// let indexToRemove;
// for(let i = 0; i < letters.length; i++){
//     if(letters[i] === 'c'){
//         indexToRemove = i + 1;
//         break;
//     }

//     // if(letters[i] === 'd') continue;
//     // indexToRemove.push(letters[i]);
//     // if(letters[i] === 'c'){
//     //     indexToRemove.push('f');
//     }
// }
// console.log(indexToRemove);

//Cach 2: logic
let letters2 = ['a', 'b', 'c', 'd', 'e'];

// Tạo mảng mới để lưu kết quả
let result7 = [];

// Duyet tung phan tu
for(let i =0; i<letters2.length; i++){

    //Gap "d" thi xoa d luon
    if( letters2[i] === 'd'){
        continue; // bo qua phan tu hien tai
    }

    //Them phan tu hien tai vao mang ket qua
    result7.push(letters2[i]);

    //Neu gap "c" thi them "f" vao mang ket qua
    if(letters2[i] === 'c'){
        result7.push('f');
    }
}

console.log(result7);

//reduce()
// vi du tinh tong cac so trong mang
let numbers4 = [1,2,3,4,5];

let sum = numbers4.reduce((total, num) => {
    return total + num;
}, 0);

// 1 => totlal = 0 num = 1 => return 0 + 1 = 1
// 2 => total = 1 num = 2 => return 1 + 2 = 3
// 3 => total = 3 num = 3 => return 3 + 3 = 6
// 4 => total = 6 num = 4 => return 6 + 4 = 10
// 5 => total = 10 num = 5 => return 10 + 5 = 15

console.log(sum);

       
