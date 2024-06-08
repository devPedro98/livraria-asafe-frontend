import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ type, text, disabled, buttonStyle }) => {

    const getButtonClass = () => {
        switch (buttonStyle) {
            case 'danger':
                return styles.button_danger
            default:
                return styles.button_primary;
        }
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${styles.button} ${getButtonClass()} ${disabled ? styles.disabled : ''}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    buttonStyle: PropTypes.oneOf(['primary', 'danger'])
}

export default Button
