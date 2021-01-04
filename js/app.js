var id = 0;

function addItemsToList(name,email,number,machine,data){
    var ul = document.getElementById('list');
    var header = document.createElement('h2');

    var _name = document.createElement('li');
    var _email=document.createElement('li');
    var _number = document.createElement('li');
    var _machine = document.createElement('li');
    var _data=document.createElement('li');

    header.innerHTML = '' + (name);
   // header.setAttribute("style","border: red");

    //_name.innerHTML='Name: '+name;
    _email.innerHTML='Email: '+email; 
    _number.innerHTML='Contact Number : '+number;
    _machine.innerHTML='Number of Machines: '+machine;
    _data.innerHTML='Number Of Cars: '+data;
    ul.appendChild(header);
    ul.appendChild(_name);
    ul.appendChild(_email);
    ul.appendChild(_number);
    ul.appendChild(_machine);
    ul.appendChild(_data);
}

function FetchAllData(){
    firebase.database().ref('Admin').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let number = ChildSnapshot.val().Number;
                let machine = ChildSnapshot.val().Machine;
                let data = ChildSnapshot.val().Data;
                addItemsToList(name,email,number,machine,data);
            }
        )
    });
}
window.onload(FetchAllData());
