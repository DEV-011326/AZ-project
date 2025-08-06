def calcul(problem="12+4*3-6/2(2+9)"):
    p = {}
    d = {}
    dd = {}
    b = ['+', '-', '*', '/', '(', ')', '^', '%', '!']
    c = 1
    s = 1
    for n in problem:
        if n in b:
            d[c] = problem.index(n)
            dd[c] = n
            c += 1
        else:
            if (n.isdigit()):
                for i in d:
                    pass
                    
