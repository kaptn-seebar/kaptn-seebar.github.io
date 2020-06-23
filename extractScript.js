var re;
var a;
var baselink;
var sourcelink;
var drawn = false;
function notDrawn() {drawn = false}
function setBaseLink(bl) {baselink = "https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/19037945856/CourseNode/" + bl + "/wiki/"}
function setSource(srce) {sourcelink = "https://kaptn-seebar.github.io/" + srce}
function output(something) {//el("output").innerText = something
}

var ret;
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
        drawTable();
        hide("wait");
    }
    var pref = "https://cors-anywhere.herokuapp.com/";
    xhr.open("GET", pref + sourcelink);
    xhr.responseType = "document";
    xhr.send();

    //el("content").innerHTML = response;
}
function spit() {window.alert("f")}
function analyse() 
{
    a = re.getElementsByTagName("a");
    window.alert(a.length);
    selArray();
}
function selArray() {
    //looks for the keywords "Discussion" and "Data privacy" and crops the array a accordingly
    var dis = 0;
    var dap = 0;
    for (var i = 0; dap == 0; i++)
    {
        var str = getRawTitle(i);
        if (str == "Discussion") dis = i;
        if (str == "«") dap = i;
    }
    var newa = new Array(1);
    var j = 0;
    for (i = dis + 1; i < dap; i++)
    {
        if (getLink(i).search("Special") == -1 && exclude("Vocabulary", i) &&exclude("Index", i)) {
        newa[j] = a[i];
        j++; newa.push(a[0])}
    }
    newa.pop();
    a = newa;
}

function exclude(name, i) {return (getTitle(i).search(name) == -1)}
function draw() {
    for (i = 0; i < a.length ; i++) {
        var m = el("list");
        insertRow(m, i);}
}
function getTitle(i) {return a[i].children[0].innerHTML}
function getRawTitle(i) {return a[i].innerText}
function getLink(i) {return baselink + getTitle(i)}


function mk(tagname) {return document.createElement(tagname)}
function txt(text) {return document.createTextNode(text)}


function pageEx(i){
        output("Extracting Pages...");
        var xhr = new XMLHttpRequest();
        var link = getLink(i);
        xhr.onload = function() {
            page = this.responseXML.body;
            //finish the row
            var cont = el("ex");
            //cont.innerHTML = page.innerText;
            cont. innerHTML = page.getElementsByTagName("h3")[3].parentElement.innerHTML;
            if (cont.innerText.search("Vocabulary") != -1) cont.innerHTML ="not defined";
        }
        var pref = "https://cors-anywhere.herokuapp.com/";
        xhr.open("GET", pref + link);
        xhr.responseType = "document";
        xhr.send();
    }


function pageAna(i) {
    var ps = page.getElementsByTagName("p");
    if (ps.length >= 2)
    return ps[1].innerHTML;
    else return "not available"
}

function drawTable() {
    if (drawn) return;
    var p = len();
    for (var i = 0; i < a.length; i++)
    {
        appRow();
        elem(p, 0).innerText = getTitle(i);
        tabButton(p, 'choose(' + i.toString() + ')');
        p++;
    }
    drawn = true;
}



function getPage() {
    var x = el("frame");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    window.alert(y.body.getElementsByTagName("a").length);
  }