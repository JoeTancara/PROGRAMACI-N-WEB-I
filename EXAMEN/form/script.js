document.getElementById('submit').addEventListener('click', () => {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
  
    let isValid = true;
  
    // Validar Nombre
    if (!name.validity.valid) {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('nameError').style.display = 'none';
    }
  
    // Validar Correo Electrónico
    if (!email.validity.valid) {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('emailError').style.display = 'none';
    }
  
    // Validar Teléfono
    if (!phone.validity.valid) {
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('phoneError').style.display = 'none';
    }
  
    // Validar Contraseña
    if (!password.validity.valid) {
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('passwordError').style.display = 'none';
    }
  
    // Mostrar los datos si todo es válido
    if (isValid) {
      const modal = document.getElementById('modal');
      const modalData = document.getElementById('modalData');
      modalData.innerHTML = `
        <li><strong>Nombre:</strong> ${name.value}</li>
        <li><strong>Correo Electrónico:</strong> ${email.value}</li>
        <li><strong>Teléfono:</strong> ${phone.value}</li>
        <li><strong>Contraseña:</strong> ${'*'.repeat(password.value.length)}</li>
      `;
      modal.style.display = 'flex';
    }
  });
  
  // Cerrar el modal
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  