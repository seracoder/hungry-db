import { ArrowsUpDownIcon } from '@heroicons/react/24/solid'
import {Link, useNavigate} from "react-router-dom";
import {getRandomMeal} from "../functions.jsx";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar bg-neutral text-neutral-content shadow mt-2 rounded-full">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">HungryDB</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <form action="" onSubmit={(e) => {
                            e.preventDefault()
                            const mealName = e.target.mealName.value
                            e.target.mealName.value = ''
                            navigate(`/?search=${mealName}`)
                        }}>
                            <input type="text" placeholder="Search"
                                   name="mealName" id="mealName"
                                   className="
                            input input-bordered w-24 md:w-auto xl:w-96
                            text-black font-semibold
                            "
                            />
                        </form>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div role="button" className="btn btn-ghost btn-circle avatar"
                             onClick={() => {
                                 getRandomMeal().then((meal) => {
                                     navigate(`/meal?id=${meal.idMeal}`)
                                 })
                             }}
                        >
                            <ArrowsUpDownIcon
                                className="
                                w-11 h-10 bg-green-800 rounded-r-full p-1 cursor-pointer
                                hover:bg-green-900 hover:scale-90
                                transition-all duration-200 ease-linear
                                active:bg-green-700
                            "/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar