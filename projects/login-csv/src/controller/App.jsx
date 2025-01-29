// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Login from '../view/Login';
import { validateUserFromCSV } from '../model/Model.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (data) => {
    try {
      console.log('Datos del formulario:', data);
      const user = await validateUserFromCSV(data.username, data.password, data.role);
      if (user) {
        setIsAuthenticated(true);
        setUserRole(user.role);
        setErrorMessage('');
        console.log('usuario autenticado');
      } else {
        setErrorMessage('Usuario, contraseña o rol incorrectos');
        console.log('Usuario, contraseña o rol incorrectos');
      }
    } catch (error) {
      setErrorMessage('Error al validar datos');
      console.log('Error al validar datos', error);
    }
  }
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('');
  };

  return (
    <div className="App">
      {
        isAuthenticated ? (
          <div className="text-center">
            <h2>Bienvenido, {userRole === 'Administrador' ? 'eres administrador' : 'no eres administrador, tu rol es Trabajador'}
            </h2>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <>
            {errorMessage && <p className='d-flex justify-content-center align-items-center alert alert-danger'>{errorMessage}</p>}
            <Login onSubmit={handleLogin} />
          </>
        )
      }
    </div>
  );
}

export default App;