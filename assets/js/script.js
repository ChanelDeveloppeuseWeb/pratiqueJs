// let number1 = "";
// let number2 = 5
// let number3 = 8

// let result = number1 == number3
//     console.log(result)

// if (confirm('pour acceder a ce site vous devez etre inscrire.cliquer sur OK pour etre instre')){
//     alert("inscription en cours")
// }else("vous devez etre connecter")
let floor = parseFloat(prompt("entrez l etage ou l ascenseur doit se rende (de -2 a 30):"))
if (floor == 0){
    alert("vous vous trouvez deja au rez de chausser")
}else if(-2 <= floor && floor <=30){
    alert (`Direction l\'étage n° ${floor } + ' !'`)
}else{
    alert("L'étage spécifié n'existe pas.");
}
