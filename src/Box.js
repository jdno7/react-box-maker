import './Box.css'

const Box = ({color, height, width, remove, id}) => {

    return (
        <div data-testid={`BG-${color}`} className="Box" style={{
            backgroundColor: `${color}`,
             height: `${height}`,
             width: `${width}`
        }}>
            <button onClick={() => remove(color)}className="Box-btn" data-testid={color}>
                X
            </button>
        </div>
    )
}

export default Box;