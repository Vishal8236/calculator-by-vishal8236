//with the help of function we can get value from textbox
function getNumber(getN){
    document.getElementById('text-box').value+=getN
}

//this function for clear text box and answer box
function clearTextBox()
{
    document.getElementById('text-box').value = ''; //with this line of code we can clear the text box screen
    document.getElementById('answer-box').innerHTML = '';
}

//generate result
function genrateResult()
{
    let all_number = document.getElementById('text-box').value
    var r1 = eval(all_number)
    document.getElementById('answer-box').innerHTML = " => "+r1
}