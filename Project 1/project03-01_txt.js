/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Edward Dana
      Date:  3/5/2024  

      Filename: project03-01.js
*/

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }


 menuItems = document.getElementsByClassName("menuItem")

 for (let i = 0; i < menuItems.length; i++){
      console.log(menuItems[i])
      menuItems[i].addEventListener("click", calcTotal);
 }

 function calcTotal() {
      orderTotal = 0;
      for (i = 0; i < menuItems.length; i++){
            if (menuItems[i].checked){
            orderTotal += Number(menuItems[i].value);
            }
      }
      document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal)
 }


