import React from 'react';

export default function TeamMemberForm(props) {
    const { values, update, submit, disabled, errors } = props;

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked :  value
        update(name, valueToUse) // callback from props 
    }

    const onSubmit = event => {
        // doesn't allow browser to reload which would cause it to go back to initial form state/values
        event.preventDefault();
        submit(); // callback from props
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
            <h2>Welcome to Lambda</h2>
            <h3>Application</h3>
            <h4><bold>Please complete all information below:</bold></h4>
                <label>
                    First Name*&nbsp;
                    <input name='fname' type='text' placeholder='Enter First Name...' maxLength='25' value={values.fname} onChange={onChange} /><br></br>
                </label><br></br>
                <label>
                    Last Name*&nbsp;
                    <input name='lname' type='text' placeholder='Enter Last Name...' maxLength='25' value={values.lname} onChange={onChange} /><br></br>
                </label><br></br>
                <label>
                    Email*&nbsp;
                    <input name='email' type='email' placeholder='Enter E-Mail...' maxLength='30' value={values.email} onChange={onChange} /><br></br>
                </label><br></br>
                <label>
                    Password*&nbsp;
                    <input name='password' type='password' placeholder='Enter Password...' maxLength='20' value={values.password} onChange={onChange} /><br></br>
                </label><br></br>
                {/* <label>
                    Confirm Password:&nbsp;
                    <input name='password' type='password' placeholder='Reenter Password...' maxLength='20' value={values.password} onChange={onChange} /><br></br>
                </label><br></br> */}
                <label>
                    Role*:&nbsp;
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>-------Select Role-------</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label><br></br>
            </div>
            <div className='form-group checkboxes'>
                <p>A change in our Terms of Service takes effect on January 1, 2021. Please read them carefully. A high-level summary of changes is available here.</p>
                <input name='terms' type='checkbox' checked={values.terms} onChange={onChange} />
                <label>I agree to the new Terms of Service</label>
            </div>
            <div className='errors'>
                <div>{errors.fname}</div>
                <div>{errors.lname}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.role}</div>
            </div>
            <div className='submit'>
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
    );
}