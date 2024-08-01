// 2-masala HTML da textarea elementni yaratilsin. Shu textarea elementni ichida nechta so'z yozilgani topilsin.


const handleChange = (event) => {

    let count = 0
    const { value } = event.target

    let newarr = value.split(" ")

    newarr.forEach(element => {
        if (element !== '') {
            count++

        }
    });

    const display = document.getElementById('display')
    display.innerHTML = count
}






// 3-masala Textarea elementi yaratilsin. Shu element ichiga ixtiyoriy matn qo'yilsin. Boshqa alohida blockda input elementi qo'yilsin. Input elementi ichiga yozilgan so'z textarea ichidagi matnda bor yoki yo'qligi aniqlansin. Bu vazifani bajarishda siz loop elementlaridan, onclick yoki onkeyup event laridan foydalanishingiz mumkin bo'ladi.

const 


















// 5-masala Input ichida ixtiyoriy ravishda qavslar oching. Qavslar yo ochiq "(" yo yopiq ")" turda bo'lishi mumkin. Shu input ichiga yozilgan jami ochuvchi va yopuvchi qavslar soni o'zaro teng yoki teng emasligi aniqlansin.


const getBracket = (event) => {
    let bracketright = 0
    let bracketleft = 0
    const { value } = event.target
    let newarr = value.split("")
    // console.log(newarr)
    newarr.forEach(element => {
        if (element == '(') {
            bracketleft++
        } else if (element == ')') {
            bracketright++
        }
    });
    const display5 = document.getElementById('display5')

    if (bracketleft === bracketright) {
        display5.innerText = ("Qavslar bir biriga teng")
    }else{
        display5.innerText = ("Qavslar bir biriga emas")
    }
    
    const leftbrack = document.getElementById('leftbrack')
    const rightbrack = document.getElementById('rightbrack')

    leftbrack.innerText = bracketleft
    rightbrack.innerText = bracketright

}