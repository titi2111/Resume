
export const Text = function (props){
    if (props.data.text_i!=="")
    return(
        <>
        <h3>{props.data.title}</h3>
          
        <p className="t"><i>&#34;{props.data.text_i}&#34;<br/></i>{props.data.text_n}</p>
        </>
    )
    else return(
        <>
        <h3>{props.data.title}</h3>
          
        <p className="t">{props.data.text_n}</p>
        </>
    )
}