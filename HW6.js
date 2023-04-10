    // Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text">Remove me</div> исчезал.
    document.getElementById('hider').onclick = function() {
        document.getElementById('text').hidden = true;
    }
    //В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
    //Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
    button.addEventListener("click", () => alert("1"));
    button.removeEventListener("click", () => alert("1"));
    button.onclick = () => alert(2);
    // Есть список сообщений.
    // При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
    
    let boxes = document.querySelectorAll('.pane');
    for(let box of boxes) {
        box.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
        box.firstChild.onclick = () => box.remove();
    }