import Button from "./Button"


const Rating = (props) => {
    const { rating, setRating } = props

    // const items = []
    // for (let i = 1; i <= 5; i++) {
    //     items.push(<Button text={i} onClick={(e) => setRating(e.target.textContent)} key={i} />);
    // }
    return (
        <>
            <p className='mb-8 ml-3'><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg></p>
            <h2 className='text-white font-bold text-xl mb-3 block text-left'>How did we do ?</h2>
            <p className='text-gray-500 text-md text-left'>Please let us know how we did with your support request. ALL feddback is appreciated to help us improve our offering</p>
            <div className='flex gap-6 mt-3'>
                {/* {items} */}

                {Array.from({ length: 5 }, (_, index) => (
                    <Button text={index + 1} onClick={(e) => setRating(e.target.value)} key={index} />
                ))}
            </div>
            <button type='submit' className='bg-orange-600 text-white rounded-3xl w-full py-2 sm:py-4 my-6 hover:bg-white hover:text-orange-600 uppercase' onClick={() => props.show(true)}>Submit</button>
        </>
    )
}

export default Rating