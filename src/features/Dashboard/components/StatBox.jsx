import { Box, Typography } from "@mui/material";
import ProgressCircle from "../../../components/ui/ProgressCircle";
import PropTypes from 'prop-types'

const StatBox = ({ title, subtitle, icon, progress, increase, span }) => {

    return (
        <Box className='bg-skin-bgAccent flex items-center justify-center'
            sx={{
                gridColumn: `span ${span}`
            }}>
            <Box className='w-full mx-8 flex flex-col'>
                <Box className="flex justify-between">
                    <Box>
                        {icon}
                        <h4 className="font-bold text-skin-base">
                            {title}
                        </h4>
                    </Box>
                    <Box>
                        <ProgressCircle progress={progress} />
                    </Box>
                </Box>
                <Box className="flex flex-grow flex-shrink basis-12 justify-between mt-1">
                    <h5 className="text-skin-green">
                        {subtitle}
                    </h5>
                    <h5 className="italic text-skin-green">
                        {increase}
                    </h5>
                </Box>
            </Box>
        </Box>
    );
};

StatBox.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.element,
    progress: PropTypes.string,
    increase: PropTypes.increase,
    span: PropTypes.number
}


export default StatBox;