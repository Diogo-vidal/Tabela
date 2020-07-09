// listas
var valoresStatus = ['', '2000', '-1000', '-5000','-3000', '1000', '2500', '3420', '2000', '7020', '1800', '-3650', '-4250'];
let Status = ['POSITIVO', 'NEGATIVO'];
// obejetos para guardar os dados da tabela








// funçoes para mexer na tabela\\

function changeCell(){
       // essa funçao é utilizada ao clicar na celula da tabela referente ao mes em questao e abrir a planilha de gastos 
       // e ganhos

       document.getElementById('principal').innerHTML="<thead><th>GASTOS</th><th>GANHOS</th></thead><tr><td></td> <td></td></tr><tr><td></td><td></td> </tr><tr> <td></td><td></td></tr></tbody><caption>Criado por Diogo</caption>"
}


 function back() {
       // botao volar... volta para a tabela principal 
       // é um reset!
       

       document.getElementById('principal').innerHTML='<thead><th>Mês</th><th>Status</th></thead><tbody><tr><td onclick="changeCell()">jan</td><td onmouseover="changeValores(this, 1)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">fev</td><td onmouseover="changeValores(this, 2)" onmouseout="changeStatus(this, 1)">NEGATIVO</td></tr><tr><td onclick="changeCell()">mar</td><td onmouseover="changeValores(this, 3)" onmouseout="changeStatus(this, 1)">NEGATIVO</td></tr><tr><td onclick="changeCell()">abr</td><td onmouseover="changeValores(this, 4)" onmouseout="changeStatus(this, 1)">NEGATIVO</td></tr><tr><td onclick="changeCell()">mai</td><td onmouseover="changeValores(this, 5)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">jun</td><td onmouseover="changeValores(this, 6)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">jul</td><td onmouseover="changeValores(this, 7)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">ago</td><td onmouseover="changeValores(this, 8)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">set</td><td onmouseover="changeValores(this, 9)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">out</td><td onmouseover="changeValores(this, 11)" onmouseout="changeStatus(this, 0)"">POSITIVO</td></tr><tr><td onclick="changeCell()">nov</td><td onmouseover="changeValores(this, 11)" onmouseout="changeStatus(this, 1)">NEGATIVO</td></tr><tr><td onclick="changeCell()">dez</td><td onmouseover="changeValores(this, 12)" onmouseout="changeStatus(this, 1)">NEGATIVO</td></tr></tbody></table>'
}


// alteram a coluna "Status" da tabela principal para que ela fique dinamica\\
function changeValores(ID, x){
       ID.innerHTML = valoresStatus[x]
}
function changeStatus(ID, x){
       ID.innerHTML = Status[x]
}
