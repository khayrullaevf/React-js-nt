import React from 'react'

import useRegister from './useRegister'

const Register = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      error,
      handleSubmit,
      handleFirstnameChange,
      handleLastnameChange,
      handleEmailChange,
      handlePasswordChange,
      handleConfirmPasswordChange,
    } = useRegister();











  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleFirstnameChange}
        value={firstName}
        placeholder="Enter your firstname"
      />
      {error.firstName && <p>{error.firstName}</p>}
      <input
        type="text"
        onChange={handleLastnameChange}
        value={lastName}
        placeholder="Enter your lastname"
      />
      {error.lastName && <p>{error.lastName}</p>}
      <input
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Enter your  email"
      />
      {error.email && <p>{error.email}</p>}
      <input
        type="password"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Enter your  password"
      />
      {error.password && <p>{error.password}</p>}
      <input
        type="password"
        onChange={handleConfirmPasswordChange}
        value={confirmPassword}
        placeholder="Confirm your  password"
      />
      {error.confirmPassword && <p>{error.confirmPassword}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default Register