import React, { PropTypes } from 'react';

const TextFieldGroup = ({ field, value, label, error, type, placeholder, onChange, disabled }) => {
	return (
		<div className="push-half--bottom">
			<label htmlFor={field} className="sr-only">{label}</label>
			<input
				value={value}
				onChange={onChange}
				type={type}
				name={field}
				id={field}
				min="1"
				className="main-form__input"
				placeholder={placeholder}
				disabled={disabled}
			/>
			{error && <span>{error}</span>}
		</div>
	);
};

TextFieldGroup.propTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
	type: 'text'
};

export default TextFieldGroup;
