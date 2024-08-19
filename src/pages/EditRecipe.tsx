import React from 'react'
import { Container } from 'react-bootstrap'
import RecipeEdit from '../components/RecipeEdit'
import { useParams } from 'react-router-dom';
import { Recipes } from '../data/Recipes';

const EditRecipe : React.FC = () => {
    const {id} = useParams<{ id: string }>();

    if(id){
     const actualId = id.split(':')[1];
    const recipe = Recipes.find(recipe => recipe.id === actualId)
    console.log(actualId);
    if(!recipe){
     return <h6>404 NOT FOUND</h6>
    }
  return (
    <Container>
        <RecipeEdit recipe={recipe} />
    </Container>
  )
}
return(
    <h1>Error Occured</h1>
)
}

export default EditRecipe