document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('calc').addEventListener('submit', function(evento){
        evento.preventDefault();

        let tempSel = document.getElementById ('time').value;
        
        function conversor (tempSel) {
            let [horas, minutos] = tempSel.split(':');
            return converterParaMinutos(parseInt(horas), parseInt(minutos));
        }
        
        function converterParaMinutos(horas, minutos) {
            return (horas * 60) + minutos;
        }

        let totalMinutosString = conversor (tempSel);

        let distSel = document.getElementById ('distancia').value;

        let calcPace = totalMinutosString / distSel;
        let calPacefor = calcPace.toFixed(2);

        document.getElementById('resultado-valor').innerText = calPacefor;

        document.querySelector ('.resultado').style.display = 'block'

    })
})