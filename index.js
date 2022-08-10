function randPass() {
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("btn")
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let password1 = ""
let password2 = ""
let passwordLength = 15


for (let i = 0; i < passwordLength; i++){
         let ranpass1 = characters[Math.floor(Math.random() * characters.length)]
        let ranpass2 = characters[Math.floor(Math.random() * characters.length)]
            password1 +=  ranpass1
          password2 += ranpass2
          
    }
div1.textContent = password1
div2.textContent = password2
    
            
}


