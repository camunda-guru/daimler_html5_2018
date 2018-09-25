window.addEventListener('load',function()
{
    var sectionRef=document.getElementById("welcome");
    if(window.localStorage.getItem("FirstName")!==undefined)
        {
      sectionRef.innerHTML="<p> Welcome "+
          window.localStorage.getItem("FirstName")+"!</p>"
        }

    for(var i=0;i<5;i++)
    {
        if(window.localStorage.getItem("photo"+i)!==undefined) {
            //alert("Image exists");
            retrieve(window.localStorage.getItem("photo" + i));
        }
    }
    function retrieve(filename)
    {
        var img = new Image();
        //load event

        img.onload=function(evt)
        {
            sectionRef.appendChild(img);
        }
        img.src=filename;
        img.width=150;
        img.height=150;
    }



})


