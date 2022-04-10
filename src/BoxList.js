import boxItems from './boxItems'
import {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'
import {v4 as uuid} from "uuid" 

const BoxList = () => {
    const [list, setList] = useState(boxItems)
    const addNewBox = (nBox) => {
        setList([
            ...list, {...nBox}
        ]) 
    }

    const removeBox = (id) => {
        console.log(id)
        const newList = list.filter(box => {
            return box.color != id
        })
        console.log(newList)
        // console.log(newList[newList.indexOf(newList.find(el => Object.values(el).includes(id)))])
        // console.log(newList.indexOf(newList.find(el => Object.values(el).includes(id))))
        // newList.splice(newList.indexOf(newList.find(el => id)), 1)
        setList(newList)
    }
    const boxComponents = list.map(
        box => 
        <Box 
            color={box.color} 
            height= {box.height} 
            width={box.width}
            id={uuid()}
            key={uuid()}
            remove={removeBox}
            data-testid={`BG-${box.color}`}
        />
    )
    
    return (
        <>
            <div className='BoxList'>
            {boxComponents}
            </div>
            <NewBoxForm addNewBox={addNewBox}/>
        </>
        
    )
   
}

export default BoxList;