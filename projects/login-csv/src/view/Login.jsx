// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const Login = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-50  p-4 rounded">
      <div className="w-50 bg-light p-5 rounded">
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <label htmlFor="username">Username:</label>
            <input {...register("username")} type="text" name="username" id="username" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input {...register("password")} type="password" name="password" id="password" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="role">Role:</label>
            <select name="role" id="role" {...register("role")} className="form-control" required>
              <option value="Administrador">Administrador</option>
              <option value="Trabajador">Trabajador</option>
            </select>
          </div>
          <button type="submit" className="rounded w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;