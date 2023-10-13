import { layThongtinTuForm } from "./controller-v1.js";
let themMon = () => {
  let data = layThongtinTuForm();
  console.log("🚀 ~ file: main-v1.js:4 ~ themMon ~ data:", data.tinhGKM());
  // detructoring
  let { foodID, spTenMon, loai, gia, tinhTrang, khuyenMai, hinhAnh, moTa } =
    data;
  document.getElementById("spMa").innerText = foodID;
  document.getElementById("spTenMon").innerText = spTenMon;
  document.getElementById("spLoaiMon").innerText = loai;
  document.getElementById("spGia").innerText = gia;
  document.getElementById("spTT").innerText = tinhTrang == "0" ? "Hết" : "Còn";
  document.getElementById("spKM").innerText = khuyenMai + "%";
  document.getElementById("imgMonAn").src = hinhAnh;
  document.getElementById("pMoTa").innerText = moTa;
  document.getElementById("spGiaKM").innerText = data.tinhGKM();
};

window.themMon = themMon;
