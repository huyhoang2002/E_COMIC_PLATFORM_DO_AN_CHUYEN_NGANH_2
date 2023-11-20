import { Button } from "flowbite-react"
import { getCountries } from "../../../utils/static/country"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { isSuccessSelector } from "../../../store/user/selector"
import { createUserProfile } from "../../../store/user/action"
import { useForm } from "react-hook-form"
import { IAddUser } from "../../../services/models/user"
import { useEffect } from "react"
import { isLoadingSelector } from "../../../store/comic/selector"
import { AlertError, AlertSuccess, AlertWait } from "../../../utils/helpers/alertHelper"
import { resetStateAction } from "../../../store/base/action"

const CreateProfile = () => {
    const { handleSubmit, register } = useForm<IAddUser>()
    var countries = getCountries()
    const dispatch = useDispatch()
    const isSuccess = useSelector(isSuccessSelector)
    const isLoading = useSelector(isLoadingSelector)

    const handleCreateProfile = handleSubmit((value) => {
        console.log(value)
        dispatch(createUserProfile(value))
    })

    useEffect(() => {
       if (isSuccess === true) {
            AlertSuccess({
                title: "Create profile successfully"
            }) 
       } else if (isSuccess === false) {
            AlertError({
                title: "Create profile failed"
            })
       }
       
       return () => {
            if (isSuccess === true || false) {
                dispatch(resetStateAction())
            }
       }
    }, [isSuccess, dispatch])

    return (
        <>
            <div className="absolute z-1 w-full">
                <img className="h-[100vh] w-full" src="https://wallpapers.com/images/hd/comic-book-background-a09lfl6egxpsqgwc.jpg" alt="" />
            </div>
            <div className="absolute z-2 bg-slate-800 h-[100vh] w-full opacity-90"></div>
            <div className="absolute z-2 w-full h-[100vh] flex justify-center items-center">
                <form onSubmit={handleCreateProfile} className="bg-gray-700 p-5 flex flex-col gap-3">
                    <h1 className="font-bold text-[30px] text-orange-500">Create profile</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">First Name</label>
                            <input {...register("firstName")} placeholder="first name..." className="text-black w-[300px]" type="text"  />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Last Name</label>
                            <input {...register("lastName")} placeholder="last name..." className="text-black w-[300px]" type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Age</label>
                            <input {...register("age")} placeholder="age..." className="text-black w-[300px]" type="number" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Country</label>
                            <select {...register("country")} name="" id="" className="w-[300px] text-black">
                                {countries.map(country => {
                                    return (
                                        <option className="text-black" key={country.country}>{country.country}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Job title</label>
                            <input {...register("job")} type="text" placeholder="job title..." className="text-black"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Phone number</label>
                            <input {...register("phoneNumber")} type="number" placeholder="Phone number..." className="text-black"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Bio</label>
                            <textarea {...register("bio")} placeholder="bio..." className="text-black resize-none h-[200px]"/>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-row justify-between">
                        <Button type="submit">Create profile</Button>
                        <Button className="bg-orange-600">Sign out</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateProfile