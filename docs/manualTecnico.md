# Manual Técnico - InocuidadPro

## Introducción

**InocuidadPro** es una plataforma web para certificar a los manipuladores de alimentos. Los usuarios pueden registrarse, realizar un curso, tomar exámenes y obtener un certificado tras aprobar. El administrador tiene control sobre el material del curso y la emisión de certificados.

Este manual está destinado a los desarrolladores que deseen entender cómo funciona el sistema, cómo configurar el entorno de desarrollo, y cómo contribuir al proyecto.

---

## 1. Tecnologías Utilizadas

El proyecto **InocuidadPro** está desarrollado utilizando las siguientes tecnologías:

- **Frontend**:
  - **HTML5**: Estructura de la página web.
  - **CSS3**: Estilos y diseño.
  - **JavaScript**: Funcionalidades interactivas.

- **Backend**:
  - **Node.js**: Plataforma para ejecutar JavaScript en el servidor.
  - **Express**: Framework para crear la API del servidor.

- **Base de datos**:
  - **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos del usuario, resultados de exámenes y certificados.

- **Generación de certificados**:
  - **PDFKit**: Librería para generar los certificados en formato PDF.

---

## 2. Arquitectura del Proyecto

La estructura de carpetas es la siguiente:

InocuidadPro/ │ ├── public/ # Archivos estáticos (CSS, imágenes, JS) ├── src/ │ ├── controllers/ # Controladores para manejar la lógica de la aplicación │ ├── models/ # Modelos de base de datos (Usuario, Examen, Certificado) │ ├── routes/ # Rutas de la API (registro, autenticación, exámenes) │ └── views/ # Vistas para renderizar las páginas HTML │ ├── config/ # Configuración general (puertos, base de datos) │ ├── .gitignore # Archivos que se deben ignorar por Git ├── package.json # Dependencias del proyecto └── server.js # Archivo principal para ejecutar el servidor


---

## 3. Instrucciones para Ejecutar el Proyecto Localmente

Para ejecutar **InocuidadPro** en tu entorno local, sigue los siguientes pasos:

### 3.1 Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 14 o superior)
- **MongoDB** (para la base de datos local)

### 3.2 Pasos para la configuración

1. **Clona el repositorio**:

   git clone https://github.com/tuusuario/InocuidadPro.git
Instala las dependencias:

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

cd InocuidadPro
npm install
Configura la base de datos:

Si estás usando MongoDB localmente, asegúrate de que esté en ejecución. Si no, puedes usar una base de datos remota.

Configura el archivo .env:

Crea un archivo .env en la raíz del proyecto con las siguientes variables:

env
MONGO_URI=mongodb://localhost:27017/inocuidadpro
PORT=3000
Ejecuta el servidor:

Finalmente, ejecuta el servidor con:
npm start
El servidor debería estar corriendo en http://localhost:3000.

4. Base de Datos
El proyecto utiliza MongoDB como base de datos NoSQL. Los principales modelos de datos son:

Usuario: Contiene información sobre el usuario, incluyendo nombre, correo electrónico, y resultados de exámenes.

Examen: Los exámenes disponibles para los usuarios.

Certificado: Información sobre el certificado otorgado al usuario tras aprobar el examen.

Cada modelo está definido en src/models/ y tiene métodos para interactuar con la base de datos (como guardar y buscar usuarios).

5. Funciones Principales
5.1 Registro de usuario
El registro de usuario se maneja en la ruta /register, donde se crea una nueva cuenta para el usuario con su correo y contraseña. Después de registrarse, el usuario puede acceder al curso.

5.2 Exámenes
Los usuarios pueden tomar un examen a través de la ruta /exams. El sistema valida las respuestas y calcula la puntuación.

5.3 Certificación
Después de aprobar un examen, el sistema genera un certificado PDF que puede ser descargado. El administrador valida las respuestas y expide el certificado.

6. Contribución
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama para tu contribución (git checkout -b mi-rama).

Haz los cambios necesarios y realiza un commit con una descripción clara (git commit -m "Descripción de mi contribución").

Sube tus cambios a tu repositorio remoto (git push origin mi-rama).

Abre un pull request para que tus cambios sean revisados e integrados.

7. Pruebas
Si deseas ejecutar pruebas en el sistema (si ya se han configurado pruebas), utiliza una herramienta como Mocha o Jest.

Para ejecutar las pruebas, usa:

npm test
