import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container} from '@mui/material';
import axios from 'axios';
import Categories from '../Categories/Categories';
import './User.css'


interface Post {
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, headerClassName: 'header-blue' },
  { field: 'title', headerName: 'Title', width: 150, headerClassName: 'header-blue' },
  { field: 'body', headerName: 'Body', width: 300, headerClassName: 'header-blue' },
];

const UserDetails = () => {
  const [data, setData] = useState<Post[]>([]);
  const userDetails = localStorage.getItem('userDetails');

  useEffect(() => {
    if (!userDetails) {
      window.location.href = '/';
    } else {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data));
    }
  }, []);

  return (
    <Container>
     <p className='text'>User's Information</p>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid className='datagrid' rows={data} columns={columns}  />
      </div>
      <Categories/>
    </Container>
  );
};

export default UserDetails;
