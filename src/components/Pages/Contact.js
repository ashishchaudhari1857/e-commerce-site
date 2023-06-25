 import Input from "../UI/Input"
 import { useGlobalHook } from "../Store/Contex_provider";
const  Contact =()=>{
  const ctx =useGlobalHook();
 
  const submitHandler = (event)=>{
    event.preventDefault();
     const user={
      Name:event.target.Name.value,
      Email:event.target.email.value,
      Mobile_No:event.target.Mobile_Number.value
     }
     ctx.adduser(user);
     event.target.reset()
  } 
    return(
        <>

      
        <form className="form-control" onSubmit={submitHandler}>
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
          <button className="bg-secondary mx-auto" >Add User</button>
        </form>
        
        </>
    )


}

 export default  Contact;