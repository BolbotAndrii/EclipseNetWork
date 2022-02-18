import {useEffect, useState} from "react";

const useParallax = (event, elements) => {
    const [valueX, setValueX] = useState(0)
    const [valueY, setValueY] = useState(0)
    const [paraItem, setParaItem] = useState(null)

    useEffect(() => {
        elements.forEach(item => {
            setValueX(event.pageX * -1 / item.dataset.x)
            setValueY(event.pageY * -1 / item.dataset.y)
            item.style.transform = `translate(${valueX}px, ${valueY}px)`

            // parallax(event, item, item.dataset.x, item.dataset.y)
        })
    })

    // function parallax(e, item, x, y) {
    //     setValueX(e.pageX * -1 / x)
    //     setValueY(e.pageY * -1 / y)
    //     item.style.transform = `translate(${valueX}px, ${valueY}px)`
    // }

    return {valueX, valueY}
}
export default useParallax