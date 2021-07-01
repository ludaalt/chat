import { useContext, useState } from 'react';
import Context from '../context';
import { ReactComponent as PlaneSvg} from '../assets/plane.svg';

const styles = {
    form: {
        minWidth: '30%',
        display: 'flex', 
        alignItems: 'center',
    },

    input: {
        padding: '10px',
        border: 'none',
        borderRadius: '15px',
        width: '90%',
        opacity: '0.5',
    },

    button: {
        display: 'inline-block',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        marginLeft: '10px',
    }
}

/**
 * Renders form for enter the message
 *
 * @component
 * @example 
 * 
 *   <form>
 *      <input />
 *      <button></button> 
 *   </form>
 * 
 * )
 */

const MessageInput = () => {
    
    let [inputValue, setValue] = useState('');

    const { sendMessage } = useContext(Context);

    const getInputValue = (event) => {
        setValue(event.target.value)
    }

    const handleForm = (event) => {
        event.preventDefault();

        if(inputValue.trim()) {           
            setValue(inputValue = '');
        }
    }

    return (
        <form style={styles.form} onSubmit={handleForm } >
            <input 
                type="text" 
                style={styles.input} 
                value={inputValue} 
                onChange={getInputValue}
                placeholder="Please enter here"
            />
            <button 
                style={styles.button} 
                onClick={() => sendMessage(inputValue)}
            > 
                <PlaneSvg /> 
            </button>
        </form>
    )
}

export default MessageInput;