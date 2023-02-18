let expenseBtn = document.querySelector('#expenseBtn');
let expenseAmount = document.querySelector('#amount');
let description = document.querySelector('#description');
let category = document.querySelector('#category');
let container = document.querySelector('.container');
let ul = document.querySelector('#expense-list')

//add event for expense button
expenseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //create li
    let li = document.createElement('li');

    //create Textnode and append it
    li.appendChild(document.createTextNode(`${expenseAmount.value} - ${description.value} - ${category.value} `));

    //create deletebtn
    let deleteBtn = document.createElement('button');

    //add classes
    deleteBtn.className = 'm-2';

    //create textNode and then append it
    deleteBtn.appendChild(document.createTextNode('Delete Expense'));

    //append the delete button to li
    li.appendChild(deleteBtn);

    //create editBtn
    let editBtn = document.createElement('button');

    //create textNode and then append it
    editBtn.appendChild(document.createTextNode('Edit Expense'));

    //append the edit button to li
    li.appendChild(editBtn);

    //append li to the ul
    ul.append(li);

    //insert it to the html
    container.insertAdjacentElement('afterend', ul);

    //create Obj for Local storage
    const obj = {
        amount: expenseAmount.value,
        description: description.value,
        category: category.value
    };

    //set the local storage
    localStorage.setItem( obj.description , JSON.stringify(obj));

    //add event for delete btn
    deleteBtn.addEventListener('click', (e) => {
        //deleting from Dom
        ul.removeChild(li);

        //deleting from local Storage also
        localStorage.removeItem(obj.description);
    });

    //add event for edit btn
    editBtn.addEventListener('click', (e) => {

        
        //deleting from Dom
        ul.removeChild(li);

        //deleting from local Storage also
        localStorage.removeItem(obj.description);

        //give values to fields
        expenseAmount.value = obj.amount;
        description.value = obj.description;
        category.value = obj.category;
        
    });

    //clear Fields 
    expenseAmount.value = '';
    description.value = '';
    category.value = '';
});

