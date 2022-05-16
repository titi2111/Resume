export const Skills = function(props){
   
      
    
    return(
       
        <ul className="list2">
            {
                props.data.map(index =>(
                    <li key={index}>{index}</li>
                ))
            }
        </ul>
        
    )
}