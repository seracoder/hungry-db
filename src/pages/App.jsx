import '../App.css'
import React, {useEffect, useState} from "react";
import MealCard from "../components/MealCard.jsx";
import {getMealByName, getMeals} from "../functions.jsx";
import {SkeletonCard} from "../components/SkeletonCard.jsx";
import {useLocation} from "react-router-dom";

function App() {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let searchString = searchParams.get('search');
    useEffect(() => {
        setLoading(true)
        setMeals([])
        if (!searchString || searchString === '') {
            getMeals(12)
                .then((_meals) => {
                    setMeals(_meals)
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error)
                })
        } else {
            getMealByName(searchString)
                .then((_meals) => {
                    setMeals(_meals)
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error)
                })
        }

    }, [searchString]);
    return (
    <>
      <div className="my-5 mx-5">
         <div className="
            grid grid-cols-2 gap-2
            md:grid-cols-3 md:gap-4
            lg:grid-cols-4 lg:gap-6
            min-h-screen
         ">
            {
                !loading && meals?.length > 0 && meals.map((meal) => {
                    return (
                        <MealCard
                            key={meal.idMeal}
                            id={meal.idMeal}
                            image={meal.strMealThumb}
                            name={meal.strMeal}
                            category={meal.strCategory}
                        />
                    )
                })
            }
             {
                 loading && meals?.length === 0
                 && Array.from({ length: 12 }, (_, index) => index + 1)
                        .map((index) => {
                            return <SkeletonCard key={index} />
                        })
             }
             {
                    !loading && (meals?.length === 0 || !meals)
                    && <div className="text-center text-2xl font-bold col-span-4">No meals found</div>
             }
         </div>
      </div>
    </>
  )
}

export default App
