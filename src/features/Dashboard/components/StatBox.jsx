import { Box } from "@mui/material";
import ProgressCircle from "../../../components/ui/ProgressCircle";
import PropTypes from 'prop-types'

const StatBox = ({ title, subtitle, icon, progress, increase }) => {

    return (
        <Box className='flex items-center justify-center h-full flex-col mx-8'>
            <Box className="flex justify-between w-full">
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
            <Box className="flex justify-between w-full mt-1">
                <h5 className="text-skin-green">
                    {subtitle}
                </h5>
                <h5 className="italic text-skin-green">
                    {increase}
                </h5>
            </Box>
        </Box>
    );
};

StatBox.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.element,
    progress: PropTypes.string,
    increase: PropTypes.string,
}


export default StatBox;