import store from '../context/store'; 
import { addItem } from '../context/userInputReducer'; 



export default class userPrompt{
    
    constructor(){}
    
    handleAddItem = (itemText,idNumber ) => {
        store.dispatch(addItem({id:idNumber,content: itemText}));
    };

    sendPrompt(text) {
        
        alert(text);
    }
}

