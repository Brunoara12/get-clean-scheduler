import { Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

const DashboardComponent = ({ children, colSpan, rowSpan = 1, overflow = false }) => {
    return (
        <Box
            className={`bg-skin-bgAccent flex flex-col ${overflow ? "overflow-auto" : ""}`}
            gridColumn={`span ${colSpan}`}
            gridRow={`span ${rowSpan}`}

        >
            {children}
        </Box>
    )
}

DashboardComponent.propTypes = {
    children: PropTypes.element,
    colSpan: PropTypes.number,
    rowSpan: PropTypes.number,
    overflow: PropTypes.bool
}

export default DashboardComponent