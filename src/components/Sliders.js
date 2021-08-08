import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import './Sliders1.css'

function Sliders() {
    // const [mon, setMon] = useState(20)
    // const [tue, setTue] = useState(50)
    // const [wed, setWed] = useState(200)
    // const [thu, setThu] = useState(10)
    // const [fri, setFri] = useState(23)
    // const [sat, setSat] = useState(55)
    // const [sun, setSun] = useState(102)

    // const [data, setData] = useState({}) 

    const { register, watch, handleSubmit, getValues } = useForm()
    // console.log(watch())

    const handleChange = (e) => {
        console.log(e.target.getAttribute('id') + ' = '+  e.target.value)

        // const data = watch()
        // console.log(data)

        // const xx = getValues('mon')
        // console.log(xx)

        // const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
        // console.log(watchAllFields)
    }

    const handleFormChange = () => {
        console.log('form on change event handler')

        const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
        console.log(watchAllFields)
    }

    return (
        <div>
            <form 
                // onSubmit={ handleSubmit(data => {console.log(data)})}
                onChange={handleFormChange} >
                    
            <button type="submit">submit</button>

            <div className="range-slider">
                <label htmlFor="mon">Monday</label>
                <input {...register('mon')} id="mon" className="range-slider__range" onChange={handleChange} type="range"  min="0" max="500" />
                <span className="range-slider__value">{watch("mon", 50)}</span>
            </div>

            <div className="range-slider">
                <label htmlFor="tue">Tuesday</label>
                <input {...register('tue')} id="tue" className="range-slider__range" onChange={handleChange} type="range" min="0" max="500" step="50" />
                <span className="range-slider__value">{watch('tue', 50)}</span>
            </div>

            <div className="range-slider">
                <label htmlFor="wed">Wednesday</label>
                <input {...register('wed')} id="wed" className="range-slider__range" onChange={handleChange} type="range"  min="0" max="500"  />
                <span className="range-slider__value">{watch('wed', 50)}</span>
            </div>

            <div className="range-slider">
                <label htmlFor="thu">Thursday</label>
                <input {...register('thu')} id="thu" className="range-slider__range" onChange={handleChange} type="range"  min="0" max="500" /> 
                <span className="range-slider__value">{watch('thu', 50)}</span>
            </div>


            <div className="range-slider">
                <label htmlFor="fri">Friday</label>
                <input {...register('fri')} id="fri" className="range-slider__range" onChange={handleChange} type="range"  min="0" max="500" />
                <span className="range-slider__value">{watch('fri', 50)}</span>
            </div>


            <div className="range-slider">
                <label htmlFor="sat">Saturday</label>
                <input {...register('sat')} id="sat" className="range-slider__range" onChange={handleChange} type="range" min="0" max="500" />
              <span className="range-slider__value">{watch('sat', 50)}</span>
            </div>


            <div className="range-slider">
                <label htmlFor="sun">Sunday</label>
                <input {...register('sun')} id="sun" className="range-slider__range" onChange={handleChange} type="range"  min="0" max="500" />
                <span className="range-slider__value">{watch('sun', 50)}</span>
            </div>
            </form>
        </div>
    )
}

export default Sliders

