

function styleCss() {
    let preAll = document.querySelectorAll('pre.code.css')
    for(i=0;i<preAll.length;i++){
        let pre = preAll[i];
        let txt = pre.textContent;
        txt = txt.replaceAll("\:","</span>:")
        txt = txt.replaceAll("\:",":<span class=\"value\">")
        txt = txt.replaceAll("\;","</span>;<span class=\"property\">")
        txt = txt.replaceAll("      "," ")
        txt = txt.replaceAll("  .","  <span class=\"selector\">.");
        txt = txt.replaceAll("{","</span>{<span class=\"property\">")
        pre.innerHTML= txt;
    }
}
function styleHTML(){
    let preAll = document.querySelectorAll('pre.code.html');
    for(i=0;i<preAll.length;i++){
        let pre = preAll[i];
        pre.textContent=pre.innerHTML.toString();
        let txt = pre.textContent;
        txt = txt.replaceAll("<","&lt")
        txt = txt.replaceAll(">","&gt")
        // className = txt.substring(txt.indexOf("\"")+1,txt.indexOf("\"",txt.indexOf("\"")+1));
        txt = txt.replaceAll("=\"",` = \"<span id=\"name\"><b>`)
        txt = txt.replaceAll("\"&gt","</b></span>\"&gt")
        txt = txt.replaceAll("class","<span class=\"class\">class</span>")
        txt = txt.replaceAll("div","<span class=\"element\">div</span>")
        txt = txt.replaceAll("      "," ") 
        pre.innerHTML = txt;
    }
}


styleCss()
styleHTML()