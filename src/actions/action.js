export function addEducationInputElement (){
    return { 
        type:'ADD_EDUCATION_INPUT'
    }
}

export function removeEducationInputElement (index){
    return { 
        type:'REMOVE_EDUCATION_INPUT',
        index:index
    }
}

export function changeEducationInputData (name, value, index){
    return { 
        type:'CHANGE_EDUCATION_INPUT_DATA',
        name:name,
        value:value,
        index:index
    }
}




export function addExperienceInputElement (){
    return { 
        type:'ADD_EXPERIENCE_INPUT'
    }
}

export function removeExperienceInputElement (index){
    return { 
        type:'REMOVE_EXPERIENCE_INPUT',
        index:index
    }
}

export function changeExperienceInputData (name, value, index){
    return { 
        type:'CHANGE_EXPERIENCE_INPUT_DATA',
        name:name,
        value:value,
        index:index
    }
}