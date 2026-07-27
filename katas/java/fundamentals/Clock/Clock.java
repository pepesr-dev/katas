package fundamentals.Clock;

/**
 *
 * Almacena métodos y atributos de un reloj
 */
public class Clock {

    private int horas;
    private int minutos;
    private int segundos;

    /**
     * Constructor vacío
     * Permite crear objetos vacíos
     */
    public Clock(){}

    /**
     * Genera relojes vacíos
     * @return fundamentals.Clock Objeto clock(0h,0m,0s)
     */
    public static Clock clockFactory(){
        return new Clock(0,0,0);
    }



    /**
     * Constructor
     * @param horas Cantidad de horas
     * @param minutos Cantidad de minutos
     * @param segundos Cantidad de segundos
     */
    public Clock(int horas, int minutos, int segundos){

        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;

    }

    /**
     * Retorna un reloj con parámetros personalizados y validados
     * @param horas Cantidad de horas
     * @param minutos Cantidad de minutos
     * @param segundos Camtidad de segundos
     * @return fundamentals.Clock Objeto | null
     */
    public  static Clock customClock(int horas, int minutos, int segundos){
        try{
            if(
                    horas >= 0 && horas <=23
                            && minutos >= 0 && minutos <=59
                            && segundos >=0 && segundos <= 59
            ){


                return new Clock(horas,minutos,segundos);
            } else {
                System.out.println("Error en el método custom clock");
                return null;
            }
        }catch (Exception e){
            System.out.println("Error en el método: customClock " + e.getMessage());
            return null;
        }
    }



    //Getters & Setters
    public int getHoras() {
        return horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }

    public int getMinutos() {
        return minutos;
    }

    public void setMinutos(int minutos) {
        this.minutos = minutos;
    }

    public int getSegundos() {
        return segundos;
    }

    public void setSegundos(int segundos) {
        this.segundos = segundos;
    }

    /**
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
     * Retorna el tiempo que ha pasado desde la medianoche en milisegundos
     * @param clock Objeto
     * @return int resultado | 0 | -1
     */
    public static int tiempoDesdeLaMediaNocheEnMilisegundos(Clock clock){
        /*
        Input constraints:

        0 <= h <= 23
        0 <= m <= 59
        0 <= s <= 59
                */
        try{
            if(

                    clock.horas >= 0 && clock.horas <=23
                    && clock.minutos >= 0 && clock.minutos <=59
                    && clock.segundos >=0 && clock.segundos <= 59
            ){

                int horasAMilisegundos = clock.horas *3600000;
                int minutosAMilisegundos = clock.minutos *60000;
                int segundosAMilisegundos = clock.segundos *1000;
                int resultado;

                resultado = horasAMilisegundos + minutosAMilisegundos + segundosAMilisegundos;

                return resultado;
            } else {
                return 0;
            }
        } catch (Exception e) {
            System.out.println("Error en el método: tiempoDesdeLaMediaNocheEnMilisegundos " + e.getMessage());
            return -1;
        }

    }
}
