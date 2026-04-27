# MyTinerary 🌍

Aplicación web para descubrir, crear y compartir itinerarios de viaje por ciudades del mundo.

**🔗 Demo en vivo:** [https://mytinerary-portal.vercel.app](https://mytinerary-portal.vercel.app)

---

## 🚀 Tecnologías

- **React 18** + **Vite** — Interfaz rápida y moderna
- **Redux Toolkit** — Gestión global del estado (autenticación, filtros, datos)
- **React Router DOM** — Navegación SPA con rutas protegidas
- **Tailwind CSS** — Diseño responsive y customizable
- **Axios** — Comunicación con API REST
- **JWT Decode** — Manejo de tokens de autenticación

---

## ✨ Funcionalidades

- **Exploración** — Navegación de ciudades con cards interactivas y detalles completos
- **Itinerarios** — Visualización de planes de viaje con actividades, precios estimados, duración y tags
- **Interacción social** — Sistema de likes y comentarios en tiempo real
- **Gestión de contenido** — Creación y edición de itinerarios propios (usuarios logueados)
- **Autenticación** — Login tradicional con JWT (mail/contraseña)
- **Perfil de usuario** — Edición de datos personales y avatar
- **Filtros avanzados** — Búsqueda por ciudad y filtrado por precio/duración
- **Responsive** — Optimizado para mobile, tablet y desktop

---

## 🛠️ Instalación local

```bash
# Clonar repositorio
git clone https://github.com/devsiderio/mytinerary-portal.git

# Entrar a la carpeta descargada
cd mytinerary-portal

# Instalar dependencias
npm install

# Configurar variables de entorno
crear manualmente un archivo llamado ".env"
```
## Configuración del archivo .env:
### Para desarrollo local
```
VITE_URL_BACK=http://localhost:8080/api/
```

### Para producción
```
VITE_URL_BACK=https://tu-api-backend.onrender.com/api/
```

### Notas importantes:

    Para desarrollo local, asegurate de tener el backend corriendo en http://localhost:8080
    En el deploy en Vercel/Netlify, configurá VITE_URL_BACK apuntando a tu backend deployado (Render/Railway/etc)


## Autor

- Mariano J. Portal [@devsiderio](https://github.com/devsiderio)
