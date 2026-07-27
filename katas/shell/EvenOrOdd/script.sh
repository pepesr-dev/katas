#!/bin/bash
#Indica si el número introducido en par o impar

#Argumento
n=$1

#Condicional
if [ $((n%2)) -eq 0 ]; then
#Mostrar
echo "Even"
else
echo "Odd"
fi