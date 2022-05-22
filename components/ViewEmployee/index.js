import React,{useState,useEffect} from 'react'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
export default function ViewEmployee({productData}) {
  //searchbar 
  const [searchType,setSearchType]=useState("")
  const [viewSerach,setViewSearch]=useState([])
  //filter
  const [selectData,setSelectData]=useState([])
    const [dataValue,setDataValue]=useState("")
  const onDelete = async(_id)=>{
    const res = await fetch(`https://sample-product-app.herokuapp.com/product/${_id}`,{
            method: "DELETE",
           
            headers: {"Content-Type":"application/json"},
        });
        const data = await res.json();
        
  }

  useEffect(()=>{
   setViewSearch(
     productData.filter((value)=>{
       return value.productName.toLowerCase().includes(searchType.toLocaleLowerCase())
     })
   )
  },[viewSerach])
  

  const handleSelect=(e)=>{
    setDataValue(e.currentTarget.value)
    console.log("harishDatasss",dataValue)
  }
  useEffect(()=>{
  let collect = productData.filter((value)=>{
    if(value.productName === dataValue){
      return value.address
    }
  })
  setSelectData(collect)
  },[selectData])
 

  return (
    <div>
    <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        ProductName
      </th>
      <th>
        ProductPrice
      </th>
      <th>
        HSN
      </th>
      <th>
        Phone
      </th>
      <th>
        Address
      </th>
      <th>
        Action
      </th>
      <th>
        <input onChange={(e)=>{setSearchType(e.currentTarget.value)}}/>
      </th>
      <th>
      <select onChange={handleSelect}>
          {viewSerach.map((val)=>(<>
          <option value={val.productName} >{val.productPrice}</option>
          </>))}
        </select>
      </th>
    </tr>
  </thead>
  <tbody>
    {viewSerach.map((val,idx)=>(
    <tr key={val._id}>
      <th scope="row">
        {idx+1}
      </th>
      <td>
        {val.productName}
      </td>
      <td>
        {val.productPrice}
      </td>
      <td>
        {val.hsv}
      </td>
      <td>
        {val.mobile}
      </td>
      <td>
        {val.address}
      </td>
      <td>
      <Button variant="contained" onClick={()=>{onDelete(val._id)}}>Delete</Button>
      </td>
     
    </tr>
   ))}
  </tbody>
</Table>
{selectData.map((val)=>(
  <>
  {val.productName}
  {val.mobile}
  {val.address}
  </>
))}
    </div>
  )
}
