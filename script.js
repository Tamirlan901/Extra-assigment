const message = document.getElementById("message")
const button = document.getElementById("btn")

var charCount=function(text){
    var new_text=text.replace(/[\.,!?; ]*/g, '');
    return new_text.length;
  }
  function charCount(text) {
    return text.replace(/[\.,!?; ]*/g, '').length;
  }
  
  function g(el) {
    return document.getElementById(el);
  }
  
  g('message').onkeyup = function() {
    g('label').innerHTML = charCount(this.value);
  }
  
  
 
        
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

// Random phrases and its pictures (represented as an array of objects)

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]
btn.onclick=function(){if(!document.getElementById('picture'))
{var image=document.createElement('picture');
image.id="picture";
randomPhrasesAndPictures
document.body.appendChild(image)
document.getElementById("message").innerHTML=randomPhrasesAndPictures}}