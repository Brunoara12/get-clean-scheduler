import PropTypes from 'prop-types'

const Header = ({ title, subtitle }) => {



    return (
        <div className="mb-7 flex flex-col w-auto">
            <h2 className="text-skin-base font-bold mb-1 text">
                {title}
            </h2>
            <h5 className="text-skin-green">
                {subtitle}
            </h5>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Header