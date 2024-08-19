import React from 'react'
import { RecipeProps } from '../models/Recipe'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface RecipeDetailsProp{
    recipe:RecipeProps
}

const RecipeDetails: React.FC<RecipeDetailsProp>= ({recipe}) => {
    const instructions = recipe.instructions.split('.');
    if (instructions[instructions.length - 1] === '') {
        instructions.pop();
      }
   
  return (
    <div className='row mt-2 p-4 bg-dark text-white' style={{borderRadius:'20px',boxShadow:'2px 90px 4px'}}>
        <div className='col-4'>
            <img src={recipe.image} style={{borderRadius:'20px',width:'100%'}}/>
        </div>
        <div className='col-7'>
            <div>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
            <div>
                <h4>Ingredients</h4>
                <div className='row'>
                    <ul>
                    {recipe.ingredients.map(ingredient=>{
                        return <div className='col-4'>
                            <li>{ingredient.quantity} {ingredient.unit} of {ingredient.name}</li>
                        </div>
                    })}
                    </ul>
                   
                    
                </div>
            </div>
            <div>
                <h4>How to cook</h4>
                
               <ul>
                {instructions.map(instruction=>{
                    return <li>{instruction}</li>
                })}
               </ul>
            </div>
            <h1 className='text-center'><i>Good Appetite</i></h1>
            
        </div>
    </div>
  )
}

export default RecipeDetails