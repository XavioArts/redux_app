import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const TodoForm = (props) => {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm();


//   console.log(watch("name")); // watch input value by passing the name of it
  
  const onSubmit = data => {
      // data is out to do
      // skipping adding to the db

      //update ui
      console.log(data);
      console.log("props:", props);
      // dispatch an action {type: "ADD_TODO", todo: todo}
      let todo = {name: data.name, complete: false, id: Math.random()}
      props.dispatch({type: "ADD_TODO", todo: todo})
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>todo name</p>
      {errors.name && errors.name.type ==='maxLength' && <p style={{color:'red'}}>To long YO! </p>}
      {errors.name && errors.name.type === 'required' && <p style={{color:'red'}}>Required </p>}
      <input {...register("name", { required: true, maxLength: 20 })} />
      <input type="submit" />
    </form>
  );
}

export default connect()(TodoForm)