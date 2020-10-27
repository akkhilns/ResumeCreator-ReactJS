import { combineReducers } from 'redux';


/******************************************************************
 * Education
 *****************************************************************/

export function inputControllerEducation (state={
    educationInputList:[
        {
            institute   : "",
            degree      : "",
            year        : "",
        }
    ]
    }, action){
    switch (action.type) {

    case 'ADD_EDUCATION_INPUT':
        state.educationInputList.push({
            institute:"",
            degree:"",
            year:""
        });
        return {
            educationInputList: [...state.educationInputList]
        };
    case 'REMOVE_EDUCATION_INPUT':
        var educationList = [...state.educationInputList]
        educationList.splice(action.index, 1);
        return {
            educationInputList: [...educationList]
        };
    case 'CHANGE_EDUCATION_INPUT_DATA':
        var educationList = [...state.educationInputList];
        educationList[action.index][action.name] = action.value;
        return {
            educationInputList: [...educationList]
        };
    default:
        return state;
    }
}



/******************************************************************
 * Experience
 *****************************************************************/

export function inputControllerExperience (state={
    experienceInputList:[
        {
            company     : "",
            designation : "",
            year        : "",
        }
    ],
    }, action){
    switch (action.type) {
    case 'ADD_EXPERIENCE_INPUT':
        state.experienceInputList.push({
            company:"",
            designation:"",
            year:""
        });
        return {
            experienceInputList: [...state.experienceInputList]
        };
    case 'REMOVE_EXPERIENCE_INPUT':
        var experienceList = [...state.experienceInputList]
        experienceList.splice(action.index, 1);
        return {
            experienceInputList: [...experienceList]
        };
    case 'CHANGE_EXPERIENCE_INPUT_DATA':
        var experienceList = [...state.experienceInputList];
        experienceList[action.index][action.name] = action.value;
        return {
            experienceInputList: [...experienceList]
        };
    default:
        return state;
    }
}
  
export const reducer = combineReducers({ inputControllerEducation, inputControllerExperience});