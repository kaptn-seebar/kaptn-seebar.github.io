function startb() {show("select"); unhide("restart"); initTab(); appRow()}
function restb() {show("start"); hide("restart")}

function pickcustom() {sve("txtId", "none");
sve("termname", "a " + el("inp").value);
show("enter"); unhide("endes");}

function pick() {var index = load("selVal");
sve("txtId", index);
sve("termname", ae(eval(load("names")), index));
show("enter"); unhide("endes");
}
function rep() {window.open("https://www.oxford-royale.com/articles/words-phrases-good-essays/#aId=f4ee043e-0732-4f70-87f4-6dd8f5c0cc03")}
function cont() { if (load("txtId") != "none") {
sve("yrText" , extract("enter")); show("comp");
sel("ex", load("txtId"), len() - 2); move("yrText", "thrText")} else
{show("custom")}}
function edit() {show("enter"); unhide("endes")}
function finish() {show("last")}
function back() {edit()}
function custfin() {finish()}

function elem(x, y) {return el("select").children[1].children[x].children[y]}
function appRow() {
var old = el("select").children[1].children[2];
old.parentElement.appendChild(old.cloneNode(true));
}
function tabButton(x) {elem(x,1).innerHTML ='<span ondblclick="window.top.liaGoto(112);"> </span><button onclick="document.getElementById(&quot;callName&quot;).innerText = &quot;pick&quot;;document.getElementById(&quot;selVal&quot;).innerText =' + (x - 2).toString() + ';
eval(document.getElementById(&quot;scri&quot;).innerText)"><span ondblclick="window.top.liaGoto(112);">Select</span></button><span ondblclick="window.top.liaGoto(112);">      </span>'}

function len() {return el("select").children[1].children.length}
function initTab() {var l = len();
var names = new Array(l - 2);
for(var i = 2; i < l; i++) {tabButton(i);
names[i - 2] = "'a " + elem(i, 0).innerText + "'";
sve("names", "[" + names.toString() + "]");