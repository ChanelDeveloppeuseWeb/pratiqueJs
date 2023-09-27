let message = "votre statut matrimoinial :";
let endMessage ;
let statut= confirm("etres vous celibataire?")
endMessage = statut ? 'celibataire' : 'marier'
alert(`${message} ${endMessage} `)