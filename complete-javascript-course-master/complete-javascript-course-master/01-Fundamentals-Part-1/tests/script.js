const age = window.prompt('Digite aqui a sua idade: ')
if(age >= 18) {
    window.alert(`Você já tem idade para dirigir 🚗`)
} else {
    const anosFaltam = 18 - age
    window.alert(`Você ainda é muito jovem para dirigir. Espere ${anosFaltam} anos.`)
}