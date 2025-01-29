import Papa from 'papaparse';

export const validateUserFromCSV = (username, password, role) => {
  return fetch('/src/db/db_login.csv')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo CSV');
      }
      return response.text();
    })
    .then(csvText => {
      return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const user = results.data.find(user => {
              if (user.username && user.password) {
                return user.username.trim() === username.trim() && user.password.trim() === password.trim() && user.role.trim() === role.trim();
              }
              return false;
            });
            resolve(user);
          },
          error: (error) => {
            reject(new Error('Error al analizar el archivo CSV: ' + error.message));
          }
        });
      });
    });
};