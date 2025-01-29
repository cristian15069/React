import Papa from 'papaparse';

export const validateUserFromCSV = async (username, password, role) => {
  try {
    const response = await fetch('/src/db/db_login.csv');
    if (!response.ok) {
      throw new Error('Error al cargar el archivo CSV');
    }
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          console.log('CSV Data:', results.data); // Verifica los datos del CSV
          const user = results.data.find(user => {
            console.log('Verificando usuario:', user); // Verifica cada usuario
            if (user.username && user.password) {
              return user.username.trim() === username.trim() && user.password.trim() === password.trim() && user.role.trim() === role.trim();
            }
            return false;
          });
          console.log('username encontrado:', user); // Verifica el username encontrado
          resolve(user);
        },
        error: (error) => {
          reject(new Error('Error al analizar el archivo CSV: ' + error.message));
        }
      });
    });
  } catch (error) {
    console.error(error);
    throw new Error('Error en la validación del usuario: ' + error.message);
  }
};