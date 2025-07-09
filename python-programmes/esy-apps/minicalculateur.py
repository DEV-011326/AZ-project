devloper = "abdelouahidamezian@gmail.com"
from tkinter import *
from tkinter import messagebox as ms
MiniClcul = Tk()
MiniClcul.geometry("700x630")
MiniClcul.configure(background="pale green")
#MiniClcul.resizable(width=False,height=False)
MiniClcul.title("Mini Clcul.ator v 0.12.9")
#================ [ lable ] =========================
lable_1 = Label(MiniClcul,text="Mini Clculator ",font=("times",30,"bold"),bg="#169B6E",fg="#FFFFFF")
lable_1.pack(fill=X)
#================ [ frame ] =========================
frame_1 = Frame(MiniClcul,bg="pale green",width=400,height=500,)
frame_1.pack(padx=20,pady=20)
#===================== [ entry ] ===============
entry_1 = Entry(frame_1,bd=4,relief=GROOVE,font=("bold",35,"bold"),bg="white",fg="blue")
entry_1.pack(fill=X,padx=20,pady=10)
#================ [ Frame ] =========================
frame_2 = Frame(frame_1,width=410,height=460,bg="#169B6E")
frame_2.pack(fill=X,padx=10,pady=10)
frame_3 = Frame(frame_2,width=150,height=380,bg="#52D5FF",bd=2,relief=SOLID)
frame_3.place(x=396,y=5)
lable_4 = Label(frame_3,text="Mémoire",font=("times",28,"bold"),bg="#52D5FF",fg="#FFFFFF",bd=2,relief=SOLID)
lable_4.pack(fill=X)
#================== [ definds ] =====================
def button_1_1():
    namber_1 = 1
    entry_1.insert(END,namber_1)
def button_2_2():
    namber_2 = 2
    entry_1.insert(END,namber_2)
def button_3_3():
    namber_3 = 3
    entry_1.insert(END,namber_3)
def button_4_4():
    namber_4 = 4
    entry_1.insert(END,namber_4)
def button_5_5():
    namber_5 = 5
    entry_1.insert(END,namber_5)
def button_6_6():
    namber_6 = 6
    entry_1.insert(END,namber_6)
def button_7_7():
    namber_7 = 7
    entry_1.insert(END,namber_7)
def button_8_8():
    namber_8 = 8
    entry_1.insert(END,namber_8)
def button_9_9():
    namber_9 = 9
    entry_1.insert(END,namber_9)
def button_0_0():
    namber_0 = 0
    entry_1.insert(END,namber_0)
def button_Cl():
    entry_1.delete(0,END)
def button_Pl():
    articl_1 = "+"
    entry_1.insert(END,articl_1)
def button_Mi():
    articl_2 = "-"
    entry_1.insert(END,articl_2)
def button_Fi():
    articl_3 = "*"
    entry_1.insert(END,articl_3)
def button_Qe():
    articl_4 = "/"
    entry_1.insert(END,articl_4)
def button_Eg():
    namber = entry_1.get()
    if namber == "Devloper" :
        ms.showinfo("Mini Clcul.ator v 0.12.9",f"{devloper}")
    else:
        try:
            entry_1.delete(0,END)
            eval_namber = eval(namber)
            entry_1.insert(0,eval_namber)
            #================ [ mémoire ] =========================
            mémoire = str(f"{namber}={eval_namber}")
            label_3 = Label(frame_3,text=mémoire,font=("times",20,"bold"),bg="#52D5FF",fg="black",bd=2,relief=SOLID)
            label_3.pack(fill=X)
        except:
            entry_1.delete(0,END)
            entry_1.insert(0,"Math ERROR")

#=============== [ Buttons ] =================================== 
button_1 = Button(frame_2,text="1",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_1_1)
button_1.place(x=10,y=10,width=70,height=70)
button_2 = Button(frame_2,text="2",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_2_2)
button_2.place(x=110,y=10,width=70,height=70)
button_3 = Button(frame_2,text="3",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_3_3)
button_3.place(x=210,y=10,width=70,height=70)
button_4 = Button(frame_2,text="4",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_4_4)
button_4.place(x=10,y=110,width=70,height=70)
button_5 = Button(frame_2,text="5",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_5_5)
button_5.place(x=110,y=110,width=70,height=70)
button_6 = Button(frame_2,text="6",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_6_6)
button_6.place(x=210,y=110,width=70,height=70)
button_7 = Button(frame_2,text="7",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_7_7)
button_7.place(x=10,y=210,width=70,height=70)
button_8 = Button(frame_2,text="8",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_8_8)
button_8.place(x=110,y=210,width=70,height=70)
button_9 = Button(frame_2,text="9",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_9_9)
button_9.place(x=210,y=210,width=70,height=70)
button_0 = Button(frame_2,text="0",font=("Arial Black",35),bg="#F7FF4B",fg="black",bd=4,command=button_0_0)
button_0.place(x=110,y=310,width=70,height=70)
button_C = Button(frame_2,text="C",font=("Arial Black",35),bg="#FFB245",fg="RED",bd=4,command=button_Cl)
button_C.place(x=10,y=310,width=70,height=70)
button_P = Button(frame_2,text="+",font=("Arial Black",35),bg="#9EFFDA",fg="BLACK",bd=4,command=button_Pl)
button_P.place(x=310,y=10,width=70,height=70)
button_M = Button(frame_2,text="-",font=("Arial Black",35),bg="#9EFFDA",fg="BLACK",bd=4,command=button_Mi)
button_M.place(x=310,y=110,width=70,height=70)
button_F = Button(frame_2,text="×",font=("Arial Black",35),bg="#9EFFDA",fg="BLACK",bd=4,command=button_Fi)
button_F.place(x=310,y=210,width=70,height=70)
button_Q = Button(frame_2,text="÷",font=("Arial Black",35),bg="#9EFFDA",fg="BLACK",bd=4,command=button_Qe)
button_Q.place(x=310,y=310,width=70,height=70)
button_E = Button(frame_2,text="=",font=("Arial Black",35),bg="#9EFFDA",fg="GREEN",bd=4,command=button_Eg)
button_E.place(x=210,y=310,width=70,height=70)
#================ [ lable ] =========================
lable_2 = Label(MiniClcul,text=f"Copyright 18/09/2023 \nby : {devloper} ",font=("italic",15,"bold"),bg="pale green",fg="gray")
lable_2.pack(fill=X,padx=30,pady=30)
#================ [ run ] =========================
MiniClcul.mainloop()
