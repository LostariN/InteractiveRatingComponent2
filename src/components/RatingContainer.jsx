import { useState } from "react"
import Rating from "./Rating"
import Thnaks from "./Thnaks"


const RatingContainer = () => {
    const [rating, setRating] = useState('')
    const [showThanks, setShowThanks] = useState(false)
    return (
        <div className='absolute rounded-3xl shadow bg-gray-900 sm:w-[500px] mx-auto sm:h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[300px] h-[400px]'>
            <div className='mt-10 sm:mx-10 flex flex-col sm:gap-5 mx-5 gap-2'>
                {showThanks ? <Thnaks rating={rating} /> : <Rating rating={rating} setRating={setRating} show={setShowThanks} />}

            </div>

        </div>
    )
}

export default RatingContainer