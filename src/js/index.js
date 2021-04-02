


    function changeFontSize(increase) {

        var body = document.body;
        size = 100;
        if (body.style.fontSize !=='')
        var size = parseFloat(body.style.fontSize);

        window.console.log("fun " +size)

        if(increase){
            body.style.fontSize = (size+10)+"%";
        }else{
            body.style.fontSize = (size-10)+"%";
        }
    }

