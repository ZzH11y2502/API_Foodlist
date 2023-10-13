export let checkEmty =(value, idErr) => {
    console.log("🚀 ~ file: validate-v2.js:2 ~ checkEmty ~ value:", value)
    
    if (value != ""){
        console.log("hii");
        document.getElementById(idErr).innerHTML = "";
    }else{
        document.querySelector(`#${idErr}`).style.display = "block";
        document.querySelector(`#${idErr}`).innerHTML = "THis field this required.";
    }
}

export let checkDuplicate =(value, idErr, foodList, message, key) => {
    var index = foodList.findIndex(function(food){
        return food[key] === value;
    });
    if (index == -1) { 
        // Không tìm thấy value trong foodList => hợp lệ
        
        document.getElementById(idErr).innerHTML = "";
    }else{
        document.querySelector(`#${idErr}`).style.display = "block";
        document.querySelector(`#${idErr}`).innerHTML = message;
    }

}

