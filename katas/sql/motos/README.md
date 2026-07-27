# Docker - Cheat Sheets

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **docker compose** | Arranca los contenedores | `docker compose up` |
| **docker compose** | Arranca en segundo plano | `docker compose up -d` |
| **docker compose** | Apaga los contenedores | `docker compose down` |
| **docker compose** | Monitorizar logs | `docker compose logs` |
| **docker compose** | Lista los contenedores activos | `docker compose ps` |
| **docker compose** | Ejecuta comando (ej. ver versión MySQL) | `docker compose exec db mysql -V` |

---



# Mysql - Cheat Sheets

### Administración básica

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **Conexión** | Inicia mysql como root | `mysql -u root -p` |
| **Bases de datos** | Muestra las bases de datos | `show databases;` |
| **Selección** | Usa la base de datos | `use db_name;` |
| **Tablas** | Muestra las tablas de la base de datos | `show tables;` |
| **Estructura** | Muestra la estructura de la tabla | `describe table_name;` |

### Data Control Language (DCL)

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **Mostrar usuarios** | Muestra todos los usuarios de mysql | `SELECT user, host FROM mysql.user;` |
| **Usuarios** | Crea un nuevo usuario con contraseña | `CREATE USER '[usuario]'@'localhost' IDENTIFIED BY '[contraseña]';` |
| **Usuarios** | Elimina un usuario existente | `DROP USER '[usuario]'@'localhost';` |
| **Usuarios** | Elimina un usuario existente cuando indica que todavía existe (puede tener la sesión abierta). | `DROP USER IF EXISTS '[usuario]'@'localhost';` |
| **Permisos** | Concede todos los privilegios en una BD | `GRANT ALL PRIVILEGES ON [nombre_bd].* TO '[usuario]'@'localhost';` |
| **Permisos** | Concede privilegios en una tabla específica | `GRANT SELECT, INSERT ON [nombre_bd].[nombre_tabla] TO '[usuario]'@'localhost';` |
| **Permisos** | Quita un permiso específico | `REVOKE DELETE ON [nombre_bd].* FROM '[usuario]'@'localhost';` |
| **Permisos** | Quita todos los privilegios | `REVOKE ALL PRIVILEGES, GRANT OPTION FROM '[usuario]'@'localhost';` |
| **Actualización** | Aplica cambios de permisos de inmediato | `FLUSH PRIVILEGES;` |

Crear > Dar permisos > actualizar privilegios

### Data Definition Language (DDL)

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **Base de datos** | Crea una nueva base de datos | `CREATE DATABASE [nombre_bd];` |
| **Tabla** | Crea una nueva tabla con sus columnas | `CREATE TABLE [nombre_tabla] (nombre_columna tipo_dato);` |
| **Eliminación** | Elimina una base de datos por completo | `DROP DATABASE [nombre_bd];` |
| **Eliminación** | Elimina una tabla por completo | `DROP TABLE [nombre_tabla];` |

### Data Manipulation Language (DML)

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **Inserción** | Inserta nuevos registros en una tabla | `INSERT INTO [tabla] (columna) VALUES (valor);` |
| **Actualización** | Modifica registros existentes bajo una condición | `UPDATE [tabla] SET columna = valor WHERE condición;` |
| **Eliminación** | Borra registros específicos de una tabla | `DELETE FROM [tabla] WHERE condición;` |

### Data Query Language (DQL)

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **Consulta** | Muestra todos los registros y columnas de una tabla | `SELECT * FROM [tabla];` |


# Estructuras, Relaciones y Tipos de Datos

### Tipos de Datos Comunes

| Categoría | Tipo de Dato | Acción / Descripción | Sintaxis de Ejemplo |
| :--- | :--- | :--- | :--- |
| **Numéricos** | `INT` | Número entero (4 bytes) | `id INT` |
| **Numéricos** | `BIGINT` | Número entero grande (8 bytes, ideal para IDs) | `id BIGINT` |
| **Numéricos** | `DECIMAL(p,s)`| Número decimal exacto (p: dígitos totales, s: decimales) | `precio DECIMAL(10,2)` |
| **Texto** | `VARCHAR(n)` | Cadena de texto de longitud variable (máx `n` caracteres) | `nombre VARCHAR(100)` |
| **Texto** | `TEXT` | Bloque de texto largo (hasta 65,535 caracteres) | `descripcion TEXT` |
| **Fecha/Hora**| `DATE` | Fecha con formato `AAAA-MM-DD` | `fecha_nacimiento DATE` |
| **Fecha/Hora**| `DATETIME` | Fecha y hora con formato `AAAA-MM-DD HH:MM:SS` | `creado_en DATETIME` |
| **Booleano** | `BOOLEAN` | Sinónimo de `TINYINT(1)` (0 para falso, 1 para verdadero) | `esta_activo BOOLEAN` |

