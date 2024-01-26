document.querySelector('.btn.btn-primary').addEventListener('click',bracketRemove);
document.querySelector('.btn.btn-success').addEventListener('click', sr);
document.querySelector('.btn.btn-warning').addEventListener('click', toolSr);
document.querySelector('.btn.btn-info').addEventListener('click', tool);


function bracketRemove(){
    let input = document.querySelector('.form-control.input').value;
    let output = document.querySelector('.form-control.output');

    input = input.replaceAll("&gt;", ">");
    input = input.replaceAll("&lt;", "<");
    
    output.value = input;
    copySessionId();
    copy();
}

function sr() {

    let input = document.querySelector('.form-control.input').value;
    let output = document.querySelector('.form-control.output');

    input = input.replaceAll("&gt;", ">");
    input = input.replaceAll("&lt;", "<");
    
    output.value = input;
    copySessionId();
    
    let firstIndex = output.value.indexOf("<SearchResult>");
    let lastIndex = output.value.indexOf("</SearchResult>") + 15;

    firstIndex!=-1 ? output.value = output.value.substring(firstIndex, lastIndex) : output.value = "No Search Result Found";
    copy();
}

function tool() {
    
}

function toolSr() {
    
}

function copy() {
    let output = document.querySelector('.form-control.output');
    navigator.clipboard.writeText(output.value);
}

function copySessionId()
{
    let output = document.querySelector('.form-control.output');
    let firstIndex = output.value.indexOf("<SessionId>")+11;
    let lastIndex = output.value.indexOf("</SessionId>");
    console.log(firstIndex, lastIndex);
    navigator.clipboard.writeText(output.value.substring(firstIndex, lastIndex));
}