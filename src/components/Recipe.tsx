import React from 'react'
import { RecipeProps } from '../models/Recipe'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Recipes } from '../data/Recipes';

interface RecipeProp{
    recipe:RecipeProps
}

const Recipe: React.FC<RecipeProp>= ({recipe}) => {
    const buttonStyle=    {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    
    }
    
   
  return (
    <div className='col-3 mb-4'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image} style={{height:'30vh'}}/>
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                {recipe.description}
                </Card.Text>
                <Link to={`/view/:${recipe.id}`}  className='mx-2 btn btn-primary'>View</Link>
                <Link to={`/edit/:${recipe.id}`} className='mx-2 btn btn-info'>Edit</Link>
                <Link to={`:${recipe.id}`} className='mx-2 btn btn-danger'>Delete</Link>
               
            </Card.Body>
    </Card>
    </div>
  )
}

export default Recipe