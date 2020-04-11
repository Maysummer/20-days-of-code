arab_to_roman = (num) => {
    if (typeof num !== "number")
    return false;

    var int = String(+num).split(""),
    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    rom_num = "",
    i = 3;
    while (i--)
    rom_num  = (key[+int.pop() + (i * 10)] || "") + rom_num;
    return Array(+int.join("") + 1).join("M") + rom_num;
}
console.log(arab_to_roman(27))