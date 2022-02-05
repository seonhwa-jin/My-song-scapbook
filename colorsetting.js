function rainbow(colorname){
          var linklist = document.querySelectorAll('a');
          var i=0;
          while(i<linklist.length){
              linklist[i].style.color=colorname;
              i= i+1 ;
            }
          }

        function fontrainbow(colorname){
          document.querySelector('body').style.color = colorname;
        }
        function baserainbow(colorname){
          document.querySelector('body').style.backgroundColor = colorname;
        }


        var body = {
            fontrainbow : function(colorname) {
              document.querySelector('body').style.color = colorname;
            } ,
            baserainbow : function(colorname){
              document.querySelector('body').style.backgroundColor = colorname;
            }
        }

        var link = {
          rainbow : function(colorname){
            var linklist = document.querySelectorAll('a');
            var i=0;
            while(i<linklist.length){
                linklist[i].style.color=colorname;
                i= i+1 ;
              }
          }
        }



        function wow(self){
          var happy= document.querySelector('body');
            if (self.value ==='night mode'){
                  body.baserainbow('black');
                  body.fontrainbow('white');
                  self.value= 'day mode';

                  link.rainbow('powderblue');  }

            else {
                  body.baserainbow('white');
                  body.fontrainbow('black');
                  self.value='night mode';

                  link.rainbow('pink') ; }
                }
