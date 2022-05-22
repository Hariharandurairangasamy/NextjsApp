import React from 'react'
import ViewEmployee from '../../../components/ViewEmployee'

export async function getServerSideProps() {
  const res = await fetch("https://sample-product-app.herokuapp.com/product")
  const productData = await res.json()
  return{
    props:{
        viewData:productData
    }
  }
}

export default function viewemployees({viewData}) {


  
  return (
    <div><ViewEmployee productData={viewData}/></div>
  )
}
