
window.onload = function() {
    document.getElementById("inputBox").focus();
};

let inputBox=document.getElementById('inputBox');
let msgBox=document.getElementById('msgBox');
document.body.style.transition='3s';
inputBox.addEventListener('keyup',(e)=>{
    e.value;
    console.log(e);
    
    if(inputBox.value.length<=4){
        document.body.style.background='lightgrey';
        msgBox.innerHTML='Password Strength Is Weak';
        inputBox.style.border='3px dashed orangered';
        msgBox.style.color='orangered';
    }
    else if(inputBox.value.length<=8){
        document.body.style.background='coral';
        msgBox.innerHTML='Password Strength Is Average';
        msgBox.style.color='lightgreen';
        inputBox.style.border='3px dashed lightgreen';
    }
    else if(inputBox.value.length<=12){
        document.body.style.background='violet';
        msgBox.innerHTML='Password Strength Is Strong';
        msgBox.style.color='olive';
        inputBox.style.border='3px dashed olive';
    }
    else if(inputBox.value.length>12 && inputBox.value.length<=15){
        document.body.style.background='maroon';
        msgBox.innerHTML='Password Strength Is Very Strong';
        msgBox.style.color='lime';
        inputBox.style.border='3px dashed lime';
    }
    else{
        alert(`Your Password Exceeds Limit!...`);
        msgBox.innerHTML='Try Again!..';
        inputBox.value='';
        document.body.style.transform='scale(.5)';
        document.body.style.opacity=0;
        document.body.style.background='snow';
    }
})
