document.getElementById('adicionar').addEventListener('click',function() {
     const itemSelecionado = document.getElementById('item').value; 
    
    if(itemSelecionado) {
        const listaCompras = document.getElementById('lista-compras');
        const novoItem = document.createElement('li');
        novoItem.textContent = itemSelecionado; 
        listaCompras.appendChild(novoItem);
    }
    });

    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('service-worker.js')
        .then(() =>{
            console.log('Service Worker registrado com sucesso');
        })
        .catch((error) => {
            console.log('Falha ao registrar o Service Worker:',error);
        });
    }
