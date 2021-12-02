
/**----------Bài 1--------
 * 
 * K1 : Input
 * luongMoiNgay
 * soNgayLam
 * 
 * K2:
 * B1: Khai báo biến và gán giá trị
 * B2: tính tiền lương
 *      tongLuong = luongMoiNgay * soNgayLam;
 * K3: Output
 * tongLuong
 * 
 */
function tienLuong() {
    // B1
    var luongMoiNgay = document.getElementById("luongMoiNgay").value;
    var soNgayLam = document.getElementById("soNgayLam").value;
    // B2
    var tongLuong = luongMoiNgay * soNgayLam;
    // B3
    document.getElementById("tongLuong").innerHTML = new Intl.NumberFormat('de-DE').format(tongLuong) + " VND"
}

/** ---------Bài-2----------
 * 
 * K1: 
 *  Nhập 5 số thực
 * 
 * k2:
 * B1/Khai báo biến và gán giá trị
 * num1,num2,num3,num4,num5
 * B2/Tính trung bình 5 số
 * tb = (num1 +...+ num5)/5;
 * 
 * k3: Xuất ra giá trị tb của 5 số 
 * tb
 */

function tinhSoThuc() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    
    var tb = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5)) / 5;
    
    document.getElementById("tb").innerHTML = tb;
}

/** -----------Bai-3------------- */
/**Sơ đồ 3 khối
 * 
 * Khối-1: Input
 * Giá tiền USD
 * Số tiền USD
 * 
 * Khối-2:
 * B1: Khai báo biến và gán giá trị:
 * giaUsd = 23500;
 * soTienUsd = ;
 * B2: Tính số tiền quy đổi ra VND
 * soTienVnd = soTienUsd * giaUsd
 * 
 * Khối-3: Xuất kết quả
 * Số tiền sau khi quy đổi ra VND
 * 
 */
function tinhTienUsd() {
    // B1:
    var giaUsd = 23500;
    var soTienUsd = document.getElementById("soTienUsd").value
    // B2:
    var soTienVnd = soTienUsd * giaUsd;
    // Xuất Kết quả
    document.getElementById("soTienVnd").innerHTML = new Intl.NumberFormat('de-DE').format(soTienVnd) + " VND"
}

/** -----------Bai-4------------- */
/**Sơ đồ 3 khối
 * 
 * Khối-1: Input
 * Chiều dài ;
 * CHiều Rộng ;
 * 
 * Khối-2:
 * B1: Khai báo biến và gán giá trị:
 * chieuDai = x;
 * chieuRong = y;
 * B2: Tính diện tích và chu vi
 * dienTich = chieuDai * chieuRong;
 * chuVi = (chieuDai + chieuRong) * 2
 * 
 * Khối-3: Xuất kết quả
 * Diện tích và chu vi HCN
 * 
 */

function tinhHcn() {
    // B1
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    //  B2
    var dienTich = chieuDai * chieuRong;
    var chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
    // Xuất kết quả
    document.getElementById("dienTich").innerHTML = dienTich;
    document.getElementById("chuVi").innerHTML = chuVi;
}

/** -----------Bai-5------------- */
/**Sơ đồ 3 khối
 * 
 * Khối-1: Input
 * 1 số có 2 chữ số
 * 
 * Khối-2:
 * B1: Khai báo biến và gán giá trị:
 * num : số có 2 chữ số
 * ten : hàng chục
 * unit : hàng đơn vị
 * B2: Lấy ra số hàng chục và hàng đơn vị
 * ten = Math.floor(num/10);
 * unit = num%10;
 * B3: Tính tổng số hàng chục và hàng đơn vị 
 * tong = ten + unit
 * 
 * Khối-3: Xuất kết quả
 * Tổng số hàng chục và đơn vị
 * 
 */
function tinhSo() {
    // B1:
    var num = document.getElementById("num").value;
    // B2:
    var ten = Math.floor(num / 10);
    var unit = num % 10;
    // B3:
    var tong = ten + unit;
    // Xuất kết quả
    document.getElementById("tinhSo").innerHTML = tong;
}
