import React from "react";


const PersonForm = ({ formSubmit, nameHandler, numHandler,nameVal, numVal }) => {
  return (
    <>
      <form onSubmit={formSubmit}>
        <div>
          name: <input onChange={nameHandler} value={nameVal} />
        </div>
        <div>
          number: <input onChange={numHandler} value={numVal} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
