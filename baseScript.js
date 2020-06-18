function setupButtons (names) {
    names.forEach(name => {
        let obj = document.getElementById(name);
        if (obj != null) {
        obj.onclick = function(){};
        obj.setAttribute('onclick', 'document.getElementById("callName").innerText = "' + name + '"; eval(document.getElementById("scri").innerText)');}});
}

function callName() {
let callObj = el("callName");
if (callObj != null) {
eval(callObj.innerText + "()")}}

function show(secname) {
    var snames = ["start", "select", "enter", "endes", "comp", "last", "custom"];
    var i;
    for(i = 0; i < snames.length; i++) {
    var name = snames[i]; hide(name)}
    unhide(secname);
}
    
function unhide(name) {
    var obj = el(name);
    if (obj != null) {obj.style.display = "block"}}
    function hide(name) {
    var obj = el(name);
    if (obj != null) {obj.style.display = "none"}}
    
function el(name) {return document.getElementById(name);}
    
function sve(name, value) {el(name).innerHTML = value;}
function load(name) {return el(name).innerHTML}
function move(from, to) {sve(to, load(from))} 
    
function sel(basename, index, count) {
    for (var i = 0; i < count; i++) {
        var str = basename + i.toString();
        if (index == i) {
            unhide(str);} else {hide(str)}}}
    
function ae(array, index) {return array[index]}
function extract(name) {return el(name).children[0].children[0].children[0].children[1].children[3].innerText}
    