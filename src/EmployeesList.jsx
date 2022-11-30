import React from 'react';


const EmployeesList= (prop) =>{


if(prop.prop.Code != null && prop.prop.Code != ''){
return(
    <>
    <tr>
    <td>{prop.prop.Code}</td>
    <td>{prop.prop.Name}</td>
    <td>{prop.prop.Designation}</td>
    <td>

    <a href='#'  
    data-Code={prop.prop.Code}
    onClick={ function() {
    prop.onSelectUpdate(prop.prop.Code)
    }}
    >Update</a><span>  </span>

    <a href='#' data-Code={prop.prop.Code}
    //  onClick={() =>{
    //  prop.onSelect(prop.prop.Code)
    //  }}

    onClick={
      function() {
       prop.onSelect(prop.prop.Code)
       }
      }
      >delete</a>
    </td>
    </tr>
    </>
    )
 }

}



export default EmployeesList;