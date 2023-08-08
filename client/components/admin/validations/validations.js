import {useSelector} from "react-redux"



export const validationSport = (obj, sports)=>{


    const err = {}
    if(!obj.name) err.name = "name is required" 
    else {
        const exist =  sports.find(spor=>spor.name == obj.name)
        if (exist) err.name = "name already exists"
    }
    if(!obj.description) err.description= "description is required"
    else if(obj.description.length < 10) err.description= "required min 10 characters"
    if(!obj.image) err.image = "image is required"
    if(!obj.gallery.length) err.gallery = "required one image min."

    return err
}

export const validationCourt = (obj, sports)=>{

    const err = {}
    if(!obj.sport) err.sport = "sport is required"
    if(!obj.name) err.name = "name is required" 
    else{
        const sport = sports?.find(spor=> spor.name == obj.sport)
        if(sport) {
            const exist = sport.court?.find(court=> court.name == obj.name)
            if(exist) err.name = "name already exists"
        }
    } 
    if(!obj.description) err.description= "description is required"
    else if(obj.description.length < 10) err.description= "required min 10 characters"
    if(!Number(obj.memberPrice)) err.memberPrice = "required one num"
    if(!Number(obj.noMemberPrice)) err.noMemberPrice = "price no member required"
    return err
}

export const validationPlans = (obj, plans)=>{


    const err = {}
    if(!obj.name) err.name = "name is required" 
    // else {
    //     const exist =  plans.find(spor=>spor.name == obj.name)
    //     if (exist) err.name = "name already exists"
    // }
    if(!obj.description) err.description= "description is required"
    else if(obj.description.length < 10) err.description= "required min 10 characters"
    if(!Number(obj.price)) err.price = "required one num"
    if(!Number(obj.duration)) err.duration = "required one num"

    return err
}