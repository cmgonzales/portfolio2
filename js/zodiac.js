function clickme(){

    variables();

    console.log(variables());

 
    if (variables() >= 1221){

      
      capricorn();
    }
    if (variables() >= 1123 && variables() <= 1220){
      
      
      sagittarius();
      
    } 

    if (variables() >= 101 && variables() <= 119){
      capricorn();

    }

     if(variables() >= 121 && variables() <= 218 ){
  
     aquarius();


    }if(variables() >= 219 && variables() <= 320){
    
      pi();
    }
    if(variables() >= 321 && variables() <= 420){
      
      aries();
    
    }if(variables() >= 421 && variables() <= 520){

      taurus();
      
    }if(variables() >= 521 && variables() <= 620){
    
      Gemini();
          
    }if(variables() >= 621 && variables() <= 720){
        
       cancer();
              
    }if(variables() >= 721 && variables() <= 821){
      
      leo();
            
    }if(variables() >= 822 && variables() <= 922){
      
      virgo();
            
     }if(variables() >= 923 && variables() <= 1022){
      
      libra();
      
    }if (variables() >= 1023 && variables() <= 1122)

    scorpio();

   } 
        
    function variables(){
    
      var mon = document.getElementById("month");
     
      var month = mon[mon.selectedIndex].value;
           
      var dates = document.getElementById("day");

      var point =  dates[dates.selectedIndex].value;
    
       var week =  parseInt(month);

       let per =  parseInt(point);
    
      var result = (per + week);

      return result;
    } 

     function aquarius(){
      
      var dv = document.getElementById("foo")

      while (dv.hasChildNodes()){
          dv.removeChild(dv.lastChild);
      }

      var x = document.createElement("IMG");
      
      x.setAttribute("src", "./img/aquarius.jpg");
      
      document.getElementById("foo").appendChild(x);
  }
    
      function aries(){

      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }
        var x = document.createElement("IMG");
      
        x.setAttribute("src", "./img/aries.jpg");
      
        document.getElementById("foo").appendChild(x);
      }

      function pi(){
        
              var dv = document.getElementById("foo")
              
              while (dv.hasChildNodes()){
                       
                dv.removeChild(dv.lastChild);
              }
                var x = document.createElement("IMG");
              
                x.setAttribute("src", "./img/pi.jpg");
              
                document.getElementById("foo").appendChild(x);
              }

      function taurus(){
        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
      
        x.setAttribute("src", "./img/taurus.jpg");
      
        document.getElementById("foo").appendChild(x);
      }
      
      function Gemini(){
   
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }
        var x = document.createElement("IMG");
      
        x.setAttribute("src", "./img/gemini.jpg");
      
        document.getElementById("foo").appendChild(x);
      }
      function cancer(){

        var dv = document.getElementById("foo")
        
        while (dv.hasChildNodes()){
                 
          dv.removeChild(dv.lastChild);
        }

        var x = document.createElement("IMG");
      
        x.setAttribute("src", "./img/cancer.jpg");
      
        document.getElementById("foo").appendChild(x);
      }
      function leo(){

        var dv = document.getElementById("foo")
        
        while (dv.hasChildNodes()){
                 
          dv.removeChild(dv.lastChild);
        }

        var x = document.createElement("IMG");
        x.setAttribute("src", "./img/leo.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function virgo(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        
        x.setAttribute("src", "./img/virgo.jpg");
        
        document.getElementById("foo").appendChild(x);
      }
      function libra(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        
        x.setAttribute("src", "./img/libra.jpg");
        
        document.getElementById("foo").appendChild(x);
      }
      function scorpio(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        x.setAttribute("src", "./img/scorpio.jpg");
        document.getElementById("foo").appendChild(x);
      }

      function sagittarius(){
      var dv = document.getElementById("foo")
     while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }
     var x = document.createElement("IMG");
        x.setAttribute("src", "./img/sagttarius.jpg");
       document.getElementById("foo").appendChild(x);
      
      } 

    function capricorn(){
    var dv = document.getElementById("foo")
        while (dv.hasChildNodes()){
        dv.removeChild(dv.lastChild);
     }
        
                var x = document.createElement("IMG");
                x.setAttribute("src", "./img/capricorn.jpg");
                document.getElementById("foo").appendChild(x);
              }



            



