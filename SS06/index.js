//Bai 1:
let chieudai = 10;
let chieurong = 5;
let dientich = chieudai * chieurong;
let chuvi = 2 * (chieudai + chieurong);
console.log("Diện tích hình chữ nhật là: " + dientich);
console.log("Chu vi hình chữ nhật là: " + chuvi);
console.log("type", typeof chieudai);

//Bai 2:
 let s = 123456;
 let h = Math.floor(s / 3600);
 let m = Math.floor((s % 3600) / 60);
 let sec = s % 60;
console.log(h + " giờ " + m + " phút " + sec + " giây");

//Bai 3:
let coSo = 5;
let luyThua = 10;
let ketQua = Math.pow(coSo, luyThua);
console.log(coSo + " mũ " + luyThua + " là: " + ketQua);

//bai 4:
let a = 7;
let b = 3;
let c = 10;
let TBC = (a + b + c) / 3;
console.log("Trung bình cộng của " + a + ", " + b + " và " + c + " là: " + TBC);