import React, { useRef } from 'react'
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { RecipeProps } from '../models/Recipe';


interface RecipeDetailsProp{
    recipe:RecipeProps
}

const RecipeForm:React.FC<RecipeDetailsProp> = ({recipe}) => {
    const [validated, setValidated] = useState(false);
    const [num,setNum]=useState(0);
    const ingredientRef=useRef<HTMLInputElement>(null);


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
          defaultValue={recipe.title}
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
          defaultValue={recipe.image}
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Row>
        <Col xs={6} md={6}>
    
      <Form.Group  controlId="validationCustom02"  >
        <Form.Label>Description of Recipe Dish</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Describe the dish or recipe a little" defaultValue={recipe.description} required />
        
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      
     
        </Col>
        <Col xs={6} md={6}>
        <Form.Group  controlId="validationCustom02">
        <Form.Label>Instructions</Form.Label>
        <Form.Control as="textarea" rows={3} cols={8} placeholder="Add a '.' to separate the instructions" defaultValue={recipe.instructions} required />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
     
        </Col>
     </Row>
     
     <Row>
        <center>Ingredients List</center>

      
      {
         
        recipe.ingredients.map(ingredient => {
           return <Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name of Ingredient </Form.Label>
            <Form.Control
            required
            type="text"
            defaultValue={ingredient.name}
            
            />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Quantity of Ingredient </Form.Label>
        <Form.Control
        required
        type="number"
        defaultValue={ingredient.quantity}
       
        />
        
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Unit of Measurement</Form.Label>
        <Form.Control
        required
        type="text"
        defaultValue={ingredient.unit}
        />
        
    </Form.Group>
    </Row>
          
        })
        }
     </Row>
   
     
    <Row>
    <Button type="submit" className='mt-4'>Submit form</Button>
    </Row>
   
  </Form>
  )
}

export default RecipeForm