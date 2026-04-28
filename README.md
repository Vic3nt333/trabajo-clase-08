# Trabajo Clase 08 - Servidor Express con Gestión de Tareas

## Descripción del Proyecto

Aplicación backend desarrollada con Express.js que implementa un servidor web con:
- Servicio de archivos estáticos
- Middleware de logging
- API RESTful para gestión de tareas (en memoria)
- Validación de campos obligatorios
- Manejo de errores HTTP

## Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** (incluido con Node.js)
- Terminal o CMD

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/Vic3nt333/trabajo-clase-08.git
cd trabajo-clase-08
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor
```bash
node app.js
```

El servidor estará disponible en: **http://localhost:3000**

## Rutas Disponibles

### Sitio Estático
- `GET /` - Página de inicio con interfaz del sitio

### API de Cursos
- `GET /api/cursos` - Obtiene la lista de cursos disponibles
- `POST /api/saludar` - Envía un saludo personalizado
  - Body: `{ "nombre": "Tu Nombre" }`

### API de Tareas
- `GET /api/tareas` - Lista todas las tareas (vacío al inicio)
- `POST /api/tareas` - Crea una nueva tarea
  - Body: `{ "texto": "descripción de la tarea" }`
  - Respuesta: Código 201 con la tarea creada
- `PUT /api/tareas/:id/completar` - Marca una tarea como completada
  - URL: `/api/tareas/1/completar` (reemplaza 1 con el ID)
  - Respuesta: Código 200 si existe, 404 si no

## Middleware Implementado

### Logger
Registra en consola cada petición con:
- Timestamp (fecha y hora ISO)
- Método HTTP (GET, POST, PUT, etc.)
- URL solicitada

Ejemplo de log:
```
[2026-04-28T10:30:45.123Z] GET /api/tareas
[2026-04-28T10:30:47.456Z] POST /api/tareas
```

## Estructura del Proyecto

```
trabajo-clase-08/
├── app.js                          # Archivo principal del servidor
├── package.json                    # Dependencias
├── .gitignore                      # Archivos excluidos de Git
├── public/                         # Archivos estáticos
│   ├── index.html                  # Página principal
│   └── styles.css                  # Estilos CSS
├── routes/
│   └── api.routes.js               # Definición de rutas API
├── controllers/
│   ├── api.controller.js           # Controlador de cursos y saludos
│   └── tareas.controller.js        # Controlador de tareas
└── middlewares/
    └── logger.js                   # Middleware de logging
```

## Ejemplos de Uso

### Listar tareas (con curl)
```bash
curl http://localhost:3000/api/tareas
```

### Agregar tarea (con curl)
```bash
curl -X POST http://localhost:3000/api/tareas \
  -H "Content-Type: application/json" \
  -d "{\"texto\":\"Mi primera tarea\"}"
```

### Marcar como completada (con curl)
```bash
curl -X PUT http://localhost:3000/api/tareas/1/completar
```

### Con PowerShell
```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/tareas
```

## Pruebas Ejecutadas

✅ Listar tareas vacías y con 3 tareas agregadas  
✅ Intentar agregar tarea sin texto (error 400)  
✅ Marcar tarea existente como completada (código 200)  
✅ Intentar marcar tarea inexistente (error 404)  
✅ Validación de ID numérico  

## Decisiones de Diseño

- **Arreglo de tareas en memoria**: Implementado en `controllers/tareas.controller.js`
- **IDs secuenciales**: Contador incremental simple
- **Separación de controladores**: Archivo dedicado para tareas
- **Validación de entrada**: Campos obligatorios con mensajes claros
- **Códigos HTTP semánticos**: 201 para creación, 400 para errores de validación, 404 para no encontrado

## Autor

Alumno - Clase 08 - Programación Web

## Licencia

ISC
