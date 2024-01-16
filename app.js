document.querySelector('.btn.btn-primary').addEventListener('click',bracketRemove);
document.querySelector('.btn.btn-success').addEventListener('click', sr);
document.querySelector('.btn.btn-warning').addEventListener('click', toolSr);
document.querySelector('.btn.btn-info').addEventListener('click', tool);
// document.querySelector('.btn.btn-dark').addEventListener('click', copy);


function bracketRemove(){
    let input = document.querySelector('.form-control.input').value;
    let output = document.querySelector('.form-control.output');

    input = input.replaceAll("&gt;", ">");
    input = input.replaceAll("&lt;", "<");
    
    output.value = input;
    copy();
}

function sr() {
    bracketRemove();
    let input = document.querySelector('.form-control.output').value;
    let firstIndex = input.indexOf("<SearchResult>");
    let lastIndex = input.indexOf("</SearchResult>") + 15;

    console.log(firstIndex, lastIndex);
    let output = document.querySelector('.form-control.output');

    firstIndex!=-1 ? output.value = input.substring(firstIndex, lastIndex) : output.value = input;
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

// sdcsd &gt; sdj &lt; skdjv sd &gt; sd &lt; <SearchResult>  asddsfa </SearchResult>sdcsd &gt; sdj &lt; skdjv sd &gt; sd &lt; <SearchResult>  asddsfa </SearchResult>