def on_button_pressed_a():
    global idx
    idx += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global idx
    idx += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

idx = 1

def on_forever():
    global idx
    if idx == 1:
        basic.show_string("A")
    elif idx == 2:
        basic.show_string("B")
    elif idx == 3:
        basic.show_string("C")
    elif idx == 4:
        basic.show_string("D")
    elif idx == 5:
        basic.show_string("E")
    elif idx == 6:
        basic.show_string("F")
    elif idx == 7:
        basic.show_string("G")
    elif idx == 8:
        basic.show_string("H")
    elif idx == 9:
        basic.show_string("I")
    elif idx == 10:
        basic.show_string("J")
    elif idx == 11:
        basic.show_string("K")
    elif idx == 12:
        basic.show_string("L")
    elif idx == 13:
        basic.show_string("M")
    elif idx == 14:
        basic.show_string("N")
    elif idx == 15:
        basic.show_string("O")
    elif idx == 16:
        basic.show_string("P")
    elif idx == 17:
        basic.show_string("Q")
    elif idx == 18:
        basic.show_string("R")
    elif idx == 19:
        basic.show_string("S")
    elif idx == 20:
        basic.show_string("T")
    elif idx == 21:
        basic.show_string("U")
    elif idx == 22:
        basic.show_string("V")
    elif idx == 23:
        basic.show_string("W")
    elif idx == 24:
        basic.show_string("X")
    elif idx == 25:
        basic.show_string("Y")
    elif idx == 26:
        basic.show_string("Z")
    elif idx < 1:
        idx = 26
    else:
        idx = 1
basic.forever(on_forever)
