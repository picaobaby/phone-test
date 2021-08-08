import React, { useContext} from 'react'
import {useForm} from 'react-hook-form'
import MyContext from '../context/MyContext'
import './Sliders1.css'

function TestForm() {
    const [formData, setFormData] = useContext(MyContext)
    const {register, handleSubmit} = useForm()

    const updateState = data => {
        setFormData({...data})
    }

    return (
        <div className="form-container">
            <form onChange={handleSubmit(updateState)}>
                <div className="range-slider">
                    <label htmlFor="mon">周一</label>
                    <input {...register('mon')} value={formData['mon']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['mon']}</span>
                </div>

                <div className="range-slider">
                    <label htmlFor="mon">周二</label>
                    <input {...register('tue')} value={formData['tue']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['tue']}</span>
                </div>

                <div className="range-slider">
                    <label htmlFor="mon">周三</label>
                    <input {...register('wed')} value={formData['wed']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['wed']}</span>
                </div>

                <div className="range-slider">
                    <label htmlFor="mon">周四</label>
                    <input {...register('thu')} value={formData['thu']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['thu']}</span>
                </div>

                <div className="range-slider">
                    <label htmlFor="mon">周五</label>
                    <input {...register('fri')} value={formData['fri']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['fri']}</span>
                </div>
                
                <div className="range-slider">
                    <label htmlFor="mon">周六</label>
                    <input {...register('sat')} value={formData['sat']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['sat']}</span>
                </div>

                <div className="range-slider">
                    <label htmlFor="mon">周日</label>
                    <input {...register('sun')} value={formData['sun']} className="range-slider__range" type="range"  min="0" max="100" />
                    <span className="range-slider__value">{formData['sun']}</span>
                </div>
            </form>
        </div>
    )
}

export default TestForm
