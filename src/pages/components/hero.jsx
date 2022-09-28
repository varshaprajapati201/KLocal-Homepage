import Form from 'react-bootstrap/Form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Link, Tab } from '@mui/material';



export const Hero=()=>{
    return (
               <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <p>Instant access to all business information<br></br>
      Without having to leave your house</p>
      
      <div className="search-option" >
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search anything"
              className="me-2"
              aria-label="Search"
            />
            <FormControl className='select'  variant="filled" size="small" sx={{ m: 1, minWidth: 130}}>
  <InputLabel id="demo-simple-small">Select City</InputLabel>
  <Select
    labelId="demo-simple-small"
    id="demo-simple-select"
    
    label="Select City"

  >
    <MenuItem value={10}>Delhi</MenuItem>
    <MenuItem value={20}>Mumbai</MenuItem>
    <MenuItem value={30}>Kolkata</MenuItem>
  </Select>
</FormControl>
          </Form>
          
      </div>

      </div>
      <div className='links'>
<h2>Top Searches</h2><p>
<a href="#">heart doctor in srinagar</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">dentist near me</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">best coaching centre in srinagar</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">sports academy</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">interior designer</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">web developer</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">jkbank atm</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">hotel near dal lake</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">private hospital in baramulla</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="#">marriage hall booking</a>&nbsp;&nbsp;
	<a href="#">skin doctor</a>
</p>

</div>
<Button className='botton' variant="contained">Set Alert</Button>
  </section>
    );
}