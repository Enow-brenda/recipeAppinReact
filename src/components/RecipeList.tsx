import React from 'react'
import { RecipeProps } from '../models/Recipe'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';


interface RecipesProps{
    Recipes: RecipeProps[]
}



const RecipeList: React.FC<RecipesProps> = ({Recipes}) => {
    const renderRecipes=() =>{
       return Recipes.map(recipe=>{
            return <Recipe key={recipe.id} recipe={recipe}/>
       })
    }
  
        return (
            <>
            <Link to="/new" style={{float:'right',marginRight:'40px'}} className="btn btn-primary">Add New Recipe</Link>
            <h1>Our Recipes</h1>
            
                <div className='row mt-4 mb-2 m-2'>
                    {renderRecipes()}
                </div>
            </>
    
        )
}

export default RecipeList