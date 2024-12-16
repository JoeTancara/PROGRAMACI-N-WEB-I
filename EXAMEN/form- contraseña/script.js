document.getElementById('generatePassword').addEventListener('click', () => {
    const ci = document.getElementById('ci');
    const name = document.getElementById('name');
    const apPaterno = document.getElementById('apPaterno');
    const apMaterno = document.getElementById('apMaterno');
    const birthdate = document.getElementById('birthdate');
  
    let isValid = true;
  
    // Validación para campos vacíos o con solo espacios
    const isEmptyOrSpaces = (str) => !str || str.trim().length === 0;
  
    // Validar CI
    if (!ci.validity.valid || isEmptyOrSpaces(ci.value)) {
      document.getElementById('ciError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('ciError').style.display = 'none';
    }
  
    // Validar Nombre
    if (!name.validity.valid || isEmptyOrSpaces(name.value)) {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('nameError').style.display = 'none';
    }
  
    // Validar Apellido Paterno
    if (!apPaterno.validity.valid || isEmptyOrSpaces(apPaterno.value)) {
      document.getElementById('apPaternoError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('apPaternoError').style.display = 'none';
    }
  
    // Validar Apellido Materno (Opcional)
    if (!apMaterno.validity.valid) {
      document.getElementById('apMaternoError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('apMaternoError').style.display = 'none';
    }
  
    // Validar Fecha de Nacimiento
    if (!birthdate.validity.valid || isEmptyOrSpaces(birthdate.value)) {
      document.getElementById('birthdateError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('birthdateError').style.display = 'none';
    }
  
    if (isValid) {
      // Generar contraseña usando las dos primeras letras de cada campo
      const ciPart = ci.value.slice(0, 2).toUpperCase();
      const namePart = name.value.slice(0, 2).toUpperCase();
      const apPaternoPart = apPaterno.value.slice(0, 2).toUpperCase();
      const apMaternoPart = apMaterno.value.trim().length > 0 ? apMaterno.value.slice(0, 2).toUpperCase() : "XX";
      const birthdatePart = birthdate.value.replace(/-/g, '').slice(-4);
  
      const password = `${ciPart}${namePart}${apPaternoPart}${apMaternoPart}${birthdatePart}`;
  
      // Mostrar contraseña en el modal
      document.getElementById('passwordResult').textContent = `Tu contraseña generada es: ${password}`;
      document.getElementById('modal').style.display = 'flex';
    }
  });
  
  // Cerrar el modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  