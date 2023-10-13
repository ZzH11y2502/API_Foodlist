import { https } from "../../service/service.js";
import { renderFoodlist, showData } from "./controller-v2.js";
import { getData, layThongtinTuForm } from "../v1/controller-v1.js";

var selectedID = null;
let fetchFoodList = () =>{
    https.get("/food")
    .then((response) => {
        renderFoodlist(response.data.reverse());
        turnOffLoading();
    })
    
    .catch((error) => {
        console.log(error);
    });}
function turnOffLoading (){
    document.querySelector(`#spinner`).style.display = 'none';
}
    
function turnOnLoading (){
    document.querySelector(`#spinner`).style.display = 'block';
}


// first loading
turnOnLoading();
fetchFoodList();

// DeleteFood 
let deleteFood = (id) =>{
  console.log("delete", id);
  https.delete(`/food/${id}`)
.then ((response) => {
    console.log(response);
    fetchFoodList();
    })
.catch((error) => {
        console.log(error);
    })
};
 
//   window.addFood trùng với thẻ HTML
window.deleteFood = deleteFood;

window.addFood = () => {
    let food = layThongtinTuForm();
    console.log("🚀 ~ file: main-v2.js:40 ~ data:", food)
    https
    .post("/food",food)
    .then((response) => {
        $("#exampleModal").modal("hide");
        console.log(response);
        turnOnLoading();
        fetchFoodList();
    })
    .catch((error) => {
        console.log(error);
    })
};

// EDIT PRODUCT = SELECT PRODUCT + UPDATE PRODUCT
window.editFood = (id) => {
    selectedID = id;
    https
    .get(`/food/${id}`)
    .then((response) => {
        turnOffLoading();
        $("#exampleModal").modal("show");
        showData(response.data);
        console.log("🚀 ~ file: main-v2.js:68 ~ .then ~ response.data:", response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}

window.updateFood = () => {
    turnOnLoading();
    let food = layThongtinTuForm();
    https
    .put(`/food/${selectedID}`,food)
    .then((response)=> {
        $("#exampleModal").modal("hide");
        fetchFoodList();
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}