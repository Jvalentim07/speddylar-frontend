import React from "react"

const Service = (prop) => {
    console.log(prop)
    return (
        <div>
            {prop.serviceType}
        </div>
    )
}

export default Service