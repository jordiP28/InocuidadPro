const mongoose = require('mongoose');

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio'], // Mensaje personalizado
    unique: true,  // Asegura que el nombre de usuario sea único
    trim: true,    // Elimina los espacios en blanco al principio y final
    minlength: [3, 'El nombre de usuario debe tener al menos 3 caracteres'], // Validación de longitud mínima
    maxlength: [30, 'El nombre de usuario no puede tener más de 30 caracteres'] // Longitud máxima
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'], // Mensaje personalizado
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'], // Validación de longitud mínima
    select: false // Evita que la contraseña sea devuelta en las consultas
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Solo puede ser 'user' o 'admin'
    default: 'user'
  }
}, { timestamps: true }); // Para registrar las fechas de creación y actualización

// Modelo del usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
