
import { useState } from 'react';
import './App.css'

const App =()=>{
const [app,setapp]=useState()

const [data,setdata]=useState();
     const handleInput=(event)=>{
console.log(event.target.value);
setapp(event.target.value)
     }

     const myfun= async()=>{
          const get= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${app}`)
          const jsonData=await get.json();
     console.log(jsonData);
     setdata(jsonData[0]);
     }

     return (
          <>
<div className='app'>
     <h1>Dictionary App</h1>
     <div className='container'>
          <div className='searchBar'>
               <input type='text' placeholder='Search Word' onChange={handleInput}></input>
               <button onClick={myfun}>Search</button>
          </div>
          <div className='datas'>
               {

                    data ? <div className='datas'>
                         <h2>Word : {data.word}</h2>
                         <p>Part of speech : {data.meanings[0].partOfSpeech}</p>
                         <p>Definitions: {data.meanings[0].definitions[0].definition}</p>
                         <p>synonyms: {data.meanings[0].synonyms}</p>
                         <p>example: {data.meanings[0].definitions[0].example}</p>
                         <button onClick={()=>window.open(data.sourceUrls[0],"_blank")}>read more</button>


                    </div>
                    :""
               }
          </div>
     </div>
</div>




          </>
               

     )
}
export default App