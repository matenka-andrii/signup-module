<label
    htmlFor = 'email'>
    Email
</label>
<input
id = 'email'
type = 'email'
value = { email }
onBlur = { this._handleFieldBlur }
onChange = { this._handleFieldChange }
/>
<label
    htmlFor = 'password'>
    Password
</label>
<input
id = 'password'
type = 'password'
value = { password }
onChange = { this._handleFieldChange }
/>
<label
    htmlFor = 'confirmPassword'>
    Confirm Password
</label>
<input
id = 'confirmPassword'
type = 'password'
value = { confirmPassword }
onChange = { this._handleFieldChange }
/>



<Form
    model = 'forms.signup'
    validators = { {
        '':    { passwordsMatch },
        // email: {
        //     required,
        //     validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
        // },
        password: {
            required,
            length: (val) => val && val.length >= 6,
        },
        confirmPassword: {
            required,
        },
    } }
    onSubmit = { this._handleFormSubmit }>
    <div className = { Styles.title }>Signup</div>
    <div className = { progressCls }>
        <div />
    </div>
    <div className = { Styles.form }>
        <Control.text
            component = { FormInput }
            controlProps = { {
                id:       'email',
                label:    'Email',
                type:     'email',
                messages: {
                    required:   'Email is required',
                    validEmail: 'Invalid email address',
                },
            } }
            // errors = { {
            //     required,
            //     validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
            // } }
            // mapProps = { {
            //     required: ({ fieldValue }) =>
            //         fieldValue.errors.required && fieldValue.touched && !fieldValue.valid,
            //     validemail: ({ fieldValue }) =>
            //         fieldValue.errors.validEmail && fieldValue.touched && !fieldValue.valid,
            // } }
            model = '.email'

            validators = { {
                required,
                validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
            } }
            //onChange = { this._handleFieldChange }
        />

        <label htmlFor = 'password'>Password</label>
        <Control.text
            id = 'password'
            model = '.password'
            type = 'password'
            // validators = { {
            //     required,
            //     length: (val) => val && val.length >= 6,
            // } }
            //onChange = { this._handleFieldChange }
        />

        <label htmlFor = 'confirmPassword'>Confirm Password</label>
        <Control.text
            id = 'confirmPassword'
            model = '.confirmPassword'
            type = 'password'
            // validators = { {
            //     required,
            //     matches: (val) => val === store.getState().forms.signup.password,
            // } }
            //onChange = { this._handleFieldChange }
        />

    </div>
    <div className = { Styles.footer }>
                        <span
                            className = { Styles.next }
                            onClick = { this._handleButtonClick }>
                            Next <i />
                        </span>
    </div>
</Form>



<label>
<Field
component = 'input'
name = 'gender'
type = 'radio'
value = 'male'
    />{' '}
Male
</label>
<label>
    <Field
        component = 'input'
        name = 'gender'
        type = 'radio'
        value = 'female'
    />{' '}
    Female
</label>
<label>
<Field
component = 'input'
name = 'gender'
type = 'radio'
value = 'unspecified'
    />{' '}
Unspecified
</label>