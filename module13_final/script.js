"use strict";

/*
     FINAL: Personal Finance Tracker
     Name: Ricky Berliant
     Date:   11/16/2024
     Filename: script.js
*/


/*
========================
      HTML Elements
========================
*/

var totalIncome = document.getElementById("total-income");
var totalExpense = document.getElementById("total-expense");
var balance = document.getElementById("balance");
var transactionForm = document.getElementById("transaction-form");
var descriptionInput = document.getElementById("description");
var amountInput = document.getElementById("amount");
var transactionList = document.getElementById("transaction-list");
var typeSelect = document.getElementById("type");
var transactions = [];

/*
=======================
       Functions
=======================
*/
initLocalStorage()

/* 
============================================================================================================
                                           ADD TRANSACTIONS:
============================================================================================================
*/ 

function addTransaction() {
    var description = descriptionInput.value;
    var amount = parseFloat(amountInput.value);
    var type = typeSelect.value;

    if(validateInput(description, amount, type)){
        var transaction = {
            description,
            amount,
            type
        }
        transactions.push(transaction);
        displayTransaction();
        displaySummary();
        localStorage.setItem('transaction-list', JSON.stringify(transactions));
    }
};

// ============================================================================================================
//          Validate the input to ensure the description is not empty and the amount is a positive number.
// ============================================================================================================
function validateInput(description, amount) {
    if (!description || amount <= 0){
        window.alert("Invalid input!")
        return false;
    }else{
        return true;
    }
};


/* 
============================================================================================================
    REMOVE TRANSACTIONS:
============================================================================================================ 
*/ 

function removeTransaction(index) {

    transactions.splice(index, 1);
    localStorage.setItem('transaction-list', JSON.stringify(transactions));
    displayTransaction();
    displaySummary();
};


// ============================================================================================================
//                                  Function to display transactions
// ============================================================================================================
function displayTransaction() {
   
    transactionList.textContent = "";

    transactions.forEach((transaction, index) => {
        var li = document.createElement('li');
        li.className = transaction.type == 'expense' ? 'expense': 'income';
        var label = `${transaction.description} $${transaction.amount}`;
        li.innerHTML = `${label}<button class = "transactions button" onclick="removeTransaction(${index})"> x </button>`;
        transactionList.appendChild(li);

      });
    };





// ============================================================================================================
//                           Calculate and display the total income, total expense, and balance.
// ============================================================================================================

function displaySummary() {

    var income = 0;
    var expense = 0;

    transactions.forEach((transaction) => {
        income = income + (transaction.type == 'income' ? transaction.amount: 0);
        expense = expense + (transaction.type == 'expense' ? transaction.amount: 0);
    });

    var newBalance = income - expense;

    totalIncome.textContent = `${income.toFixed(2)}`;
    totalExpense.textContent = `${expense.toFixed(2)}`;
    balance.textContent = `${newBalance.toFixed(2)}`;
    return {totalIncome, totalExpense, balance};
};



// ================================================================================================================
//                      Initialize the application by loading transactions from local storage if available.
// =================================================================================================================
function initLocalStorage(){
    if (localStorage.getItem('transaction-list')){
        transactions = JSON.parse(localStorage.getItem('transaction-list'));
        
        if (transactions === null){
            transactions = [];
        }
        displaySummary();
        displayTransaction();
    }
};