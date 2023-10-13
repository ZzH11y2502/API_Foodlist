export let getData = (idValue) => document.querySelector(`#${idValue}`).value;

export let layThongtinTuForm = () => {
  let foodID = getData("foodID");
  let spTenMon = getData("tenMon");
  let ten =getData("tenMon");
  let loai = getData("loai");
  let gia = getData("giaMon");
  let khuyenMai = getData("khuyenMai");

  let tinhTrang = getData("tinhTrang");
  let hinhAnh = getData("hinhMon");
  let moTa = getData("moTa");

  return {
    foodID, //foodID:foodID
    spTenMon,
    loai,
    ten,
    gia,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa,
    tinhGKM: function () {
      return this.gia * 1 - this.khuyenMai * 1;
    },
  };
};
