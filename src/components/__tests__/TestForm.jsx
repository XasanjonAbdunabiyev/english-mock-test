import React from "react"
import { useForm } from "react-hook-form"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchData = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
    )
    return response.data
}

const MyForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm()

    const { data: apiData } = useQuery({
        queryKey: ["lorem"],
        queryFn: fetchData,
    })

    React.useEffect(() => {
        if (apiData) {
            Object.keys(apiData).forEach((key) => {
                setValue(key, apiData[key])
            })
        }
    }, [apiData, setValue])

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register("name")} />
            </label>
            <label>
                Email:
                <input {...register("email")} />
            </label>

            <label>
                Age:
                <input
                    type="number"
                    {...register("age", {
                        required: "Age is required",
                        min: 18,
                        max: 99,
                    })}
                />
            </label>
            {errors.age && <p>{errors.age.message}</p>}

            {/* Add other form fields as needed */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default MyForm
