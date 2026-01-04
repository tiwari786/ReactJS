import React from 'react';

const FormHandling = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} >
        <input type="text" placeholder='Enter name' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;
