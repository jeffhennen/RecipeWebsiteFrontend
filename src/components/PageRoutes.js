import { Route, Routes, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import Recipe from "../pages/Recipe"
import AddRecipe from "../pages/AddRecipe"
import About from "../pages/About"
import NotFound from '../pages/NotFound'
import Ingredients from '../pages/Ingredients'

export default function PageRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Recipes" element={<Recipes />} />
            <Route path='/Recipes/:id' element={<Recipe />} />
            <Route path="/newRecipe" element={<AddRecipe />} />
            <Route path="/Ingredients" element={<Ingredients />} />
            <Route path="/About" element={<About />} />
            <Route path='/*' element={<Navigate to="/"/>} /> 
        </Routes>
    )
}