var divs;
function setupButtons (names) {
    names.forEach(name => {
        let obj = document.getElementById(name);
        if (obj != null) {
        obj.onclick = function(){};
        obj.setAttribute('onclick', name + "()");}});
}


function setupDivs(inDivs)  {divs = inDivs;}

function show(secname) {
    var snames = divs;
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
function extrac(name) {return el(name).children[0].children[0].children[0].children[1].children[3].innerText}
    