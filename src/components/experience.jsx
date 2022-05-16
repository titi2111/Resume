
export const Experience = function(props){
   
       if(props.data.date!=='')
    return(
        <>
        <h3>{props.data.title}</h3>
        <ul>
            
                
                    
                    <li >{props.data.subtitle}</li>
                    <li >{props.data.date}</li>
                    <li >{props.data.text}</li>
                   
                    
                    
                
            
        </ul>
        </>
        
    )
    else return(
        <>
        <h3>{props.data.title}</h3>
        <ul>
            
                
                    
                    <li >{props.data.subtitle}</li>
                    
                    <li >{props.data.text}</li>
                   
                    
                    
                
            
        </ul>
        </>
    )
}