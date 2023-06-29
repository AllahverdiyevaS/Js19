// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
// for (let i = 100; i>=50; i--) {
//     if (i% 10===0) {console.log[i]
//         const pElem= document.createElement("p")
//         pElem.innerText=i
//         const numbersDiv = document.querySelector(".numbers")
//         numbersDiv.append (pElem)

//     }

// }
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
// const arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// const newDiv = document.querySelector(".strings_container")
// for (let i = 0; i< arr.length; i++) {
//     const pElem=document.createElement("p")
//     pElem. innerText= arr[i]

//     newDiv.append(pElem)
// }
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const user = [
    {
        first_name: 'aydin',
        last_name: 'asma',
        age: 15
    },
    {
        first_name: 'fbdfsv',
        last_name: 'fjdrgvfseddcfht',
        age: 42
    },
    {
        first_name: 'gvdx',
        last_name: 'dvxv',
        age: 37
    },
    {
        first_name: 'dfvds',
        last_name: 'vdvv',
        age: 33
    },
    {
        first_name: 'dfvds',
        last_name: 'vdvv',
        age: 16
    }
];

const newDiv = document.querySelector(".users_container");

for (let i = 0; i < user.length; i++) {
    const { first_name, last_name, age } = user[i];
    if (age > 18) {
        const divElem = document.createElement("div");
        divElem.innerText = `Name: ${first_name}, Last Name: ${last_name}, Age: ${age}`;
        newDiv.append(divElem);
    }
}