### Atributos y Restricciones comunes (Constraints)

| Elemento | Acción | Sintaxis |
| :--- | :--- | :--- |
| **Auto-incremento**| Incrementa el valor numérico automáticamente en cada inserción | `AUTO_INCREMENT` |
| **No Nulo** | Obliga a que el campo no quede vacío | `NOT NULL` |
| **Único** | Evita valores duplicados en esa columna | `UNIQUE` |
| **Por Defecto** | Asigna un valor automático si no se envía ninguno | `DEFAULT valor` |

### Creación de Tablas y Relaciones (DDL)

| Elemento | Acción / Relación | Sintaxis |
| :--- | :--- | :--- |
| **Tabla Independiente** | Crea una tabla base con Clave Primaria (1 a Muchos: Lado "Uno") | `CREATE TABLE usuarios (<br>  id INT AUTO_INCREMENT PRIMARY KEY,<br>  email VARCHAR(100) NOT NULL UNIQUE<br>);` |
| **Tabla Dependiente** | Crea una tabla con Clave Foránea (1 a Muchos: Lado "Muchos") | `CREATE TABLE pedidos (<br>  id INT AUTO_INCREMENT PRIMARY KEY,<br>  usuario_id INT NOT NULL,<br>  total DECIMAL(10,2),<br>  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)<br>);` |
| **Relación N a N** | Tabla intermedia/pivote para relacionar muchos a muchos | `CREATE TABLE pedidos_productos (<br>  pedido_id INT NOT NULL,<br>  producto_id INT NOT NULL,<br>  PRIMARY KEY (pedido_id, producto_id),<br>  FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,<br>  FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE<br>);` |
| **Modificar Relación** | Añade una clave foránea a una tabla que ya existía | `ALTER TABLE [tabla_origen]<br>ADD CONSTRAINT fk_nombre<br>FOREIGN KEY ([columna_origen]) REFERENCES [tabla_destino]([columna_destino]);` |


# Consultas con Relaciones (JOINs)

### Tipos de JOIN comunes

| Elemento | Acción / Comportamiento | Sintaxis |
| :--- | :--- | :--- |
| **INNER JOIN** | Devuelve filas solo cuando hay una coincidencia en ambas tablas | `SELECT * FROM tabla_a A<br>INNER JOIN tabla_b B ON A.id = B.id_relacion;` |
| **LEFT JOIN** | Devuelve todas las filas de la tabla izquierda y las coincidentes de la derecha | `SELECT * FROM tabla_a A<br>LEFT JOIN tabla_b B ON A.id = B.id_relacion;` |
| **RIGHT JOIN** | Devuelve todas las filas de la tabla derecha y las coincidentes de la izquierda | `SELECT * FROM tabla_a A<br>RIGHT JOIN tabla_b B ON A.id = B.id_relacion;` |

### Consultas Avanzadas con JOIN

| Elemento | Acción / Comportamiento | Sintaxis |
| :--- | :--- | :--- |
| **Múltiples JOINs** | Conecta tres o más tablas en una misma consulta | `SELECT A.nombre, B.fecha, C.producto <br>FROM usuarios A<br>INNER JOIN pedidos B ON A.id = B.usuario_id<br>INNER JOIN productos C ON B.producto_id = C.id;` |
| **JOIN + Agrupación** | Combina datos de tablas y los agrupa para realizar cálculos (ej. contar) | `SELECT A.nombre, COUNT(B.id) AS total_pedidos  FROM usuarios A  LEFT JOIN pedidos B ON A.id = B.usuario_id  GROUP BY A.id, A.nombre;` |
| **Filtrar Huérfanos** | Encuentra registros de la tabla izquierda que no tienen relación en la derecha | `SELECT A.* FROM usuarios A  LEFT JOIN pedidos B ON A.id = B.usuario_id  WHERE B.usuario_id IS NULL;` |
