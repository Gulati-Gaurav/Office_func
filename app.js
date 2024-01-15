document.querySelector('.btn.btn-primary').addEventListener('click',bracketRemove);
document.querySelector('.btn.btn-success').addEventListener('click', sr);
document.querySelector('.btn.btn-warning').addEventListener('click', toolSr);
document.querySelector('.btn.btn-info').addEventListener('click', tool);
document.querySelector('.btn.btn-dark').addEventListener('click', copy);


function bracketRemove(e){

    let input = document.querySelector('.form-control.input').value;
    let output = document.querySelector('.form-control.output');
    input = input.replaceAll("&gt;", ">");
    input = input.replaceAll("&lt;", "<");
    
    output.value = input;

    // e.preventDefault();
}

function sr() {
    bracketRemove();
    let input = document.querySelector('.form-control.input').value;
    let output = document.querySelector('.form-control.output');
    let firstIndex = input.indexOf("<SearchResult>");
    let lastIndex = input.indexOf("</SearchResult>");
    console.log(firstIndex, lastIndex);
    output.value = input;
    if(firstIndex!=-1) output.value = input.substr(firstIndex, lastIndex+15);
}

function tool() {
    
}

function toolSr() {
    
}


function copy() {
    let output = document.querySelector('.form-control.output');
    navigator.clipboard.writeText(output.value);
}

// sdcsd &gt; sdj &lt; skdjv sd &gt; sd &lt; <SearchResult>  asddsfa </SearchResult>