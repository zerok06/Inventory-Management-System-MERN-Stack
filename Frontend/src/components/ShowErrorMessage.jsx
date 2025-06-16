import React from "react";

function ShowErrorMessage({ children }) {
  return (
    <div className="h-full  flex items-center w-full justify-center ">
      <div className=" text-center border-red-700 bg-red-300 p-3 w-1/4 border-2 rounded-md">
        Ups ocurrió un error intente de nuevo. {children}
      </div>
    </div>
  );
}

export default ShowErrorMessage;
