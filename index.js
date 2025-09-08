const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function genPass() {
    let pass1 = ""

    for ( let i = 0; i < 12; i++) {
        if (pass1.length < 12) {
            let n = Math.floor(Math.random() * characters.length) 
            pass1 += characters[n]

        }
    }

    let passWoo = document.getElementById("passwoo")
    passWoo.textContent = pass1;

        let pass2 = ""

    for ( let ii = 0; ii < 12; ii++ ) {
        if (pass2.length < 12) {
            let nn = Math.floor(Math.random() * characters.length) 
            pass2 += characters[nn]

        }
    }

    let passWo = document.getElementById("passwo")
    passWo.textContent = pass2;
}

function copy(elementId) {
    const text = document.getElementById(elementId).textContent;
    const messageDiv = document.getElementById("copy-message");
    if (text.trim().length > 0) {
        navigator.clipboard.writeText(text);
        messageDiv.textContent = "Copied!";
    } else {
        messageDiv.textContent = "Nothing to copy!";
    }
    setTimeout(() => { messageDiv.textContent = ""; }, 2000);
}