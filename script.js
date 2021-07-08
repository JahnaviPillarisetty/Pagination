var req = new XMLHttpRequest();

req.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);

req.send();

req.onload = function () {
    var data = JSON.parse(this.response);
    
    var table = document.createElement('table');
    table.className = 'table';

    var thead = document.createElement('thead');
    thead.className = 'thead-dark';

    var tr = document.createElement('tr');
    var th1 = createtrth('th', 'ID');
    var th2 = createtrth('th', 'Name');
    var th3 = createtrth('th', 'Email');
    tr.append(th1, th2, th3);
    thead.append(tr);
    table.append(thead);
    var tbody = document.createElement('tbody');
    
    loadDetails(1);
    var div = document.createElement('div');
    var temp = [];
    for (let i = 0; i < 10; i++) {
        
        var b = document.createElement('button');
        b.setAttribute('class', 'btn btn-outline-dark');
        b.innerHTML = i + 1;
        temp.push(b);
       div.append(b);
       document.body.append(div);

    }
    temp.forEach((ele) => {
        ele.onclick = function () {
            loadDetails(ele.innerHTML);
        }

    });

    function loadDetails(value) {
        table.innerHTML = " ";
        var tbody = document.createElement('tbody');
        for (let i = (value - 1) * 10; i < value * 10; i++) {
           
            var tr = document.createElement('tr');
            var td1 = createtrth('td', data[i].id);
            var td2 = createtrth('td', data[i].name);
            var td3 = createtrth('td', data[i].email);
            tr.append(td1, td2, td3);
            tbody.append(tr);

        }
        table.append(thead,tbody);
        document.body.append(table);
    
    }
     
    function createtrth(elementname, value = " ") {
        var td = document.createElement(elementname);
        td.innerHTML = value;
        return td;
    }  
    
}
