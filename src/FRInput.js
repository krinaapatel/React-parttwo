import React from 'react'

/*function FRInput() {
    return (
        <div>
            <input type="text" />
        </div>
     )
}*/
// replace taditional function into ARROW FUNCTION

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default FRInput