"use strict";
var num=1;
function nextComment()
{
    
    var comment = parseFloat(document.getElementsByClassName("current")[0].id);
    var current = document.getElementsByClassName("current")[0];
    var n = comment+num;
    if(n>4)
        {
            n = 1;
        }
    var next = document.getElementById(n);
    current.classList.remove("current");
    next.classList.add("current");
}
function prevComment()
{
    var comment = parseFloat(document.getElementsByClassName("current")[0].id);
    var current = document.getElementsByClassName("current")[0];
    var n = comment-num;
    if(n<1)
        {
            n = 4;
        }
    var prev = document.getElementById(n);
    current.classList.remove("current");
    prev.classList.add("current");
}
var ctarget=[];
function getCategory(e)
{
    var cname = e.target.className;
    var cobox = document.getElementById("containerBoxs");
    var key = cname.split(" ");
    for(var i=1;i<=cobox.childElementCount;i++)
        {
            var p = document.getElementById("p"+i);
            p.classList.remove("current");
            ctarget[i]= p.className.split(" ");
            for(var j=0;j<=ctarget[i].length-1;j++)
                {
                    if(key[0]==ctarget[i][j])
                        {
                            p.classList.add("current");
                        }
                    else
                        {
                            p.classList.add("hide");
                        }
                }
        }
}