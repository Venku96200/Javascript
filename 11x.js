                let array_value = JSON.parse(localStorage.getItem('stuff1'));
                let array_date = JSON.parse(localStorage.getItem('stuff2'));

                function displaytodo() {
                    const value = document.querySelector('.js-todo').value;
                    const date = document.querySelector('.js-date').value;

                    array_value.push(value);
                    array_date.push(date);

                    document.querySelector('.js-todo').value = '';
                    document.querySelector('.js-date').value = '';

                    renderTodo();
                }

                function deleteTodo(index) {
                    array_value.splice(index, 1);
                    array_date.splice(index, 1);
                    renderTodo();
                }

                function renderTodo() {
                    let todoelement = '';

                    for (let i = 0; i < array_value.length; i++) {
                        todoelement += `
                        <div style="display:flex; margin-top:10px;">
                            <div style="width:215px; padding-top:10px;">
                                ${array_value[i]}
                            </div>

                            <div style="width:173px; padding-top:10px;">
                                ${array_date[i]}
                            </div>

                            <button
                                onclick="deleteTodo(${i})"
                                style="width:80px;height:40px;background:red;color:white;border:none;cursor:pointer;">
                                Delete
                            </button>
                        </div>`;
                    }

                    document.querySelector('.js-display').innerHTML = todoelement;
                    localStorage.setItem('stuff1',JSON.stringify(array_value));
                    localStorage.setItem('stuff2',JSON.stringify(array_date));
                }
                renderTodo();