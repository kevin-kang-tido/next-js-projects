'use client'
import LoadingComponent from '@/app/loading';
import { Input } from '@nextui-org/react';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';

type dataRow ={
    title:string;
    director: string;
    year:string;
}
type userType = {
  id: number,
  lastName: string,
  email: string,
  image:string
}
const columns:TableColumn<userType>[]=[
{
  name: "ID",
  selector: (row) => row.id,
  sortable:true
},
{
  name: "Username",
  selector: (row) => row.lastName,
  sortable:true
},
{
  name: "Email",
  selector: (row) => row.email,
},
{
  name:"Profile",
  selector: (row) => <img src={row.image} width={50} height={50} />,
},
{
  name: "Action",
    cell: (row) => <Button color="danger">Delete</Button>,
  },
]

 function TableComponents ()  {
  const [search, setSearch] = useState("");
  const[isloading,setLoading] = useState(true);
  const[getUser,setUser] = useState([]);
  
  async function fetchDataToTable(){
    const data = await fetch("https://dummyjson.com/users");
    const res = await data.json();
    setUser(res.users);
    setLoading(false);

  }
  useEffect(()=> {
    fetchDataToTable();
  },[])
  useEffect(() => {
    if (!search) {
      setUser(getUser); 
      return;
    }

    const result = getUser.filter((item) => {
      // Assuming 'username' is the correct property; adjust as necessary
      return item.lastName.toLowerCase().includes(search.toLowerCase());
    });

    setUser(result);
  }, [search, getUser]);

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px',
        minWidth:'2400px', // override the row height
      },
    },
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
  };


  return (
    <DataTable
    progressPending={isloading}
    columns={columns}
    data={getUser} 
    fixedHeader={true}
    fixedHeaderScrollHeight="500px"
    subHeader
    customStyles={customStyles}
    // customStyles={customStyles}
    progressComponent={<LoadingComponent/>}
    pagination
    // selectTableRows
    paginationComponentOptions={paginationComponentOptions}

    actions={
      <Button size="sm" className='bg-primary-700'>Save PDF</Button>
    }

    subHeaderComponent={
      <Input
      label="Search"
      isClearable
      radius="lg"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Type to search..."
    />
    }
    />
  )
}
export default TableComponents;