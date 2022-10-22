# Global Channel


Sistema de despliegue de información de señales de televisión y radio.\
Nombre de los participantes: *Jhans de la Cruz Damian y Jorge Sepúlveda Turpie*.\
###`Cohorte N°2`.\
URL del proyecto

Este es un sistema que se alimenta de una API con información de señales de telvisión y radios. El sistema permite una busqueda por nombre, numero y .\proveedor, mostrando unas tarjetas con informacón del canal, al hacer click en una tarjeta esta despliega un modal con informacón mas detallada, como las.\ multicast de producción, la criticidad de la señal ante una falla, y el ancho de banda de la señal en mb (mega bytes). La aplicación en si se .\desarrolla para un área de monitoreo de señales de una empresa de telecomunicaciones..\

1) Inicio del servidor: Para iniciar el servicio, como se creo una API especial de pruebas para la aplicación se debe iniciar un servidor, el cual estara .\corriendo en el puerto *5001* (http://localhost:5001/) o en su defecto en el puerto *3001*, para ejecutarlo se debe ingresar el comando de *npm start*.-.\
Para consultar la API se puede ingresar las url para desplegar el *JSON* en el nevegador u en un systema como Postman (https://www.postman.com/).\

*Para probar las urls ingrese en el navegador como sigue

*Aquí se despliga todos los canales:* [http://localhost:5001/channels](http://localhost:5001/channels)

*[http://localhost:5001/api/search/name/La%Red](http://localhost:5001/api/search/name/La%20Red)

*[http://localhost:5001/api/search/number/25](http://localhost:5001/api/search/number/25)

*[http://localhost:5001/api/search/provider/Internacional](http://localhost:5001/api/search/provider/Internacional)


2) Inicio del servicio de cliente, Para iniciar el servicio del cliente se debe ejecutar el comando *npm start*, y se ejecutara la aplicación en el puerto 3000 (http://localhost:3000/)
Explicacion breve del proyecto (Que hace la aplicacion, para quien es, etc)



