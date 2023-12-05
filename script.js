

function somar(){
    var tn1 = window.document.getElementById('n1');
    var tn2 = window.document.getElementById('n2');
    var res = window.document.getElementById('res')
    var vn1 = Number(tn1.value);
    var vn2 = Number(tn2.value);
    var soma = vn1 + vn2;
    res.innerHTML = `A soma entre ${vn1} e ${vn2} é igual a: <br/><strong class="produto">${soma}</strong>`;

}
