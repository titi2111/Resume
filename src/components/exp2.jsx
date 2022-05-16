
export const Experience2 = function(prop){
    
    switch(prop.dat)
    {case 'b':
 return(
     <>
     
     <ul>
         {
             
             prop.data.map(({text2,index},i) =>(
                 
                 <div>
                
                 
                 <b><li key={index}>{text2.subtitle}</li> </b>
                 <li>{text2.date}</li>
                 <li>{text2.text}</li>  
                
                 <br></br>  
                 </div>
             ))
         }
     </ul>
     </>)
     case'0' :return(
        <>
        
        <ul>
            {
                
                prop.data.map(({text2,index},i) =>(
                    
                    <div>
                   
                    
                    <li key={index}>{text2.subtitle}</li> 
                    <li>{text2.date}</li>
                    <li>{text2.text}</li>  
                   
                    <br></br>  
                    </div>
                ))
            }
        </ul>
        </>   
 )
 case 'd':
 return(
    <>
    
    <ul>
        {
            
            prop.data.map(({text2,index},i) =>(
                
                <div>
               
                
                <li key={index}>{text2.subtitle}</li> 
               
                <li>{text2.text}</li>  
               
                <br></br>  
                </div>
            ))
        }
    </ul>
    </>
 
)
default:
    }
 
}