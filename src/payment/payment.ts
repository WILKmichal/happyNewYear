var card = {
    "kind": "credit_card",
    "first_name": "Joe",
    "last_name":"Jones",
    "number": "5555555555554444",
    "verification_value": "423",
    "month": "3",
    "year": "2032",
    "email": "joey@example.com"
  }

  // Serialize and URI encode parameters.
  var paramStr = $.param(card);




  $.ajax({
    type: "GET",

    dataType: "jsonp"
  }).done(function(data:any) {
    console.log(data);
    if (data.status === 201) {
      alert(data.transaction.payment_method.token);
    } else {
      alert('validation error')
    }
  });