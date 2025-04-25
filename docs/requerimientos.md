# Requerimientos del Proyecto: InocuidadPro

## Nombre del Proyecto
**InocuidadPro**

## Objetivo General
Crear una plataforma web que certifique a personas como manipuladores de alimentos mediante cursos, exámenes y validación por parte de un administrador.

## Perfiles de Usuario
- **Usuario Registrado:**
  - Puede registrarse e iniciar sesión en la plataforma.
  - Accede al curso y a los materiales de estudio.
  - Realiza exámenes para certificar sus conocimientos.
  - Obtiene un certificado si aprueba todos los exámenes.

- **Administrador:**
  - Revisa las notas de los usuarios.
  - Expide certificados en PDF si el usuario aprueba el curso.
  - Sube o baja materiales del curso (como PDFs, videos, etc.).

## Funcionalidades Principales
- **Registro e inicio de sesión**:
  - Los usuarios pueden registrarse y iniciar sesión en la plataforma.
  - Se validan los datos del usuario durante el registro.

- **Sistema de Cursos**:
  - Los usuarios pueden acceder a los materiales del curso.
  - El curso se divide en módulos o lecciones.

- **Sistema de Exámenes**:
  - Los usuarios realizan exámenes al final de cada módulo.
  - Los exámenes contienen preguntas de opción múltiple, verdadero/falso, etc.

- **Certificación**:
  - Una vez que el usuario aprueba todos los exámenes, el administrador puede expedir un certificado en PDF.
  - El administrador podrá revisar las notas de los usuarios.

- **Gestión de Materiales**:
  - El administrador puede subir y bajar materiales del curso, como documentos PDF, videos y enlaces.

- **Base de Datos**:
  - La plataforma almacenará datos de usuarios, materiales, exámenes y resultados en una base de datos.

## Tecnologías Usadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js con Express
- **Base de Datos**: MongoDB (o SQLite)
- **Generación de Certificados**: pdfkit o html-pdf

## Estructura del Proyecto
El proyecto estará dividido en dos partes principales: el frontend y el backend.
- **Frontend**: Todo lo relacionado con la interfaz de usuario (UI), accesible en un navegador.
- **Backend**: El servidor que maneja la lógica, base de datos y autenticación de usuarios.
