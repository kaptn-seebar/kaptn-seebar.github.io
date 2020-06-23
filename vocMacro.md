<!--
author:   Daniel Hoffmann

email:    LiaScript@web.de

version:  0.0.1

language: en

narrator: US English Female

@insc
<script>
        //all buttons shall be initialised
    setupButtons(["startb", "restb","pickcustom", "rep", "edit", "finish", "test", "back", "custfin", "ext"]);
setupDivs(["start", "select", "enter", "endes", "comp", "last", "custom"]);
</script>
@end

@cust1: Custom: <br><textarea id="inp"></textarea>
@cust2: <button id="pickcustom">Select</button>


@stuff
<div id="restart" style="display: none; text-align: right">
    <button id="restb"> Restart </button></div>
<div id="start" style="display:block">
    In this course, you will practise to describe all your favourite technical terms in English.<br>
    <button id="startb">Start</button>
</div>
<div style="display:none" id="template">
    
| Template |     |
| -------- | --- |
|          |     |

</div>

<div id="select" style="display:none">
Pick your favourtite technical term. (Press Ctrl+F to search)


| Technical Term |        |
| -------------- | ------ |
| @cust1         | @cust2 | 

<p id="wait"> Downloading Library... </p>
</div>

<div id="endes" style="display:none">
    Write a text explaining what <b id="termname">your Term</b> means.<br> Use at least five words or phrases from the <button id="rep">
    Phrase Repository
    </button>
</div>
<div id="enter" style="display:none">
```    +Enter Your Text

    
    
    
    
```
<script>
cont();
"Found text in memory"
</script>

(press Play to continue)
</div>
<div id="custom" style="display:none">
    Since you chose a custom favourite term, there is not yet an example text. However, if your text is somewhat presentable, send it to us so that we can provide future users with your text as an example. [insert contact data here]
<button id="back">Back</button><br><button id="custfin">Finish</button>
</div>

<div id="comp" style="display:none">
    Now you can compare your result.<br><br>
    **Your Text:**<br>
    <p id="thrText" style="border-style: solid">
        This is your text.
        </p><button id="edit">Edit
    </button><br><br>
    **Example Text:**<br><br>
<div id = "ex" style="border-style: solid">    </div>
<br><button id="finish">Finish</button></div>
<div id="last" style="display:none">
    Finished! <br>
    Click "Restart" to describe another term.<br>
    <br><br>**Credits**<br>
    Repository of useful phrases: <a href="https://www.oxford-royale.com/articles/words-phrases-good-essays/#aId=f4ee043e-0732-4f70-87f4-6dd8f5c0cc03" target="_blank"> Oxford University </a><br>
    Example texts: Bachelor students of University Freiberg<br>
    Concept: Dr. Jacob
</div>
@end
-->