import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../functions.jsx";

const MealDetail = () => {
    const [meal, setMeal] = useState({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    useEffect(() => {
        getMealById(id)
            .then((_meal) => {
                setMeal(_meal);
                console.log(_meal);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
            <div className="my-5 mx-5">
                <div className="mb-7">
                    <h1 className="text-xl font-bold">MEAL DETAILS</h1>
                    <div className="h-2 w-36 bg-primary"></div>
                </div>
                <div className="shadow p-6">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-5">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-auto"
                        />
                        <div>
                            <p className="text-primary text-xl font-bold">{meal.strMeal}</p>
                            <div className="h-0.5 w-full bg-primary mt-5"></div>
                            <div className="flex flex-col gap-2">
                                <p><span className="font-bold">Category: </span>{meal.strCategory}</p>
                                <p><span className="font-bold">Type: </span>{meal.strArea}</p>
                                <div><span className="font-bold">Tags: </span>
                                    {meal.strTags && meal.strTags.map((tag, index) => {
                                        return (
                                            <p className="badge badge-secondary ml-1" key={index}>{tag}</p>
                                        )
                                    })}
                                </div>
                                <p className="font-bold">Ingredients: </p>
                                <div className="
                                grid grid-cols-2 bg-primary p-3 text-white font-semibold rounded-xl
                                md:grid-cols-3 md:p-4
                                ">
                                    {
                                        meal.ingredients && meal.ingredients.map((ingredient, index) => {
                                            return (
                                                <div key={index} className="flex gap-2">
                                                    <p className="ring bg-base-content p-0.5 rounded-full w-6 h-6 mb-1.5 text-center text-sm">{index + 1} </p>
                                                    <p>{ingredient}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <p className="font-bold mb-2">Measure:</p>
                        <div className="border p-4 grid md:grid-cols-2">
                            {
                                meal.measures && meal.measures.map((measure, index) => {
                                    return (
                                        <div className="flex gap-2" key={index}>
                                            <p className="ring  text-white bg-base-content p-0.5 rounded-full w-6 h-6 mb-1.5 text-center text-sm">{index + 1} </p>
                                            <p key={index}>{measure} {meal.ingredients[index]}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <p className="font-bold my-5">Instructions:</p>
                        {
                            meal.instructions && meal.instructions.map((measure, index) => {
                                return (
                                    <div className="flex gap-2 mb-2" key={index}>
                                        <img src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="done"
                                            className="w-8 h-8 border rounded-r-full p-1 flex-nowrap"
                                        />
                                            <p key={index}>{measure} {meal.ingredients[index]}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default MealDetail