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