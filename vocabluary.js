var txtId;
var yrText;
var termnames;
function startb() {show("select"); unhide("restart")}
function restb() {show("start"); hide("restart")}

function pickcustom() {txtId = "none";
sve("termname", "a " + el("inp").value);
show("enter"); unhide("endes");}

function pick(index) {
txtId = index;
sve("termname", termnames[index]);
show("enter"); unhide("endes");
}
function choose(i) {
    txtId = "lib";
    sve("termname", getTitle(i));
    show("enter"); unhide("endes");
    pageEx(i);
}






function rep() {window.open("https://www.oxford-royale.com/articles/words-phrases-good-essays/#aId=f4ee043e-0732-4f70-87f4-6dd8f5c0cc03")}
function cont() {
    if (txtId != "none") {
yrText = extrac("enter"); show("comp");
sve("thrText", yrText);
} else {show("custom")}}
function edit() {show("enter"); unhide("endes")}
function finish() {show("last")}
function back() {edit()}
function custfin() {finish()}

function elem(x, y) {return el("select").children[1].children[x].children[y]}
function appRow() {
var old = el("template").children[1].children[1];
el("select").children[1].appendChild(old.cloneNode(true));
}
function tabButton(x, funcStr) {elem(x,1).innerHTML ='<span ondblclick="window.top.liaGoto(112);"> </span><button onclick="' + funcStr + '"><span ondblclick="window.top.liaGoto(112);">Select</span></button><span ondblclick="window.top.liaGoto(112);">      </span>'}

function len() {return el("select").children[1].children.length}
function initTab() {var l = len();
termnames = new Array(l - 2);
for(var i = 2; i < l; i++) {tabButton(i, "pick(" + (i - 2).toString() + ")");
termnames[i - 2] = "a " + elem(i, 0).innerText;
}}

function ext() {extract()}
