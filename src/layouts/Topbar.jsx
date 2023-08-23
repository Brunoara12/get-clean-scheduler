import { NotificationsOutlined, SettingsOutlined, PersonOutlined, Search } from '@mui/icons-material'
import { Input, Button, inputClasses } from '@mui/base'
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { useState, forwardRef } from 'react';

const CustomInput = forwardRef(function CustomInput(props, ref) {
    const { slots, ...other } = props;
    return (
        <Input
            slots={{
                root: StyledInputRoot,
                input: StyledInputElement,
                ...slots,
            }}
            {...other}
            ref={ref}
        />
    );
});

CustomInput.propTypes = {
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots: PropTypes.shape({
        input: PropTypes.elementType,
        root: PropTypes.elementType,
        textarea: PropTypes.elementType,
    }),
};

function Topbar() {


    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className="flex justify-between p-2">
            <div className="flex bg-primary-100 dark:bg-dkPrimary-500 rounded bg-inherit outline-none">
                <CustomInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment >
                            <IconButton
                                className="shadow-none hover:shadow-none"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>

            <div className="flex">
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton >
                <IconButton>
                    <PersonOutlined />
                </IconButton>
            </div>
        </div>
    )


}

const StyledInputRoot = styled('div')(`
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 400;
        border-radius: 4px;
        color: #fff;
        background: inherit;
        border: 1px solid #cccccc;
        display: flex;
        align-items: center;
        justify-content: center;
      
      
        &.${inputClasses.focused} {
          border-color: rgb(0,0, 150);
          box-shadow: 0 0 0 3px rgb(0,0, 150);
        }
      
        &:hover {
          border-color: rgb(0,0, 150);
          box-shadow: 0px 2px 2px #cccccc;
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
);

const StyledInputElement = styled('input')(`
        font-size: 0.875rem;
        font-family: inherit;
        font-weight: 400;
        line-height: 1.5;
        flex-grow: 1;
        color: #000;
        background: inherit;
        border: none;
        border-radius: inherit;
        box-shadow: none;
        padding: 8px 12px;
        outline: 0;

        &:hover {
            box-shadow: none;
        }
      `,
);

const IconButton = styled(Button)(`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: inherit;
        cursor: pointer;
        `,
);

const InputAdornment = styled('div')`
        margin: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      `;

export default Topbar