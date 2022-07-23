//Global Variables
pValueT = 0;
arr_id = [];
arr_amount = [];
var i = 0;
//Function to save product informations
function save_product() {
    id = document.form1.nome.value;
    pValue = document.form1.price.value;
    amount = document.form1.amount.value;
    pValueT = pValueT + (pValue*amount);
    arr_id[i] = id;
    arr_amount[i] = amount;
    i++;
}
//Function to redirect to payment page with variables values
function to_payment() {
    var passaValor = function(valor){
        window.location = "payment.html?ValueT="+valor;
    }
    passaValor(pValueT);
    localStorage.setItem('ids', JSON.stringify(arr_id));
    localStorage.setItem('amounts', JSON.stringify(arr_amount));

}
//Function to get the total value of url
function get_vt(){
    var string = location.href.split("=").pop();
    document.getElementById("ValueT").value = string;
   
}
//Function to redirect to money payment page with variables values
function to_money() {
    var pValueT = location.href.split("=").pop();
    var passaValor = function(valor){
        window.location = "money.html?ValueT="+valor;
    }
    passaValor(pValueT);
}
//Function to get change value
function get_change() {
    var pValueT = location.href.split("=").pop();
    var received  = document.form1.valorrb.value;
    var change = received - pValueT;
    document.form1.valordt.value = change;
}
