import React, { useRef } from 'react'
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { RecipeProps } from '../models/Recipe';


const RecipeEdit:React.FC = () => {
    const [validated, setValidated] = useState(false);
    const [num,setNum]=useState(0);
    const ingredientRef=useRef<HTMLInputElement>(null);
    const [postedRecipe,setPostedRecipe]=useState<RecipeProps>(
        {
        id: "1",
        title:' "Spaghetti Bolognese"',
        description: '',
        image: '',
        ingredients: [],
        instructions: ''
      }

    );

    function handleIngredients(){
        if(ingredientRef.current!=null){
            setNum(parseInt(ingredientRef.current.value));
        }
        else{
            setNum(0);
        }
        
    }


  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-4 p-4 bg-dark text-white'>
    <Row>
    <Form.Group as={Col} md="6" controlId="validationCustom01">
        <Form.Label>Recipe Title</Form.Label>
        <Form.Control
          required
          type="text"
        placeholder='Enter Dish / Recipe Title'
          
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationCustom01">
        <Form.Label>Recipe Image Url</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder='https://example.com/image1'
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Row>
        <Col xs={6} md={6}>
    
      <Form.Group  controlId="validationCustom02"  >
        <Form.Label>Description of Recipe Dish</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Describe the dish or recipe a little" required />
        
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      
     
        </Col>
        <Col xs={6} md={6}>
        <Form.Group  controlId="validationCustom02">
        <Form.Label>Instructions</Form.Label>
        <Form.Control as="textarea" rows={3} cols={8} placeholder="Add a '.' to separate the instructions" required />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
     
        </Col>
     </Row>
     
     <Row>
        
        <Form.Group  controlId="validationCustom01" className='container' style={{padding:'0px 200px'}} >
        <Form.Label>Enter the Number of Ingredients</Form.Label>
        <Row>
        <Col xs={6} md={8}>
        <Form.Control
          required
          type="number"
          
          ref={ingredientRef}
        />
        </Col>
        <Col xs={6} md={4}>
        <Button onClick={()=>handleIngredients()}>Provide Ingredients List</Button>
        </Col>
        </Row>
        
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      
      {
        Array.from({ length: num }, (_, index) => (
            <Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name of Ingredient {index+1}</Form.Label>
            <Form.Control
            required
            type="text"
            
            />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Quantity of Ingredient {index+1}</Form.Label>
        <Form.Control
        required
        type="number"
       
        />
        
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Unit of Measurement</Form.Label>
        <Form.Control
        required
        type="text"
       
        />
        
    </Form.Group>
    </Row>
          
          ))
        }
     </Row>
   
     
    <Row>
    <Button type="submit" className='mt-4'>Submit form</Button>
    </Row>
   
  </Form>
  )
}

export default RecipeEdit