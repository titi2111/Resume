export const Section=function(props){

    return(
        
        <div className="section-counter">
        <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6353 0L19.0114 9.4749L27.5958 19H0V0H27.6353Z" fill="#343434"/>
</svg>


           <span>{props.count}</span> 
        </div>
        
    )
}