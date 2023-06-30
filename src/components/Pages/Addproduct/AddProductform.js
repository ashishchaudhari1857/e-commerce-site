  import { useCallback } from "react";
  import Input from '../../UI/Input'
  const AddProductform = (props) => {
    const submitHandler = useCallback(
      (event) => {
        event.preventDefault();
        const obj = {
          title: event.target.title.value,
          Price: event.target.Price.value,
          Category: event.target.Category.value,
          Description: event.target.Description.value,
          ImgURL: event.target.ImgURL.value,
        };
        console.log(obj)
    
        props.add_to_list(obj);
        event.target.reset();
      },
      []
    );
    return (
      <>
        <form className="form-control" onSubmit={submitHandler}>
          <Input
            label={"Product_Name"}
            name={ "title"}
            input={{
              type: "text",
              min: "1",
              max: "55",
              step: "1",
            
            }}
          ></Input>
          <Input
            label={"Price"}
            name={"Price"}
            input={{
              type: "number",
              min: "0",
              max: "1500",
            }}
          ></Input>
          <Input
            label={"Category"}
            name={"Category"}
            input={{
              type: "text",
              min: "1",
              max: "15",
              
            }}
          ></Input>
          <Input
            label={"Description"}
          name ={"Description"}
            input={{
              type: "text",
              min: "1",
              max: "50",
              step: "1",
            }}
          ></Input>

          <Input
            label={"ImgURL"}
            name={"ImgURL"}
            input={{
              type: "text",

              step: "1",
            }}
          ></Input>
          <div className=" d-flex justify-content-center align-items-center my-1">
          <button type="submit" className="btn btn-info">
            Add Product
          </button>
          </div>
        </form>
      </>
    );
  };

  export default AddProductform;
