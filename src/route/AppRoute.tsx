import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddRecipe from '../pages/AddRecipe'
import EditRecipe from '../pages/EditRecipe'
import SingleRecipe from '../pages/SingleRecipe'
import View from '../pages/View'


const AppRoute: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<View/>}/>
        <Route path="/view/:id" element={<SingleRecipe/>}/>
        <Route path="/edit/:id" element={<EditRecipe/>}/>
        <Route path="/New" element={<AddRecipe/>}/>
    </Routes>
  
  )
}

export default AppRoute