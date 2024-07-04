import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import Categories from '../Categories/Categories';


interface Post {
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'body', headerName: 'Body', width: 300 },
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
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
      <Categories/>
    </Container>
  );
};

export default UserDetails;
