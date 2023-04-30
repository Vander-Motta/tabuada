function contar(){
    let ler = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    
    if(ler.value.length == 0){
        window.alert('Por favor Digite um numero!')
    } else {
        let num = Number(ler.value);
        let c = 1
        tab.innerHTML = '';
        while( c <= 10) {
           let item = document.createElement('option'); 
           item.text = `${num} x ${c} = ${num*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
           c++
        }

    }
}