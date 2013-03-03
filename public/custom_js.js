  Note.prototype.del = function(){
    $.ajax({
      url: this.baseUrl + this.id,
      dataType: 'json',
      type: "DELETE",
      context: this,
      success: function(data){
        console.log(data);
        alert("Note was deleted");
      },
      error: function(){
        alert("Note unsuccessfully deleted")
      }
    });
  };
