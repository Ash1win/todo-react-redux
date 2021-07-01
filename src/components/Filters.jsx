import React from "react"
import { filterActiveOnly, changeFilterColors } from "../slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"


export default function Filters(props) {

    const filters = useSelector((state) => state.filters)
    const dispatch = useDispatch()

    return(
        <div className={ `filters-container ${props.hideFilters ? "" : "expand" }` } >
            <label>
                <input type="checkbox" 
                    checked={ filters.activeOnly }
                    onChange={ () => {
                        dispatch(filterActiveOnly())
                    } }
                />
                Active
            </label>
            <label>
                <input type="checkbox" 
                    onChange={
                        () => {
                            dispatch(changeFilterColors({ color: "red" }))
                        }
                    }
                />
                red
            </label>
            <label>
                <input type="checkbox" 
                    onChange={
                        () => {
                            dispatch(changeFilterColors({ color: "yellow" }))
                        }
                    }
                />
                yellow
            </label>
            <label>
                <input type="checkbox" 
                    onChange={
                        () => {
                            dispatch(changeFilterColors({ color: "purple" }))
                        }
                    }
                />
                purple
            </label>
        </div>
    )
}