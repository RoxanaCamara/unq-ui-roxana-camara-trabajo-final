## ¿Como tener el proyecto funcionando en tu maquina?
    Tener react 17.0.2 en adelante, 
    clonarlo con git clone -url- o usar el zip
    npm install 

### ¿Como se juega al Generala?
    Generala es un juego de dados que consiste en tirar 5 dados, de los dados obtenidos formar algun tipo de tirada y lograr mayor puntos que tu rival. Dentro de nuestra app, se juega en solitario por lo tanto se gana cuando no quedan mas tiradas por realizar. A continuacion detallamos las diferentes tipos de tiradas que podemos realizar
## Solo 
    Sumas la cantidad de dados repetidos de un mismo numero 
## Generala
    Se forma cuando después del segundo o tercer tiro se logran los cinco dados con un mismo número y vale 60 puntos. 
    Cuando esto se logra de un solo tiro, se llama generala servida y el jugador automáticamente gana el juego. (Las, probabilidades en contra de hacer generala servida, son de 1.295 a 1.)
## Poker
    (cuatro de un mismo número). Si es servido vale 45 puntos, en caso contrario 40
## Full 
    (tres de un mismo número y un par). Si es servido vale 35 puntos, de lo contrario 30.
## Escalera 
    (1-2-3-4-5 o 2-3-4-5-6). Si es servida se le otorgan 25 puntos y si no lo es, 20


### Tests

## Recordatorio
Los snapshops se utiliza para hacer tests dentro del codigo, es algun tipo de screenshot
con *shallow* es mas que suficiente para el test

Para testear hooks o implementaciones del componente utilizamos *moun*

Quiero subir a heroku

#### ###########################################################################################
Que quiero hacer? 
Un juego con login, pasado la auntenticacion del login
Seleccionar el tipo de juego
opciones: solitario y versus
Iniciar el tipo de juego



####
agregar redux

Listar los jugadores disponibles
que los selecciones 
que los desseleccione