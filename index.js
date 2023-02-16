document.getElementById("btn-calc").addEventListener('click', function(){
    let food = document.getElementById("food");
    let rent = document.getElementById("rent");
    let clothes = document.getElementById("clothes");

    let totalExpense = document.getElementById("total-expense");
    

    // 

    let mainincome = document.getElementById("main-income");
    let balance = document.getElementById("balance");
    if(food.value === '' || rent.value === '' || clothes.value === '' || mainincome.value === '' ||
       food.value < 1  || rent.value < 1 || clothes.value < 1 || mainincome.value < 1){
        alert("Ya Habibi Why empty!!!");

    }
    else if (
      parseInt(mainincome.value) <
      (parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value))
    ) {
      alert("Ya Habibi Not much money!!!");
    }
    //
    else {
      totalExpense.innerText =
        parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
      balance.innerText =
        parseInt(mainincome.value) -
        (parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value));
    }

    
});
// 

document.getElementById("save").addEventListener('click' , function(){
    let mainincome = document.getElementById("main-income");
    let saveInput = document.getElementById("save-input");
    let savingAmount = document.getElementById("saving-amount");
    
    
//    
  
let remainingBalance = document.getElementById("remaining-balance");
let balance = document.getElementById("balance");
// 
if (
  parseInt(balance.innerText) <
  (parseInt(mainincome.value) * (parseFloat(saveInput.value) / 100))
) {
  alert("Ya Habibi saving amount is more than balance");
}
// 
else if (saveInput.value < 0) {
  alert("Ya Habibi Why negative  !!!");
}
else if(saveInput.value === ''){
  alert("habibi Why empty !!!")
}
//
else {
  savingAmount.innerText =
    parseInt(mainincome.value) * (parseFloat(saveInput.value) / 100);
  remainingBalance.innerText =
    parseInt(balance.innerText) - parseInt(savingAmount.innerText);
}

});