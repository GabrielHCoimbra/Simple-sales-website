//A big function to decrement the stock with basedon sale
function stock() {
    var matriz = new Array(2);
    matriz[0] = ["001","002","003","004","005","006","007","008","009","010"];
    matriz[1] = [document.form2.quantia1.value,document.form2.quantia2.value,document.form2.quantia3.value,document.form2.quantia4.value,document.form2.quantia5.value,document.form2.quantia6.value,document.form2.quantia7.value,document.form2.quantia8.value,document.form2.quantia9.value,document.form2.quantia10.value];
    var ids  = localStorage.getItem('ids');
    var amounts = localStorage.getItem('amounts');
    var rp = "]";
    ids = ids.replace(rp, "");
    amounts = amounts.replace(rp, "");
    rp = /[["]/g;
    ids = ids.replace(rp, "");
    amounts = amounts.replace(rp, "");
    var id1 = 0;
    var amount1 = 0;
    var count = 0;   
    for (var i = 0; i < ids.length; i++) {
        count++;
        var j = i + 1;
        if(ids[i] == 1 && ids[j] == 0){
            id1 = 10;
            if(i == 0){
                amount1 = amounts[i];
            }else if(i == 1 && count == 1){
                amount1 = amounts[count];
            }else if(i == 2 && count == 2){
                amount1 = amounts[count];
            }else if(i == 2 && count == 3){
                amount1 = amounts[count];
            }else if(i == 3 && count == 3){
                amount1 = amounts[count];
            }else if(i == 3 && count == 4){
                amount1 = amounts[count];
            }else if(i == 4 && count == 4){
                amount1 = amounts[count];
            }else if(i == 4 && count == 5){
                amount1 = amounts[count];
            }
        }
        
    }
    for (var i = 0; i < amounts.length ;i++) {
        id = ids[i];
        amount = parseInt(amounts[i]);
        if (id == 1 && id1 != 10 && id2 != 11 && id3 != 12){
            var current = matriz[1][0] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('001').value =  current;
                }
        }else if(id == 2){
            var current = matriz[1][1] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('002').value =  current;
                }
        }else if(id == 3){
            var current = matriz[1][2] - amount;
            if(current < 0){
                alert("Quantidade Inválida!!");
            }else{
                document.getElementById('003').value =  current;
            }
        }else if(id == 4){
            var current = matriz[1][3] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('004').value =  current;
                }
        }else if(id == 5){
            var current = matriz[1][4] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('005').value =  current;
                }
        }else if(id == 6){
            var current = matriz[1][5] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('006').value =  current;
                }
        }else if(id == 7){
            var current = matriz[1][6] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('007').value =  current;
                }
        }else if(id == 8){
            var current = matriz[1][7] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('008').value =  current;
                }
        }else if(id == 9){
            var current = matriz[1][8] - amount;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('009').value =  current;
                }
        }else if(id1 == 10){
            var current = matriz[1][9] - amount1;
                if(current < 0){
                    alert("Quantidade Inválida!!");
                }else{
                    document.getElementById('010').value =  current;
                }
        }
    }
}