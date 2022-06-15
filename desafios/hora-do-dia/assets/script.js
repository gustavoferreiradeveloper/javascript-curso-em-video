/* Função carrega junto da página com o horário atualizado */

function toCharge(){

    /* Variáveis para pegar a hora local do nosso PC */

    let date = new Date();
    let hour = date.getHours();

    /* Function criada para adicionar mais um 0 a esquerda quando os minutos fores menores que 10 */

    function addZero(i) {
        if(i < 10) {i = '0' + i}
        return i
    }
    /* Variável criada para adicionar os minutos também */
    let minutes = addZero(date.getMinutes());

    /* Comando para adicionar na nossa DIV HTMl a frase com o horário atual */

    currentTime.innerHTML = `Agora são ${hour}h${minutes}.`;

    /* Condições para que o código de a mensagem de saudação certa mediante o horário proposto */
    
    if(hour >= 0 && hour < 12){
        /* Mensagem de Bom Dia */
        photo.src = 'assets/manha.jpg';
        document.body.style.backgroundColor = '#FBE5A9';
    }else if(hour >= 12 && hour <= 18){
        /* Mensagem de Boa Tarde */
        photo.src = 'assets/tarde.jpg';
        document.body.style.backgroundColor = '#FF9B02';
    }else{
        /* Mensagem de Boa Noite */
        photo.src = 'assets/noite.jpg';
        document.body.style.backgroundColor = '#081C1D';
    }
}