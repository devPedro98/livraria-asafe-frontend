import styles from './Input.module.css'
import PropTypes from 'prop-types';

const Input = ({ type, text, name, placeholder, handleChange, value, required, disabled }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={value}
                    required={required}
                    disabled={disabled}
                    rows="5"
                    cols="50"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={value}
                    required={required}
                    disabled={disabled}
                />
            )}
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
}


export default Input
