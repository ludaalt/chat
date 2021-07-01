import { useContext } from "react";
import Context from '../context';
import PropTypes from 'prop-types';

const styles = {
    button: {
        display: 'inline-block',
        padding: '10px 30px',
        borderRadius: '15px',
        border: 'none',
        cursor: 'pointer',
        opacity: '0.5', 
    }
}

/**
 * Component for Ready Message
 *
 * @component
 * @example
 * const title = 'Example title'
 * return (
 *   <ReadyMessage title={title} />
 * )
 */

const ReadyMessage = ({ title }) => {
    const { sendMessage } = useContext(Context);
    return (
        <button style={styles.button} onClick={() => sendMessage(title)}>{ title }</button>
    )
}

ReadyMessage.propTypes = {
    /**
    * Title of message
    */
    title: PropTypes.string.isRequired
}

export default ReadyMessage;