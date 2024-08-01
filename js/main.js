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

const getEquals = (event) => {
    const { value } = event.target
    const area = document.getElementById('textareaId3').value.toLowerCase()
    const inp = document.getElementById('inputId3').value.toLowerCase()


    if (area && inp) {
        if (area.includes(inp)) {
            display3.innerText = ("Bu so'z text areada bor")
        }else{
            display3.innerText = ("bu so'z text areada yo'q")
        }
    }else{
        display3.innerText = ("Ikkala inputni ham so'z bilan to'ldiring")
    }

}








// 4-masala Fayl yuklash uchun input type file yarating. Foydalanuvchi file tanlaganda uning hajmi (o'lchami) KB larda ko'rsatilsin



document.getElementById('fileInput').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const fileSizeKB = (file.size / 1024).toFixed(3);

        document.getElementById('fileSize').textContent = `Fayl hajmi: ${fileSizeKB} KB`;
    } else {
        document.getElementById('fileSize').textContent = 'Fayl tanlanmagan.';
    }
});





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
    } else {
        display5.innerText = ("Qavslar bir biriga emas")
    }

    const leftbrack = document.getElementById('leftbrack')
    const rightbrack = document.getElementById('rightbrack')

    leftbrack.innerText = bracketleft
    rightbrack.innerText = bracketright

}