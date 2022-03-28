console.log('js ok');

let mustDo=[{
    text:'Fare spesa',
    done:false,
},
{
    text:'Cucinare',
    done:false,
},
{
    text:'Andare in palestra',
    done:false,
},
{
    text:'Svolgere Esercitazione',
    done:false,
},
{
    text:'Portare fuori il cane',
    done:true,
}
];

const closeButton=document.querySelector('#close');


const app=new Vue({
    el:'#to-do-list',
    data:{
        mustDo,
        elemIndex:0,
        closeButton,
        newToDo:'',
        capitalize,
        
      
    
        
},
    methods:{
        toDoDone: function(item){
            if(item.done){
                return 'ct-done';
            }
            
        },
        removeToDo: function(item){
            const index=mustDo.indexOf(item);
            mustDo.splice(index,1);
           
        },
        addToDo: function(message){
           
            const newT={
                text: capitalize(message),
                done:false,
            };
            mustDo.push(newT);
            this.newToDo='';
        } ,       

        changeState: function(elem){
            elem.done=!elem.done;
        }

    },

});

function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

 