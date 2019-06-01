const lodginBtn = document.getElementById('lodginbtn'); 
const menu = document.getElementById('hidden');
const body = document.getElementById('body');
function toggle(id){
    const a = document.getElementById(id);
    if(a.style.display == 'block'){
        a.style.display = 'none';
    }else{
        a.style.display = 'block';
    }

}