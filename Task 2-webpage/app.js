const darkmode = document.getElementById('b1');
darkmode.addEventListener('click' ,function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 });


 const myFunction = function(){
    const x = document.getElementById('pwd');
    const y = document.getElementById('eyeOpened');
    const z = document.getElementById('notEye');


    if(x.type === 'password'){
        x.type = 'password';
        y.style.display = 'none';
        z.style.display = 'block';
    }
    else{
        x.type = 'text';
        y.style.display = 'block';
        z.style.display = 'none';

    }
    var ele = this.document.body;
    ele.classList.toggle('eyeOpened');


 }


 
function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(pwd)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}