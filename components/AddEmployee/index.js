import React,{useState} from 'react'
import {Card,Input,Row,Button} from "antd"
import { useRouter } from 'next/router';
export default function AddEmployees() {
    const Route = useRouter()
    const[formState,setFormState]=useState({});

    const handleFormSubmit=async()=>{
        const res = await fetch("https://sample-product-app.herokuapp.com/product",{
            method: "POST",
            body:JSON.stringify({
                ...formState,
            }),
            headers: {"Content-Type":"application/json"},
        });
        const data = await res.json();
    
        console.log("harish",data)
    }

    

   
    
  return (
    <div>
        <Card >
<Row>
    <form>
    <label>ProductName</label>
    <Input name="productName" onChange={(e)=>{setFormState({...formState,productName:e.currentTarget.value});
}}/>
    <label>ProductPrice</label>
    <Input name="productPrice" onChange={(e)=>{setFormState({...formState,productPrice:e.currentTarget.value});
}} />
    <label>HSN</label>
    <Input name="hsn" onChange={(e)=>{setFormState({...formState,hsn:e.currentTarget.value});
}} />
    <label>Mobile</label>
    <Input name="mobile" onChange={(e)=>{setFormState({...formState,mobile:e.currentTarget.value});
}}/>
    <label>Address</label>
    <Input name="address" onChange={(e)=>{setFormState({...formState,address:e.currentTarget.value});
}}/>
    <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
</form>
</Row>
        </Card>
      
    </div>
  )
}

