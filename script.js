document.querySelector('.busca').addEventListener('submit',async(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if ( input !== ""){
        showWarning("Carregando...Não seja ansioso men")

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=368f27fac3502300e5858ba5d5954938&units=metrics&lang=pt_br`
    
    let result = await fetch(url)
    let json = await result.json()

    }else{ showWarning("Por favor cabra, me diga a cidade que deseja consultar o clima")}

})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}
