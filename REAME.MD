# EJEMPLO USIP: PROYECTO FINAL GESTIÓN ESTUDIANTIL ESMA

## Configuración e instalación

1. Crear las variables de entorno y completar los datos correspondientes.

    ```bash
    cp .env.sample .env
    ```

2. Instalar dependencias:

    ```bash
    npm install
    ```

3. Ejecutar la aplicación

    - Ejecutar en modo desarollo

        ```bash
        npm run dev
        ```

    - Ejecutar en modo producción

        ```bash
        npm run start
        ```


## Ejemplos de Datos

### Estudiantes

```json
[
  {
    "nombre": "Ana",
    "apellido": "García",
    "fecha_nacimiento": "2001-03-20",
    "genero": "Femenino",
    "direccion": "Calle del Sol 456",
    "telefono": "555-987-6543",
    "correo": "ana.garcia@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Carlos",
    "apellido": "López",
    "fecha_nacimiento": "1999-11-05",
    "genero": "Masculino",
    "direccion": "Avenida de la Luna 789",
    "telefono": "555-101-1122",
    "correo": "carlos.lopez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Sofía",
    "apellido": "Martínez",
    "fecha_nacimiento": "2002-07-12",
    "genero": "Femenino",
    "direccion": "Plaza de las Flores 101",
    "telefono": "555-223-3344",
    "correo": "sofia.martinez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Pedro",
    "apellido": "Sánchez",
    "fecha_nacimiento": "2000-01-25",
    "genero": "Masculino",
    "direccion": "Calle de la Estrella 222",
    "telefono": "555-445-5566",
    "correo": "pedro.sanchez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Isabela",
    "apellido": "Rodríguez",
    "fecha_nacimiento": "2003-05-08",
    "genero": "Femenino",
    "direccion": "Avenida del Campo 333",
    "telefono": "555-667-7788",
    "correo": "isabela.rodriguez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Miguel",
    "apellido": "Fernández",
    "fecha_nacimiento": "1998-09-19",
    "genero": "Masculino",
    "direccion": "Plaza Mayor 444",
    "telefono": "555-889-9900",
    "correo": "miguel.fernandez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Valentina",
    "apellido": "Díaz",
    "fecha_nacimiento": "2001-06-02",
    "genero": "Femenino",
    "direccion": "Calle del Río 555",
    "telefono": "555-012-3456",
    "correo": "valentina.diaz@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Alejandro",
    "apellido": "Gómez",
    "fecha_nacimiento": "2000-12-14",
    "genero": "Masculino",
    "direccion": "Avenida de la Montaña 666",
    "telefono": "555-789-0123",
    "correo": "alejandro.gomez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Camila",
    "apellido": "Pérez",
    "fecha_nacimiento": "2002-04-27",
    "genero": "Femenino",
    "direccion": "Plaza del Bosque 777",
    "telefono": "555-321-6547",
    "correo": "camila.perez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Daniel",
    "apellido": "Ruiz",
    "fecha_nacimiento": "1999-08-10",
    "genero": "Masculino",
    "direccion": "Calle del Lago 888",
    "telefono": "555-567-8901",
    "correo": "daniel.ruiz@example.com",
    "fecha_inscripcion": "2024-07-26"
  }
]
```

### Cursos

```json
[
  {
    "nombre_curso": "Introducción a la Programación",
    "descripcion": "Aprende los fundamentos de la programación con Python.",
    "creditos": 4
  },
  {
    "nombre_curso": "Desarrollo Web Front-End",
    "descripcion": "Crea interfaces web interactivas con HTML, CSS y JavaScript.",
    "creditos": 5
  },
  {
    "nombre_curso": "Base de Datos Relacionales",
    "descripcion": "Domina el diseño y la gestión de bases de datos con SQL.",
    "creditos": 3
  },
  {
    "nombre_curso": "Inteligencia Artificial",
    "descripcion": "Explora los conceptos y algoritmos de la IA moderna.",
    "creditos": 4
  },
  {
    "nombre_curso": "Análisis de Datos",
    "descripcion": "Aprende a extraer información valiosa de los datos.",
    "creditos": 3
  }
]
```

### Matriculas

```json
[
  {
    "id_estudiante": 1,
    "id_curso": 2
  },
  {
    "id_estudiante": 3,
    "id_curso": 1
  },
  {
    "id_estudiante": 2,
    "id_curso": 3
  },
  {
    "id_estudiante": 4,
    "id_curso": 2
  },
  {
    "id_estudiante": 5,
    "id_curso": 1
  },
  {
    "id_estudiante": 6,
    "id_curso": 3
  },
  {
    "id_estudiante": 7,
    "id_curso": 2
  },
  {
    "id_estudiante": 8,
    "id_curso": 1
  },
  {
    "id_estudiante": 9,
    "id_curso": 3
  },
  {
    "id_estudiante": 10,
    "id_curso": 2
  }
]
```

