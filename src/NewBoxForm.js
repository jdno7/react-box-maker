import './NewBoxForm.css'
import {useState} from 'react'

const NewBoxForm = ({addNewBox}) => {

    const [formData, setFormData] = useState({color:"", width:"", height:""})
    // const [form, setForm] = useState({color:"", width:"", height:""})
    // const [color, setColor] = useState()
    // const [width, setWidth] = useState()
    // const [height, setHeight] = useState()

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        })
        )}

    // const handleColorChange = (e) => {
    //     setColor(e.target.value)
    // }
    // const handleWidthChange = (e) => {
    //     setWidth(e.target.value)
    // }
    // const handleHeightChange = (e) => {
    //     setHeight(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`New Box Created! color:${formData.color} width:${formData.width} height:${formData.height}`)
        addNewBox(formData)
        setFormData({color:"", width:"", height:""})

    }

    return (
        <div className='NewBoxForm'>
            <h2>Add a New Box</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='color'>Box Color:</label> <br/>
                        <input type="text" id="color" name='color' value={formData.color} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='width'>Box Width:</label> <br/>
                        <input type="text" id="width" name='width' value={formData.width} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor='height'>Box Height:</label> <br/>
                    <input type="text" id="height" name='height' value={formData.height} onChange={handleChange}/>
                </div>
                <button>Add Box!</button>
            </form>
        </div>
    )
}

export default NewBoxForm;