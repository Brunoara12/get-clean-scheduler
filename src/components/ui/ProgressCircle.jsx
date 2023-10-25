import { Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    const circleDegree = progress * 360
    return (
        <Box
            className="rounded-full"
            sx={{
                background: `
                    radial-gradient(var(--color-background-accent) 55%, transparent calc(56% + 1px)),
                    conic-gradient(transparent 0deg ${circleDegree}deg, var(--color-button-bl) ${circleDegree}deg 360deg),
                    var(--color-button-gr)`,
                width: `${size}px`,
                height: `${size}px`
            }} />
    )
}

ProgressCircle.propTypes = {
    progress: PropTypes.string,
    size: PropTypes.string
}


export default ProgressCircle