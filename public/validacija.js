let form = document.getElementsByTagName('form');
if(form.length !=  0){
    form = form[0];

    form.addEventListener('submit', function(event){
        const dozvola = document.getElementById('dozvola');
        const td = dozvola.value;
        if(td.length !== 5){
            window.alert(`Dozvola mora da sadrzi tacno 5 cifara`);
            event.preventDefault();
            return;
        }
        for (let i = 0; i < td.length; i++) {
            if (!isNumeric(td[i])) {
                console.log(`Svi karakteri moraju biti cifre`);
                event.preventDefault();
                return;
            }
        }

          function isNumeric(char) {
            return !isNaN(char) && isFinite(char);
        }
        
        const broj = document.getElementById('telefon');
        const tel = broj.value;
        if(tel.length !== 10){
            window.alert(`Broj telefona mora da sadrzi tacno 10 cifara`);
            event.preventDefault();
            return;
        }
        for (let i = 0; i < tel.length; i++) {
            if (!isNumeric(tel[i])) {
                window.alert(`Svi karakteri moraju biti cifre`);
                event.preventDefault();
                return;
            }
        }

        const datum = document.getElementById('datum_rodjenja');
        const d = datum.value;

        const parse = new Date(d);
        const currentDate = new Date();

        if(parse >= currentDate){
            window.alert(`Datum rodjenja ne moze biti sadasnji niti buduci`);
            event.preventDefault();
            return;
        }

    })
}