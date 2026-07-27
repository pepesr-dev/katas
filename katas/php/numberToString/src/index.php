<?php
/**
 * Contiene una función que realiza un casting de numero 
 * entero a string.
 */

echo "Number to string";

/**
 * numberToString
 * Retorna un número convertido a string
 * @param int $number
 * @return string
 */
function numberToString(int $number): string
{
    return (string) $number;

}

//Entrada
$number = 123;

//Salida
echo "<br>" . numberToString($number) . " - Tipo " . gettype(numberToString($number));

?>