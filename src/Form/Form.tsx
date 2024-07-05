import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import gif from '../../public/login.gif';
import Swal from 'sweetalert2';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('userDetails', 
      JSON.stringify({ name, phone, email }));

      navigate('/userdetail');
      
      Swal.fire({
        title: "Congratulation!",
        text: "Successfully you have fill the form. ",
        icon: "success"
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong !!!",
        text: "Please make sure you have filled the form."
      
      })
    }
  };

  return (
    <div className="maindiv">
      <section className="form-section">
        <Container className="container">
          <p className='form-text'>User Information</p>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Container>
      </section>

      <section className="image-section">
        <img src={gif} alt="Login" className="image" />
      </section>
    </div>
  );
};

export default Form;
