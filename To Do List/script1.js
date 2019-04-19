var addbtn=document.getElementById("addbtn");
var input=document.getElementById("input");
var div=document.getElementById("div");

var tasks=[];
var id=0;

addbtn.onclick=function()
                {
                    createArray();
                    createList();
                    id++;
                    console.log(tasks);
                }

function createArray()
{
    var obj=new Object;
    obj.id=id;
    obj.desc=input.value;

    tasks.push(obj);
}

function createList()
{
    div.innerHTML="";
    var div1=document.createElement("div");

    for(let i=0;i<tasks.length;i++)
    {
        var label1=document.createElement('label');       
        label1.innerHTML=(i+1)+'.'+ tasks[i].desc;
        div1.appendChild(label1);

        var delbtn=document.createElement("button");
        delbtn.innerHTML="X";
        div1.appendChild(delbtn);
        div1.appendChild(document.createElement("br"));

        delbtn.onclick=function()
                        {
                            delFunction(i);
                        };

    } 

    div.appendChild(div1);

}

function delFunction(i)
{
    tasks.splice(i,1);
    createList();
}