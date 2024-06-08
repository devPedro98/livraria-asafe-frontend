
const Input = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    onBlur,
    error,
    placeholder,
    ...props
}) => {
    return (
        <div className="input-container">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`input ${error ? 'input-error' : ''}`}
                {...props}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default Input;
