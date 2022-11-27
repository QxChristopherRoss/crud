
var app = new function() {
  this.pb = document.getElementById('individuals');
  this.individuals = [];
  this.FetchAll = function() {
    var data = '';
    if (this.individuals.length > 0) {
      for (i = 0; i < this.individuals.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.individuals[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.individuals.length);
    return this.pb.innerHTML = data;
  };
  this.Add = function () {
    pb = document.getElementById('add-contact');
    var individuals = pb.value;

    if (individuals) {
      this.individuals.push(individuals.trim());
      pb.value = '';
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var pb = document.getElementById('edit-contact');
    pb.value = this.individuals[item];
    document.getElementById('edit-box').style.display = 'block';
    self = this;
    document.getElementById('save-edit').onsubmit = function() {
      var individuals = pb.value;
      if (individuals) {
        self.individuals.splice(item, 1, individuals.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    this.individuals.splice(item, 1);
    this.FetchAll();
  };
  this.Count = function(data) {
    var pb   = document.getElementById('counter');
    var name = 'individuals';
    if (data) {
        if(data ==1){
            name = 'individuals'
        }
      pb.innerHTML = data + ' ' + name ;
    } 
    else {
      pb.innerHTML = 'No ' + name;
    }
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}