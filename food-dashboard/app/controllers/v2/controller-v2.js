export let renderFoodlist = (foodArr) => {
  var contentHTML = "";

  foodArr.forEach((food) => {
    let {ma, ten , gia, khuyenMai, tinhTrang, loai}= food;
    let trString = 
    `
    <tr>
        <td>${ma}</td>
        <td>${ten}</td>
        <td>${gia}</td>
        <td>${khuyenMai}</td>
        <td>0</td>        
        <td>${tinhTrang}</td>        
        <td>
        <button class ="btn btn-primary " onclick=editFood(${ma})>Sửa</button>
        <button class ="btn btn-danger " onclick=deleteFood(${ma})>Xóa</button>
        </td>      
    </tr>
    `;
    contentHTML += trString;
  })
  document.querySelector(`#tbodyFood`).innerHTML = contentHTML;
};

export let showData = (foodArr) => {
    let {ma, ten, loai, gia, khuyenMai,tinhTrang, hinhMon, moTa} = foodArr;
    document.querySelector(`#foodID`).value = ma;
    document.querySelector(`#tenMon`).value = ten;
    document.querySelector(`#loai`).value = loai;
    document.querySelector(`#giaMon`).value = gia;
    document.querySelector(`#khuyenMai`).value = khuyenMai;
    document.querySelector(`#tinhTrang`).value = tinhTrang;
    document.querySelector(`#hinhMon`).src = hinhMon;
    document.querySelector(`#moTa`).innerHTML = moTa; 
}