### Calificaciones

```json
[{
    "id_estudiante": 1,
    "id_curso": 1,
    "calificacion":100
},
{
    "id_estudiante": 2,
    "id_curso": 1,
    "calificacion":51
}]
```

### Asistencias

```json
[
  {
    "id_estudiante": 1,
    "id_curso": 2,
    "estado": "Presente"
  },
  {
    "id_estudiante": 3,
    "id_curso": 1,
    "estado": "Ausente"
  },
  {
    "id_estudiante": 2,
    "id_curso": 3,
    "estado": "Justificado"
  },
  {
    "id_estudiante": 4,
    "id_curso": 2,
    "estado": "Presente"
  },
  {
    "id_estudiante": 5,
    "id_curso": 1,
    "estado": "Ausente"
  }
]
```

### Docentes

```json
[
  {
    "nombre": "Dr. Luis",
    "apellido": "González",
    "especialidad": "Matemáticas",
    "telefono": "777-123-4567",
    "correo": "luis.gonzalez@example.com",
    "fecha_contratacion": "2020-08-15"
  },
  {
    "nombre": "Dra. Ana",
    "apellido": "Pérez",
    "especialidad": "Física",
    "telefono": "777-987-6543",
    "correo": "ana.perez@example.com",
    "fecha_contratacion": "2021-02-20"
  },
  {
    "nombre": "Ing. Carlos",
    "apellido": "López",
    "especialidad": "Informática",
    "telefono": "777-555-1212",
    "correo": "carlos.lopez@example.com",
    "fecha_contratacion": "2019-11-10"
  },
  {
    "nombre": "Lic. Sofía",
    "apellido": "Martínez",
    "especialidad": "Literatura",
    "telefono": "777-111-2233",
    "correo": "sofia.martinez@example.com",
    "fecha_contratacion": "2022-06-01"
  },
  {
    "nombre": "Prof. Pedro",
    "apellido": "Sánchez",
    "especialidad": "Historia",
    "telefono": "777-444-5566",
    "correo": "pedro.sanchez@example.com",
    "fecha_contratacion": "2023-04-25"
  }
]
```

### Asignaciones

```json
[
{ "id_docente": 1, "id_curso": 1 },
{ "id_docente": 2, "id_curso": 2 },
{ "id_docente": 3, "id_curso": 3 },
{ "id_docente": 4, "id_curso": 4 },
{ "id_docente": 5, "id_curso": 5 }
]
```

### Administrativos

```json
[
  {
    "nombre": "María",
    "apellido": "Sánchez",
    "telefono": "777-123-4567",
    "correo": "maria.sanchez@example.com",
    "fecha_contratacion": "2023-01-15"
  },
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "telefono": "777-987-6543",
    "correo": "juan.perez@example.com",
    "fecha_contratacion": "2022-05-20"
  },
  {
    "nombre": "Ana",
    "apellido": "Gómez",
    "telefono": "777-555-1212",
    "correo": "ana.gomez@example.com",
    "fecha_contratacion": "2024-02-10"
  },
  {
    "nombre": "Carlos",
    "apellido": "López",
    "telefono": "777-111-2233",
    "correo": "carlos.lopez@example.com",
    "fecha_contratacion": "2023-09-01"
  },
  {
    "nombre": "Sofía",
    "apellido": "Martínez",
    "telefono": "777-444-5566",
    "correo": "sofia.martinez@example.com",
    "fecha_contratacion": "2022-11-25"
  }
]
```

### Usuarios

```json
[
  {
    "rol": "Estudiante",
    "usuario": "estudiante1",
    "contraseña": "password123",
    "id_estudiante": 1 // ID del estudiante existente
  },
  {
    "rol": "Estudiante",
    "usuario": "estudiante2",
    "contraseña": "password123",
    "id_estudiante": 2 // ID del estudiante existente
  },
  {
    "rol": "Estudiante",
    "usuario": "estudiante3",
    "contraseña": "password123",
    "id_estudiante": 3 // ID del estudiante existente
  },
  {
    "rol": "Docente",
    "usuario": "docente1",
    "contraseña": "securepass",
    "id_docente": 2 // ID del docente existente
  },
  {
    "rol": "Administrativo",
    "usuario": "admin1",
    "contraseña": "adminpass",
    "id_administrativo": 3 // ID del administrativo existente
  }
]
```