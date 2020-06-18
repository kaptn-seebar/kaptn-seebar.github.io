var re;
var a;
function el(name) {return document.getElementById(name)}

function setup() {el("inp").value = "https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/19037945856/CourseNode/100794278913950/wiki/Index"}
function output(something) {el("content").innerText = something}

var ret;
function wait() {while(el("content").innerText == "Extracting..."){}}
function extract() {
    steal();
}

function steal() {
    output("Extracting...");
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        re = this.responseXML.body;
        output("Complete.");
        analyse();
        draw();
    }
    var pref = "https://cors-anywhere.herokuapp.com/";
    xhr.open("GET", pref + el("inp").value);
    xhr.responseType = "document";
    xhr.send();

    //el("content").innerHTML = response;
}
function spit() {window.alert("f")}
function analyse() 
{
    a = re.getElementsByTagName("a");
    selArray();
}
function selArray() {
    //looks for the keywords "Discussion" and "Data privacy" and crops the array a accordingly
    var dis;
    var dap = 0;
    for (var i = 0; dap == 0; i++)
    {
        var str = getTitle(i);
        if (str == "Discussion") dis = i;
        if (str == "Data privacy") dap = i;
    }
    var newa = new Array(dap - dis -1);
    for (i = dis + 1; i < dap; i++) newa[i - dis - 1] = a[i];
    a = newa;
}


function draw() {
    for (i = 0; i < a.length ; i++) {
        var m = el("output");
        insertRow(m, i);}
}
function getTitle(i) {return a[i].innerText}
function getLink(i) {return a[i].href.replace("cors-anywhere.herokuapp.com", "bildungsportal.sachsen.de")}


function mk(tagname) {return document.createElement(tagname)}
function txt(text) {return document.createTextNode(text)}

function insertRow(m, i)
{
    //create new row.
    var row = mk("p");
    //make a bold entity
    var bold = mk("b");
    var title = txt(getTitle(i));
    bold.appendChild(title);
    var space = txt("      ");
    var linko = txt(getLink(i));
    var br = mk("br");
    var cont = mk("div");
    //extract the page data
    {
        output("Extracting Pages...");
        var xhr = new XMLHttpRequest();
        var link = getLink(i);
        xhr.onload = function() {
            page = this.responseXML.body;
            //finish the row
            cont. innerHTML = page.getElementsByTagName("p")[1].parentElement.innerHTML;
            cont.children[0].style.display = "none";
            if (cont.innerText.search("Vocabulary") != -1) cont.innerHTML ="not defined";
            if (link.search("Special") != -1) cont.innerHTML ="not present";
            row.appendChild(bold);
            row.appendChild(space);
            row.appendChild(linko);
            row.appendChild(br);
            row.appendChild(cont);
            row.appendChild(br);
            row.appendChild(br);
            m.appendChild(row);
        }
        var pref = "https://cors-anywhere.herokuapp.com/";
        xhr.open("GET", pref + link);
        xhr.responseType = "document";
        xhr.send();
    }
}


function pageAna(i) {
    var ps = page.getElementsByTagName("p");
    if (ps.length >= 2)
    return ps[1].innerHTML;
    else return "not available"
}
function test() {window.alert("testtesttest")}