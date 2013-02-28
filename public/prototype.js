// make an object with a prototype

$(document).ready(function() {


  var Note = function(id) {
    this.baseUrl = '//localhost:9292/note/';
    this.id = id;
    this.subject = '';
    this.content = '';
  };

  Note.prototype.fetch = function() {
    $.ajax({
      url: this.baseUrl + this.id,
      dataType: 'json',
      type: 'GET',
      context: this,
      success: function(data) {
        console.log(data);
      }, // 2xx response time
      error: function(){} // 4xx-5xx response time
    });
  };

  Note.prototype.fetchAll = function (){
    $.ajax({
      url: this.baseUrl
      dataType: 'json',
      type: 'GET',
      context: this,
      success: function(data){
        console.log(data);

      },
      error: function(){}
    });


  };

  Note.prototype.save = function(newSubject,newContent) {
    $.ajax({
      url: this.baseUrl + this.id,
      dataType: 'json',
      type: 'POST',
      context: this,
      data: JSON.stringify({
        subject : newSubject ,
        content : newContent
      }),
      success: function(data) {
        console.log(data);
      }, // 2xx response time
      error: function(){} // 4xx-5xx response time
    });
  };

  Note.prototype.create = function(newSubject,newContent) {
    $.ajax({
      url: this.baseUrl + this.id,
      dataType: 'json',
      type: 'PUT',
      context: this,
      data: JSON.stringify({
        subject : newSubject,
        content : newContent
      }),
      success: function() {
        console.log(data);
      },
      error: function(){}
    });
  };




});
