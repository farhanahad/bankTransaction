// function doubleIt(num){
//    const result=num*2;
//    return result;
// }
function getInputValue(inputId){
   const inputField=document.getElementById(inputId);
   const inputAmountText=inputField.value;
   const amountValue=parseFloat(inputAmountText);
   //clear input field

   inputField.value='';
   return amountValue;
}

function updateTotalField(totalFieldId,amount){
   //debugger;
   const totalElement=document.getElementById(totalFieldId);
   const totalText=totalElement.innerText;

   const previousTotal=parseFloat(totalText);

   totalElement.innerText=previousTotal + amount;
}
function getCurrentBalance(){
   const balanceTotal=document.getElementById('balance-total');
   const  balanceTotalText=balanceTotal.innerText;
   const previousBalanceTotal=parseFloat(balanceTotalText);
   return previousBalanceTotal;
}
function updateBalance(amount,isAdd){
      const balanceTotal=document.getElementById('balance-total');
//   const  balanceTotalText=balanceTotal.innerText;
//   const previousBalanceTotal=parseFloat(balanceTotalText);
const previousBalanceTotal= getCurrentBalance();
  if(isAdd==true){
   balanceTotal.innerText=previousBalanceTotal + amount;
  }
  else{
   balanceTotal.innerText=previousBalanceTotal - amount;
  }
}

document.getElementById('deposit-button').addEventListener('click',function(){
   // console.log('deposit button clicked');

   // const depositInput=document.getElementById('deposit-input');
   // const depositAmountText=depositInput.value;
   // const depositAmount=parseFloat(depositAmountText);

   //console.log(depositAmount);

   const depositAmount= getInputValue('deposit-input');
  
   if(depositAmount>0 ){
      updateTotalField('deposit-total',depositAmount);
      updateBalance(depositAmount,true)
   }

   //get & update deposit total

   // const depositTotal=document.getElementById('deposit-total');
   // const depositTotalText=depositTotal.innerText;

   // const previousDepositTotal=parseFloat(depositTotalText);

   // depositTotal.innerText=previousDepositTotal + depositAmount;

   //console.log(depositTotalText);
  

   //update balance

   // const balanceTotal=dcocument.getElementById('balance-total');
   // const balanceTotalText=balanceTotal.innerText;
   // const previousBalanceTotal=parseFloat(balanceTotalText);
   // balanceTotal.innerText=previousBalanceTotal+ depositAmount;

  
   


   
})

//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
  // console.log('withdraw clicked');
//   const withdrawInput=document.getElementById('withdraw-input');
//   const withdrawAmountText= withdrawInput.value;
 
//   const withdrawAmount=parseFloat(withdrawAmountText);

 //console.log(withdrawAmountText);

 const withdrawAmount=getInputValue('withdraw-input')
 const currentBalance= getCurrentBalance();
 if(withdrawAmount>0 && withdrawAmount<currentBalance ){
   updateTotalField('withdraw-total',withdrawAmount)
   updateBalance(withdrawAmount,false);
 }

 if (withdrawAmount > currentBalance) {
   console.log('You can not withdraw more than what you have in your account');
}

  //get & update withdraw Total

//   const withdrawTotal=document.getElementById('withdraw-total');
//   const previousWithdrawTotalText=withdrawTotal.innerText;
//   const previousWithdrawTotal=parseFloat(previousWithdrawTotalText);

//   withdrawTotal.innerText=previousWithdrawTotal+withdrawAmount;



  //update balance after withdraw

//   const balanceTotal=document.getElementById('balance-total');
//   const  balanceTotalText=balanceTotal.innerText;
//   const previousBalanceTotal=parseFloat(balanceTotalText);

//   balanceTotal.innerText=previousBalanceTotal - withdrawAmount;



  //clear withdraw input field
//   withdrawInput.value='';


})