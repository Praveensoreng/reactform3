
import React , {useState} from "react"
import './App.css'

function App(){
  const [data, setData] = useState({
    name: "",
    department: "",
    rating: ""
  })
  const {name, department,rating} = data
  const nameHandler=(e)=>{
    setData({...data, [e.target.name]:[e.target.value]})

  }
 
  const [list, setlist] = useState([])
  const[next,setNext] = useState(false)
  const submitHandler=(e)=>{
    e.preventDefault()
    setlist([...list,{...data}])
    setData({name: "", department: "", rating: ""})
    setNext(true)
   
  }
   
  const back = () =>{
    setNext(false)
  }
    
    
  
  return(
    <div className="app_container">
     <div className="form_container">
     
       {
         next ? null : <form onSubmit={submitHandler}>
         <h1>Employee Feedback Form</h1>
           <span>Name</span>
           <input className="inputName" type="text"
             name="name"
             placeholder="enter name"
             onChange={nameHandler}
             value={name} />
             <br/>
             <br/>
            <span>Department</span>
           <input className="inputDepartment" type="text"
             name="department"
             placeholder="enter department"
             onChange={nameHandler}
             value={department} />
             <br/>
             <br/>
            <span>Rating</span>
           <input className="inputRating" type="number"
             name="rating"
             placeholder="enter rating"
             onChange={nameHandler}
             value={rating} />
             <br/>
             <br/>
           <button className="inputSubmit" type="submit">submit</button>
          </form>
       }
     </div>




     {
       next ? <>
       
       <h1 className="header">Employee Feedback Data</h1>
       <section className="list_container">{ list.map((v)=>{
          return(
          
              <div className="list_item">
               <p style={{color:'white'}}>Name: {v.name}</p>
               <p style={{color:'white'}}>Department: {v.department}</p>
               <p style={{color:'white'}}>Rating: {v.rating}</p>
              </div> 
           )
         })
       }
       </section>
      <div className="backButtonContainer"> 
      <button onClick={back} className="backButton">Go Back</button>
      </div>
       
     </>: null
     }
     
      
       
    </div>
  );
}

export default App;