#!/usr/bin/python
import sys

def calc(n1, n2):
    if n1 > n2:
     output = n1 - n2
     print(output)
    else:
     output = n2 - n1
     print(output)

for line in sys.stdin:
    numbers = line.split()
    n1 = int(numbers[0])
    n2 = int(numbers[1])
    calc(n1,n2)
