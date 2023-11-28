import React from 'react'
import {useState, useEffect}

function worker({knowledge}: {knowledge: Record<string, string>}) {

    return( 
        <div>
            {knowledge}
        </div>
        )
    }


export default worker