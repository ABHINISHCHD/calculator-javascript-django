var string="";

let buttons=document.querySelectorAll('.btn');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }

        else if(/[+-/*]/.test(e.target.innerHTML) && /[+-/*]/.test(string[string.length-2]) )
        {   
    
            string=eval(string);
            string+=e.target.innerHTML;
            document.querySelector('input').value=string;   
        }   
        
        else if(/[+-/*]/.test(e.target.innerHTML) && /[+-/*]/.test(string[string.length-1]) )
        {   
            
            
            string=string.slice(0,-1)+e.target.innerHTML;
            console.log(string[string.length-1],e.target.innerHTML);
            document.querySelector('input').value=string;   
        }
        
        else if(e.target.innerHTML=='C')
        {
            string="";
            document.querySelector('input').value=string;

        }
        else{
        string+=e.target.innerHTML;
        document.querySelector('input').value=string;
        }
        
        
    })
})