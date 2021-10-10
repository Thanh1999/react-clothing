import { ChangeEventHandler } from 'react'
import './form-input.scss'

interface IFormInput {
    handelChange: ChangeEventHandler<HTMLInputElement>,
    label: string,
    [otherProps: string]: any
}

const FormInput: React.FC<IFormInput> = ({ handelChange, label, ...otherProps }) =>
    <div className='group'>
        <input className='form-input' onChange={handelChange} {...otherProps} />
        {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}
        >{label}</label> : null}
    </div>

export default FormInput