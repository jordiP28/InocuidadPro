const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
});

// Inicio de sesión (sin JWT, con sesiones)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  console.log('🔍 Datos recibidos para login:', req.body);

  // Verificación de los campos obligatorios
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    // 🔥 CORREGIDO: Asegurarse de que el campo `password` sea incluido en la consulta
    const user = await User.findOne({ username }).select('+password');
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    console.log('✅ Usuario encontrado:', user);

    // Comparar las contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Almacenar los datos del usuario en la sesión
    req.session.user = {
      id: user._id,
      username: user.username,
      role: user.role
    };

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('🔴 Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
});

// Cerrar sesión
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al cerrar sesión' });
    }

    res.status(200).json({ message: 'Sesión cerrada con éxito' });
  });
});

module.exports = router;





