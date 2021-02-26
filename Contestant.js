class Contestant{
    constructor(){
          this.index = null;
          this.distance = 0;
          this.name = null;
        }
      
        getCount(){
          var contestantCountRef = database.ref('contestantCount');
          contestantCountRef.on("value",(data)=>{
            contestantCount = data.val();
          })
        }
      
        updateCount(count){
          database.ref('/').update({
            contestantCount: count
          });
        }
    }