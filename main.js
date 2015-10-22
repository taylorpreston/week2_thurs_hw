document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");



console.log(document)



document.getElementById('calculateBtn').addEventListener('click', calc);
function calc(){
  console.log('called calc');
  var numOne = parseInt(document.getElementById('num_one').value);
  var numTwo = parseInt(document.getElementById('num_two').value);
  document.getElementById('answer').innerHTML = numOne + numTwo;
}
calc();


});
