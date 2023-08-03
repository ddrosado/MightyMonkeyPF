import {useSelector} from "react-redux"



export const validationSport = (obj, type, errors)=>{


    const err = {...errors}
    if(type == "name"){
        if(obj.name.length == 0) err.name = "name is required" 
        else err.name = ""  
        // else if(sports.find(sport=> sport.name == obj.name)) err.name = "name already exists"
    } else if(type == "description"){
        if(!obj.description.length) err.description= "description is required"
        else if(obj.description.length < 10) err.description= "required min 10 characters"
        else err.description = ""  
    } else {
        if(!obj.image.length) err.image = "image is required"
        else err.image = ""  
    }

    return err
}