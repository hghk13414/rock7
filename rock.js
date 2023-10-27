var x=0;
         function rules(){
          document.getElementById('oo').style.visibility = 'visible';
         }
         function close_rulse(){
          document.getElementById('oo').style.visibility = 'hidden';

         }
         function result(x){
          document.getElementById("mobile_rules").style.visibility= 'hidden';
          var y= Math.floor((Math.random()*10)+1);
          y=y%3;
          y=y+1;
          choose(x);

          setTimeout(choose_house,1000,y);
           if(x==2)
          {  if(y==1) setTimeout(win,1500);
            else if(y==3) setTimeout(lose,1500);
            else setTimeout(draw,1500);
            
          }
          else if(x==1)
          {
            if(y==1)
            setTimeout(draw,1500);
           else if(y==2)
           setTimeout(lose,1500);
          else setTimeout(win,1500);}
          else {
            if(y==1) setTimeout(lose,1500);
            else if(y==2) setTimeout(win,1500);
            else setTimeout(draw,1500);
          
          }     
          
          if(x>9){document.getElementById("yourpoints").style.marginLeft = '10px';}
          setTimeout(showplay_again,2000);
         }
         var o=end_result.offsetLeft;
        
         function win(){
          if(o>=260)  document.getElementById("end_result").style.marginLeft = '276px';
          else document.getElementById("end_result").style.marginLeft = '73px';
          window.end_result.innerHTML = 'YOU WIN';
          x=x+1;
          window.yourpoints.innerHTML = x;
         }
         function lose(){
          if(o>=260)  document.getElementById("end_result").style.marginLeft = '268px';
          else document.getElementById("end_result").style.marginLeft = '66px';
          window.end_result.innerHTML = 'YOU LOSE';
         }
         function draw(){
          if(o>=265)  document.getElementById("end_result").style.marginLeft = '300px';
          else document.getElementById("end_result").style.marginLeft = '96px';
          window.end_result.innerHTML = 'DRAW';
         

         }



         function playagian_button1(){
         document.getElementById("button_playagain").style.color = 'hsl(349, 70%, 56%)';
         }
         function playagian_button2(){
         document.getElementById("button_playagain").style.color = 'hsl(229, 64%, 46%)';
         }
         function replay(){
          hidden();
          document.getElementById('result_page').style.visibility = 'hidden';
          document.getElementById('main_page').style.visibility = 'visible';
          window.end_result.innerHTML = '';
          document.getElementById("mobile_rules").style.visibility= 'visible';
          
         }
         function choose(x){
          document.getElementById('main_page').style.visibility = 'hidden';
          document.getElementById('result_page').style.visibility = 'visible';
          if(x==1) 
          {
          document.getElementById("roc1").style.visibility= 'visible';
          }
          else if(x==2)
          {
          document.getElementById("pape1").style.visibility= 'visible';
          }
          else if(x==3) {
            document.getElementById("sc1").style.visibility= 'visible';
          }
         }
         function choose_house(x){ 
         if(x==1) 
          {
          document.getElementById("roc2").style.visibility= 'visible';
          }
          else if(x==2)
          {
          document.getElementById("pape2").style.visibility= 'visible';
          }
          else (x==3) 
            document.getElementById("sc2").style.visibility= 'visible';
          
         }
         function hidden(){
          document.getElementById("sc2").style.visibility= 'hidden';
          document.getElementById("roc2").style.visibility= 'hidden';
          document.getElementById("pape2").style.visibility= 'hidden';
          document.getElementById("sc1").style.visibility= 'hidden';
          document.getElementById("roc1").style.visibility= 'hidden';
          document.getElementById("pape1").style.visibility= 'hidden';
          document.getElementById('button_playagain').style.visibility = 'hidden';

         } 
         function showplay_again(){
          document.getElementById("button_playagain").style.visibility = 'visible';
          

         }