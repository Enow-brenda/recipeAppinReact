import React, { useState } from 'react'
import RecipeList from '../components/RecipeList'
import { Recipes } from '../data/Recipes'
import { useParams } from 'react-router-dom';

 const View : React.FC= () => {
    const [recipes,SetRecipes]=useState(Recipes);
    const {id} = useParams<{ id: string }>();
    if(id){
    const actualId = id.split(':')[1];
    const newItems = recipes.filter(recipe => recipe.id != actualId)
    SetRecipes(newItems);
    }
  return (

    <RecipeList Recipes={Recipes}/>
  )
}

export default View;
