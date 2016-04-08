$('#fire').on('click', function(){
  if($('#phone').val() && $('#name').val()){
    $.get('http://myapisite.tk/neworder?m='+$('#name').val()+' телефон: '+$('#phone').val()+' заказ сумки с bagfruit.ga', function(){
      window.location.href = '/thanks.html';
    });
  }
})
