"use client"

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Modal from "./Modal"
import useRentModal from "@/app/hooks/useRentModal"
import Heading from "../Heading";
import { categories } from "../navbar/Categories"
import CategoryInput from "../inputs/CategoryInput";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import ImageUpload from "../inputs/ImageUpload";
import { error } from "console";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    // INFO = 2,
    IMAGES =2,
    // VIDEOS =3,
    DESCRIPTION =3,
    // SKILLS = 5,
    PRICE = 4,
    // CONTACT= 7,
}

const RentModal =()=>{
    const rentModal = useRentModal();
    const router = useRouter();

    const[step , setStep] = useState(STEPS.CATEGORY);
    const[isLoading,setIsloading] = useState(false);
    const{
        register,
        handleSubmit,
        setValue,
        watch,
        formState:{
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            category:"",
            location:null,
            imagesrc:"",
            videosrc:"",
            phoneNo:"",
            price:"",
            title:"",
            description:"",
            skills:""

        }
    })

    
    const category =watch('category')
    const location =watch('location')
    const imageSrc =watch("imageSrc")


    const Map = useMemo(
        () =>
          dynamic(() => import("../Map"), {
            ssr: false,
          }),
        [location]
      );


    const setCustomValue = (id:string,value:any)=>{
        setValue(id,value,{
            shouldValidate:true,
            shouldDirty:true,
            shouldTouch:true
        })
    }

    const onBack =()=>{
       setStep((value)=> value-1)  
    }

    const onNext =()=>{
        setStep((value)=> value+1)
    }

    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        if(step!== STEPS.PRICE){
            return onNext();
        }
        setIsloading(true)

        axios.post('/api/listings',data)
        .then(()=>{
            toast.success('Listing Created!')
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            rentModal.onClose();
        })
        .catch(()=>{
            toast.error("Something went wrong");
        }).finally(()=>{
            setIsloading(false);
        })
    }

    const actionLabel = useMemo(()=>{
        if(step === STEPS.PRICE){
            return "Create"
        }

        return "Next"
    },[step])

    const secondaryActionLabel = useMemo(()=>{
        if(step === STEPS.CATEGORY){
            return undefined
        }
        return "Back"
    },[step])

    let bodyContent =(
    <div className="flex flex-col gap-8">
        <Heading title="Which art do you perform ?"
        subtitle ="Pick a category"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto scrollbar">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
            onClick={(category)=>setCustomValue("category",category)}
            selected={category === item.label}
            label={item.label}
            icon={item.icon}
            />
          </div>
        ))}
        </div>

    </div>)

    if(step === STEPS.LOCATION){
        bodyContent=(
            <div className="flex flex-col gap-8">
                <Heading
                title="Where are you located ?"
                subtitle="Helps customer to find you"
                />
                <CountrySelect 
                value={location} 
                onChange={(value)=>setCustomValue("location",value)}
                
                />

                <Map center={location?.latlng}/>
            </div>
        )
    }

    if(step === STEPS.IMAGES){
        bodyContent =(
            <div>
                <Heading
                title="Add a photo of yourself or your art"
                subtitle="show the world what you are capable of!"
                />
                <ImageUpload
                value ={imageSrc}
                onChange={(value)=>setCustomValue("imageSrc",value)}
                />
            </div>
        )
    }

    if(step === STEPS.DESCRIPTION){
        bodyContent=(
            <div className="flex flex-col gap-8">
                <Heading title="Discribe your speciality" subtitle="let customers know you more !"/>
            <Input id="title" label="Title" disabled={isLoading} register={register} errors={errors} required/>
            <hr/>
            <Input id="description" label="Description" disabled={isLoading} register={register} errors={errors} required/>

            </div>
        )
    }

    if(step === STEPS.PRICE){
        bodyContent=(
            <div className="flex flex-col gap-8">
                <Heading title="Set your price" subtitle="How much do you charge per hour ?"/>
            <Input id="price" label="Price" type="number" disabled={isLoading} register={register} errors={errors} formatPrice required/>

            </div>
        )
    }



    return(
        <Modal title="Become an Idlidu artist"
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined:onBack}
        body={bodyContent}/>
        
        
    )
}

export default RentModal;