import React, {Component} from'react';
import '../App.css';
 //#endregion

 

 class WordListGenerator extends Component{
 render(){
     return(
     <div className="hello"> 
         <form>
            <input value='Year' placeholder="year" />
            <button className="YearButton">submit</button>
            <p/>
            <input value='Module' placeholder="module"/>
            <button className="ModuleButton">submit</button>
            <p/>
            <input value='word List' placeholder="Word List"/>
            <button className="Word_List_Button">submit</button>
            <p>test</p>
            <p/>
         </form>
     </div>
     );
 }
 }

 export default WordListGenerator;