let relogio = () => {
    let getTimeFromSeconds = (seconds) => {
        const data = new Date(seconds * 1000)
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        })
    }
    
    console.log(getTimeFromSeconds(10_000));
    
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    
    let seconds = 0;
    let timer;
    
    let startsClock = () => {
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds)
        }, 1000)
    }
    
    
    document.addEventListener('click', (e) => {
        const el = e.target
    
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            startsClock()
        }
    
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
        }
    
    })    
}

relogio()