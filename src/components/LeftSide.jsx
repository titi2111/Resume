import '../styles/leftSide.scss';
import {Text} from './text';
import {Skills} from './skills';
export const LeftSide = function(){
    const text_LeftSide=[
        {title: 'ABOUT ME',
        text_i: "",
        text_n:"  I am a calm and motivated person who shows seriousness,punctuality, responsibility and who has the ability to learn new things veryquickly. "
        },
        {title: 'WORK EXPERIENCE',
        text_i: "",
        text_n: " I started learning web development a few months ago because I found this field very interesting from all points of view and I participated in several courses to learn and develop my knowledge. During this time I did small FE projects starting to learn React.js and continue to do so out of passion."
        }
      ]
        
      const soft_skills=["Teamwork","Active listening","Optimism","Self-Confidence","Self discipline"];
    return(
        <section id="left-side">
            <p id="ce">
                Call <a href='tell:07435036495'>+0733 564 013</a> or <br/>
                Email <a href='mailto:vladviotiti@yahoo.com'>vladviotiti@yahoo.com</a>
            </p>
            {
                     text_LeftSide.map(item => (
                         
                         <Text key={text_LeftSide.title} data={item}/>
                     ))
            }  
         <h3>Soft Skills</h3>   
            
            <Skills data={soft_skills} />
        <h3 id="t2">Special Skills</h3> 
        <p id="ss">
        I have the ability to understand and learn new things very quickly
        </p>   
        </section>
    )
}