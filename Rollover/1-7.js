// This retrieves the part of the document with Id = 'btn' for use
const btN = document.getElementById('btn')

// handle what happens when we click the button
btN.onclick = function () {
  console.log('button clicked.')
  // this returns all the radio buttons (rbs) for checking
  const rbs = document.querySelectorAll('input[name="month"]')
  let result
  for(var rb of rbs ) {
    result = rb.value
    if(rb.checked && rb.value =='May'){
      document.getElementById('win').innerHTML = 'You chose ' + result + '. WINNER WINNER CHICKEN DINNER!'
      document.getElementById('winlink').innerHTML = 'Click here to receive your prize!!'
    }
    else if (rb.checked) {
      document.getElementById('win').innerHTML = 'You chose '+result+'. I thought we were friends!'
    }
  }
}