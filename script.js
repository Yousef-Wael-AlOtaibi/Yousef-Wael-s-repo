const button = document.getElementById('check-btn');
const inputElement = document.getElementById('text-input');
const resultElement = document.getElementById('result');
let text = inputElement.value;
let filteredText;
let textArray;
let reversedArray;
let reversedText;
let result;
function filter(text){
  const regex = /[a-zA-Z0-9]+/gi;
  filteredText = text.match(regex).join('');
  console.log(filteredText)
  return filteredText
}
function isPalindrome(str){
  textArray = [...str];
  reversedArray = textArray.reverse();
   reversedText = reversedArray.join('');
   if(reversedText.toLowerCase()===filteredText.toLowerCase()){
     result = `${text} is a palindrome`;
     return result;
   }
  else{
    result = `${text} is not a palindrome`
  }
  }
function resultShowing(){
  resultElement.innerText = '';
  resultElement.innerText = result;
}
button.addEventListener('click',() => {
  text = inputElement.value;
  if(text === ''){
    alert('Please input a value')
  }
  else{
   filteredText = filter(text)
   isPalindrome(filteredText)
   resultShowing(result)
  }
})
document.addEventListener('keydown',event => {
    if(event.key === 'Enter'){text = inputElement.value;
        if(text === ''){
          alert('Please input a value')
        }
        else{
         filteredText = filter(text)
         isPalindrome(filteredText)
         resultShowing(result)
        }}
}
  
)
document.addEventListener('keydown',event => {
  let keyPressed = event.key;
  console.log(keyPressed);
})
