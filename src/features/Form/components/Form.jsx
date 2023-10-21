import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import Header from '../../../components/ui/Header'

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().matches(emailRegExp, "Invalid email").required("Required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),

}).required()

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const { register, handleSubmit, formState: { errors, touchedFields }, reset, trigger
    } = useForm({ resolver: yupResolver(userSchema), defaultValues: initialValues })

    const formSubmitHandler = (data) => {

        console.log(data)
        reset()
    }

    const errSubmitHandler = (err) => {
        for (let e in err) {
            //console.log(e)
            touchedFields[e] = true
        }
    }

    useEffect(() => {
        trigger()
    }, [trigger])
    return (

        <Box className="flex flex-1 flex-col m-5 min-w-0">
            <Header title='Create User' subtitle='Create a New User Profile' />
            <form className="flex-1" onSubmit={handleSubmit(formSubmitHandler, errSubmitHandler)}>
                <Box

                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0,1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="First Name"
                        error={!!touchedFields.firstName && !!errors.firstName}
                        helperText={touchedFields.firstName && errors.firstName?.message}
                        sx={{ gridColumn: "span 2" }}
                        {...register('firstName')} />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Last Name"
                        error={!!touchedFields.lastName && !!errors.lastName}
                        helperText={touchedFields.lastName && errors.lastName?.message}
                        sx={{ gridColumn: "span 2" }}
                        {...register('lastName')}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        error={!!touchedFields.email && !!errors.email}
                        helperText={touchedFields.email && errors.email?.message}
                        sx={{ gridColumn: "span 4" }}
                        {...register('email')}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Contact Number"
                        error={!!touchedFields.contact && !!errors.contact}
                        helperText={touchedFields.contact && errors.contact?.message}
                        sx={{ gridColumn: "span 4" }}
                        {...register('contact')}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address 1"
                        error={!!touchedFields.address1 && !!errors.address1}
                        helperText={touchedFields.address1 && errors.address1?.message}
                        sx={{ gridColumn: "span 4" }}
                        {...register('address1')}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address 2"
                        error={!!touchedFields.address2 && !!errors.address2}
                        helperText={touchedFields.address2 && errors.address2?.message}
                        sx={{ gridColumn: "span 4" }}
                        {...register('address2')}
                    />
                </Box>
                <Box className="flex justify-end mt-5">
                    <Button type='submit' className='bg-skin-buttGreen' variant="contained">Create New User</Button>
                </Box>
            </form>
        </Box>

    )
}

export default Form