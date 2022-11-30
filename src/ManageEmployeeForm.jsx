import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import EmployeesList from './EmployeesList';
import { useLocation } from 'react-router-dom';

const ManageEmployeeForm= () =>{
    const location = useLocation().pathname.replace(/^\/|\/$/g, '');

    const [visibilitylist, Setvisibility] = useState(true);

    const [fields,setfields]=useState( {
        Code:'',
        Name:'',
        Designation:'',
    });

    const [fieldsArr,setfieldsArr]=useState( [{
        Code:'',
        Name:'',
        Designation:'',
    }]);
   
    useEffect(() =>{
        document.getElementById(location).style.color = "blue";
          },[])
    ///Updated record Start
   
        function UpdateRecord(code){
            debugger
            const fieldsArr_new = fieldsArr.filter(item => item.Code === code);
            Createbtnfunction(function() {
                debugger
                setfields(
                    {
                        Code:fieldsArr_new[0].Code,
                        Name:fieldsArr_new[0].Name,
                        Designation:fieldsArr_new[0].Designation,
                    }
                    )
                    document.getElementsByClassName("code")[0].value = fieldsArr_new[0].Code;
                    document.getElementsByClassName("name")[0].value = fieldsArr_new[0].Name;
                    document.getElementsByClassName("designation")[0].value = fieldsArr_new[0].Designation;
                    document.getElementById('formheading_1').textContent = 'Update Employees';
                
                debugger
           
        
            });  
          
            }
        ///Updated record End


function Createbtnfunction(callback){


    // useEffect(() => { Setvisibility(false) }, [])

    Setvisibility(false);
    if (typeof callback === 'function') {
        
        return callback();
      }
}

function Listbtnfunction(){
    debugger
    Setvisibility(true);
}
return(

<>

<div style={{ display: visibilitylist ? "block" : "none" }}>
<button className='btn btn-warning m-2' onClick={Createbtnfunction}> Create Employee</button>
<table className='styled-table'>
    <thead>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    { 

    fieldsArr.map((items,index) => (
    (items.Code != null && items.Code) != '' ? 
    <EmployeesList 
    prop={items}
    onSelect={DeleteRecord}
    onSelectUpdate={UpdateRecord}
    />
    :
    ''
    ))}

    
    </tbody>
</table>
</div>

<div style={{ display: visibilitylist ? "none" : "block" }}>
<hr className="new1" style={{borderTop:'1px solid red'}}/>
<hr className="new1" style={{borderTop:'1px solid red'}}/>
<div className='Red-background employee_form_div' style={{margin:'15px'}}>
<form style={{margin:'15px'}} onSubmit={SetValueInHeadingAfterSubmit} id='employeeForm'> 
  <h2 id='formheading_1'>Create Employees</h2>
  <input type="text" name='Code' value={fields.Code} className='code'  onChange={SetValueInHeading} placeholder="Enter employee code" />  <br/> <br/>
  <input type="text" name='Name' value={fields.Name} className='name' onChange={SetValueInHeading} placeholder="Enter employee name" />  <br/> <br/>
  <input type="text" name='Designation' value={fields.Designation} className='designation' onChange={SetValueInHeading} placeholder="Enter employee designation" />  <br/> <br/>
  <br/> <br/>
  <button type='submit' id='btn' className='btn btn-info' role="button">Submit</button>
  <button type='button' onClick={FormReset} className='btn btn-danger' style={{marginLeft:'15px'}} role="button">Cancel</button>
</form>
<br/> <br/>
</div>
</div>

</>
);
  

//Delete record Start
function DeleteRecord(code){
    debugger
    const fieldsArr_new = fieldsArr.filter(item => item.Code !== code);
    setfieldsArr(fieldsArr_new);

    }
//Delete record End

//Setting Values Of Input Fileds Start
function SetValueInHeading(event)  {
debugger
    const value=event.target.value;
    const name=event.target.name;
  
 
    setfields ((preValue) =>{
        return{
            ...preValue,
            [name]:value, 
        }
    })

   
    }

//Setting Values Of Input Fileds Start




//After Submit Data Fill In a Table Start
function SetValueInHeadingAfterSubmit(eventSetValueInHeadingAfterSubmit) {
    debugger
    eventSetValueInHeadingAfterSubmit.preventDefault();
    const code= document.getElementsByClassName("code")[0].value;

    if(fieldsArr.filter(item => item.Code === code).length === 0 ) 
   {

       //setfieldsArr(fieldsArr => fieldsArr.concat(fields))
    
       setfieldsArr([...fieldsArr,fields]);

   
    }
    else{
    
        for (var i=0; i < fieldsArr.length ; i++) {
   
            if(fieldsArr[i].Code === code){
            
                fieldsArr[i].Name= fields.Name;
                fieldsArr[i].Designation= fields.Designation;
    
           
            }
        }

        setfieldsArr([...fieldsArr]);
        console.log(fieldsArr);
       // Listbtnfunction();
    }
 
   FormReset();
   
    }
    //After Submit Data Fill In a Table End

function FormReset(){
    debugger
    setfields('');
    document.getElementById("employeeForm").reset();
    document.getElementById('formheading_1').textContent = 'Create Employees';
    Listbtnfunction();
    
}
    

}



export default ManageEmployeeForm;