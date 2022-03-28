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
    
        
},
    methods:{
        toDoDone: function(item){
            if(item.done){
                return 'ct-done';
            }
            
        },
        removeToDo: function(item){
            const index=mustDo.indexOf(item);
            console.log(index);
            mustDo.splice(index,1);
            console.log(mustDo);
        },
        addToDo: function(message){
            const newT={
                text:message,
                done:false,
            };
            mustDo.push(newT);
            console.log(mustDo);
            this.newToDo='';
        } ,       

        changeState: function(elem){
            elem.done=!elem.done;
        }

    },

});