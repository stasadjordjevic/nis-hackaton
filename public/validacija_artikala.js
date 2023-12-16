let form1 = document.getElementsByTagName('form');
if(form1.length !=  0){
    for(let i=0;i<form1.length;i++){
        console.log(i);
        form=form1[i];
        form.addEventListener('submit', function(event){
            const imam = document.getElementById('bodovi');
            const potrebno = document.getElementById('indikator');
    
            
            console.log(imam);
            console.log(potrebno);
            
            if(potrebno > imam){
                window.alert(`Nemate dovoljno bodova za izabran artikal`);
                event.preventDefault();
                return;
            }
        })
    }
}
