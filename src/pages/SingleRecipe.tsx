import React from 'react'
import RecipeDetails from '../components/RecipeDetails'
import { RecipeProps } from '../models/Recipe';
import { Recipes } from '../data/Recipes';
import { useParams } from 'react-router-dom';


const SingleRecipe: React.FC = () => {

   
   const {id} = useParams<{ id: string }>();

   if(id){
    const actualId = id.split(':')[1];
   const recipe = Recipes.find(recipe => recipe.id === actualId)
   console.log(actualId);
   if(!recipe){
    return <h1>404 NOT FOUND</h1>
   }
  return (
    <div className='container'>
        <RecipeDetails recipe={recipe}/>
    </div>
  )
}
return(
    <h1>Error Occured</h1>
)
}

export default SingleRecipe