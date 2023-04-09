import ThanksIcon from './ThanksIcon'

const Thnaks = (props) => {
    return (
        <div className='flex flex-col items-center mt-8 sm:gap-8 gap-1'>
            <ThanksIcon />
            <p className='text-orange-500'> You selected {props.rating} of 5</p>
            <h1 className='text-3xl text-white font-bold'>Thank You</h1>
            <p className='text-gray-500 text-lg font-bold'>We appreciate you taking the time to give a rating. if you ever need more support, dont hesitate to get in touch</p>
        </div>
    )
}

export default Thnaks