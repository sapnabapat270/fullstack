import React from 'react';
import classnames from 'classnames';

const TextAreaGroup = ({ field, value, label, error, onChange, checkUserExists,rows,cols }) => {
    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <textarea
                onChange={onChange}
                onBlur={checkUserExists}
                value={value}
                name={field}
                className="form-control"
                rows={rows}
                cols={cols}
            />
            {error && <span className="help-block">{error}</span>}
        </div>  );
}

TextAreaGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    checkUserExists: React.PropTypes.func,
    rows:React.PropTypes.number.isRequired,
    cols:React.PropTypes.number.isRequired
}

TextAreaGroup.defaultProps = {
    type: 'text'
}

export default TextAreaGroup;
