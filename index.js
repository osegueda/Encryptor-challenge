/*Auto typing title*/ 
document.addEventListener("DOMContentLoaded", function() {
    const encryptorText = ['Encrypt!', 'A message', 'Or', 'a single word'];
    const textTyping = new AutoTyping('.title', encryptorText, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    textTyping.start()
});

/*const elements */
const encryptText = document.getElementById("toencrypt")
const encryptResultText = document.getElementById("encrypt")
const errorMessage = document.getElementById("error__message")
const imageNf = document.getElementById("image__nf")
 // Expresiones regulares para detectar acentos y mayúsculas
const regexAcentos = /[ÁÉÍÓÚáéíóú]/;
const regexMayusculas = /[A-Z]/;
// const Buttons
const buttonEncrypt = document.getElementById("button__encrypt")
const buttonDecrypt = document.getElementById("button__decrypt")
const btnCopy = document.querySelector(".button__copy");
const buttonCopy = document.getElementById("button__copy")

if(document.getElementById("toencrypt").value.trim() == '')
    {
        errorMessage.style.display ="block";
        imageNf.style.display ="block";
    }

encryptText.addEventListener("input", () => {
    // Asigna el valor del primer input al segundo input
    encryptResultText.value = encryptText.value;

    if(encryptText.value.trim() == ''){

        encryptResultText.style.display ="none";
        errorMessage.style.display ="block";
        imageNf.style.display ="block";
        btnCopy.setAttribute('disabled', 'true');;
    }else{
        btnCopy.removeAttribute("disabled");
        encryptResultText.style.display ="block";
        errorMessage.style.display ="none";
        imageNf.style.display ="none";
    }

});
const pattern = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}

//para encriptar
const encryptFun = () => {
    const value = encryptText.value;
    
    const tieneAcentos = regexAcentos.test(value)
    const tieneMayusculas = regexMayusculas.test(value);

    //verifica que no tenga acentos o mayusculas
    if(tieneAcentos !== true && tieneMayusculas !== true){
       //some 
       const text = encryptText.value.split('')
       const textEncrypted = text.map(letra => {
           return pattern.hasOwnProperty(letra) ? pattern[letra] : letra
       }).join('')
   
       console.log(textEncrypted)
       encryptResultText.value = textEncrypted
    }else{
        alert("Su mensaje tiene acentos o Mayusculas!")

    }
    
}

buttonEncrypt.onclick = encryptFun

//para Desencriptar

const decryptFun = () => {
    console.log("desencriptado ??",encryptText.value)
    return encryptResultText.value = encryptText.value
}
buttonDecrypt.onclick = decryptFun

buttonCopy.onclick = () =>{
    navigator.clipboard.writeText(encryptResultText.value)
}



