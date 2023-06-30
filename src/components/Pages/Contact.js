 import Input from "../UI/Input"
 import { useGlobalHook } from "../Store/Contex_provider";
 
const  Contact =()=>{
  const ctx =useGlobalHook();
 
  const submitHandler = (event)=>{
    event.preventDefault();
     const formData ={
      Name:event.target.Name.value,
      Email:event.target.email.value,
      Mobile_No:event.target.Mobile_Number.value,
      query:event.target.query.value
     }
     console.log(formData)
     ctx.Addquery(formData );
     event.target.reset()
  } 
    return(
        <>

      
        <form className="form-control" onSubmit={submitHandler} style={{background:"linear-gradient(45deg, blue, red)"}}>
        <Input
            label={"Name"}
            name={ "Name"}
            input={{
              type: "text",
              min: "1",
              max: "55",
              step: "1",
            
            }}
          ></Input>
             <Input
            label={"Email"}
            name={ "email"}
            input={{
              type: "email",
              min: "1",
              max: "55",
              step: "1",
            
            }}
          ></Input>
             <Input
            label={"Mobile_Number"}
            name={ "Mobile_Number"}
            input={{
              type: "text",
              min: "1",
              max: "55",
              step: "1",
            
            }}
          ></Input>
        
        
          <div style={{ flexDirection: "column" }}
          className=" d-flex justify-content-center align-items-center my-2">
                <label >Query</label>
           <textarea name="query" rows="3" cols="27" style={{ marginLeft: "10px" }} >
          </textarea>
          </div>
          <div   className=" d-flex justify-content-center align-items-center my-1">
          <button className="bg-secondary mx-auto" >Send Query</button>
          </div>
        </form>
        
        </>
    )


}

 export default  Contact;