function rect(){
    let l = document.getElementById('l').value 
    let w = document.getElementById('w').value 
    let area=l*w
    document.getElementById('ans').innerHTML='The area of a rectangle is' +area;
}