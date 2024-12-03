## Streaming de video 
Esta app desarrollada con Node.js permite activar la webcam desde el navegador en la ruta raiz, y sirviendo el streaming en tiempo real en un archivo estatico haciendo uso de WebSockets con la ruta:
```
127.0.0.1:3000/visualizar.html
```
En caso de tener varios dispositivos en una red local puede cambiar la '127.0.0.1' por la ip del dispositivo que este hosteando el servidor, permitiendo ver el streaming desde todos los dispositivos conectados
a la red local, pudiendo funcionar como camara de vigilancia. 

![camara](https://github.com/user-attachments/assets/8ee2f0f8-1594-4209-a5eb-8272b9155633)

