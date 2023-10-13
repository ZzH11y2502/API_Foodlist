export let checkEmty =(value, idErr) => {
    console.log("🚀 ~ file: validate-v2.js:2 ~ checkEmty ~ value:", value)
    
    if (value != ""){
        document.getElementById(idErr).innerHTML = "";
        return true
    }else{
        console.log("This field is empty")
        document.querySelector(`#${idErr}`).style.display = "block";
        document.querySelector(`#${idErr}`).innerHTML = "THis field this required.";
        return false;
    }
}

export let checkDuplicate =(value, idErr, foodList, message, key) => {
        
    var index = foodList.findIndex(function(food){
        return food[key] === value;
    });
    if (index !== -1) { 
        // Tìm thấy value trong foodList => Không hợp lệ
        console.log("Duplicate");
        document.querySelector(`#${idErr}`).style.display = "block";
        document.querySelector(`#${idErr}`).innerHTML = message;
        return false
    }
        document.getElementById(idErr).innerHTML = "";  
        return true;
    
}

