/**
 * Summary of fundamental
 * Paquete que contiene mis actividades y retos
 * de repaso de Java
 * @author PepeSR
 */

package fundamentals.Clock;

/**
 *
 * Almacena y ejecuta metodos relacionados con los relojes
 *
 */
public class Main {
    /**
     * Ejecuta los métodos
     * @param args
     */
    public static void main(String[] args) {

        /*
            fundamentals.Clock shows h hours, m minutes and s seconds after midnight.
            Your task is to write a function which returns the time since midnight in milliseconds.

            Example:
            h = 0
            m = 1
            s = 1

            result = 61000
            Input constraints:

            0 <= h <= 23
            0 <= m <= 59
            0 <= s <= 59
         */
        //00h 00m 00s medianoche
        //return tiempo desde la media noche en millisegundos

        //Datos
        //1h = 60m
        //1m = 60s
        //1s = 1000ms

        //Pasar todo a milisegundos
        //hora
        //1h * 60 = 60 m
        //60m * 60 = 3600s
        //3600s * 1000 = 3600000ms

        //minuto:
        //1m *60 = 60s
        //60s * 1000 = 60000ms

        //segundo
        //1s * 1000 = 1000ms

        int segundos = 1;

        Clock clock1 = new Clock(10,5,30);
        //Resultado esperado: 61000
        Clock clock2 = new Clock(0,1,1);

        System.out.println("*****************");
        System.out.println("");
        System.out.println("Tiempo desde la medianoche de clock1 en milisegundos: " + Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock1) + " milisegundos");
        System.out.println("");
        System.out.println("");
        if(Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock2) > 0){

            System.out.println("*****CLOCK 2****");
            System.out.println("Tiempo desde la medianoche de clock2 en milisegundos: " + Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock2) + " milisegundos");
            System.out.println("");
            System.out.println("");
        } else if (Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock2) == 0){
            System.out.println("*****CLOCK 2****");
            System.out.println("Tiempo desde la medianoche de clock2 en milisegundos: " + Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock2) + " milisegundos");
            System.out.println("");
            System.out.println("ERROR datos del reloj incorrecto");
        } else if (Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock2) == -1) {
            System.out.println("*****CLOCK 2****");
            System.out.println("Tiempo desde la medianoche de clock2 en milisegundos: " + Clock.tiempoDesdeLaMediaNocheEnMilisegundos(clock2) + " milisegundos");
            System.out.println("");
            System.out.println("ERROR función tiempoDesdeLaMediaNocheEnMilisegundos() falló");
        }
        System.out.println("*****************");
        System.out.println("Utiliza el método de la clase ClockMethods");
        System.out.println(segundos + " segundos = " + ClockMethods.convertSecondsToMiliseconds(segundos) + " milisegundos");
        System.out.println("");
        System.out.println("*****************");
        System.out.println("Utiliza el método de la clase fundamentals.Clock");
        System.out.println(segundos + " segundos = " + ClockMethods.convertSecondsToMiliseconds(segundos) + " milisegundos");
        System.out.println("");

        System.out.println("Utiliza el método getHoras de la clase fundamentals.Clock");
        //Retorna las horas de clock1
        System.out.println("Horas del primer reloj: " + clock1.getHoras() + " horas");

        //Toma los segundos de clock1 y los convierte a milisegundos
        System.out.println("Horas del primer reloj: " + Clock.convertSecondsToMiliseconds(clock1.getSegundos()) + " horas");
        System.out.println("");
        clock1.setMinutos(45);

        System.out.println("Minuto insertado a clock1: " + clock1.getMinutos() + " minutos");
        System.out.println("");
        System.out.println("*****************");
        System.out.println("Utiliza el método de la clase Main");
        System.out.println(segundos + " segundos = " + convertSecondsToMiliseconds(segundos) + " milisegundos");
    }

    /**
     * Summary of ConverSecondsToMiliseconds
     * Convierte segundos en milisegundos
     * @param segundos Cantidad de segundos
     * @return int milisegundos | -1
     */
    public static int convertSecondsToMiliseconds(int segundos){
        int milisegundos;
        try{
            milisegundos = segundos * 1000;
            return milisegundos;
        } catch (Exception e) {
            System.out.println("Error en el método: convertSecondsToMiliseconds " + e.getMessage());
            return -1;
        }
    }

    /**
     * Clase fuera de la clase main
     */

    /**
     * Summary of ClockMethods
     * Almacena métodos para trabajar con relojes
     */
    public class ClockMethods{
        /**
         * Summary of convertSecondsToMiliseconds
         * Convierte segundos en milisegundos
         * @param segundos cantidad de segundos
         * @return int milisegundos | -1
         */
    public static int convertSecondsToMiliseconds(int segundos){
        int milisegundos;
        try{
            milisegundos = segundos * 1000;
            return milisegundos;
        } catch (Exception e) {
            System.out.println("Error en el método: convertSecondsToMiliseconds " + e.getMessage());
            return -1;
        }
    }
}
}