const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de sesión
app.use(session({
  secret: 'inocuidadpro_clave_supersecreta', // cámbiala por una más segura en producción
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true si usas HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hora
  }
}));

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a InocuidadPro!');
});

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error de conexión a MongoDB:', error);
  });

// Middleware de errores generales
app.use((err, req, res, next) => {
  console.error('❌ Error general:', err.stack);
  res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});


  