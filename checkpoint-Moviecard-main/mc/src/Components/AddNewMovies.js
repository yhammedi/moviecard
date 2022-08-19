import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap'

function AddNewMovies({add}) {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [ rate, setrate] = useState('');
    const [ posterUrl, setposterUrl] = useState('');
    
    const handleAdd=()=> {
        let AddNewMovie={title,description, rate,posterUrl}
        add(AddNewMovie)
        handleClose()
    }
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <div>
<Button variant="primary" onClick={handleShow}>
        ADD MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <label>Title</label>
      <input  type='text' placeholder='Enter your title Here'  onChange={(e)=>settitle(e.target.value)}/>
      <label>description</label>
      <input  type='text' placeholder='Enter your description Here'onChange={(e)=>setdescription(e.target.value)} />
      <label>rate</label>
      <input  type='text' placeholder='Enter your rate Here' onChange={(e)=>setrate(e.target.value)}/>
      <label>posterUrl</label>
      <input  type='text' placeholder='Enter your img Here'  onChange={(e)=>setposterUrl(e.target.value)}/>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
  </div>;
}

export default AddNewMovies;
