let filterInput = document.getElementById('filerInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
        let filerValue = document.getElementById('filterInput').value.toUpperCase();

        let ul = document.getElementById('names');

        let li = ul.querySelectorAll('li.collection-item');

        for(let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName('a')[0];
            
        }


}   