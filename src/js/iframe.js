var appId = "302146";
var myAppId = appId;
var apiVersion = "3.0";
var error = WePay.configure("stage", myAppId, apiVersion);
if (error) {
  console.log(error);
}

var options = {
  show_labels:true,
  show_placeholders:true,
  show_error_messages:true,
  show_error_messages_when_unfocused:true
};

var iframe_container_id = "credit_card_iframe";
var creditCard = WePay.createCreditCardIframe(iframe_container_id, options);
document.getElementById('submit-credit-card-button').addEventListener('click', function (event) {
    creditCard.tokenize()
      .then(function (response) {
        //get the promise response from the console
        console.log('response', JSON.stringify(response));
        var node = document.createElement('div');
        node.innerHTML = JSON.stringify(response);
        document.getElementById('token').appendChild(node);
      })
      .catch(function (error) {
        console.log('error', error);
        // Move the focus to the first error        
        if (Array.isArray(error)) {
          let key = error[0].target[0];
          creditCard.setFocus(key);
        }
        // display the response on the page for testing purposes; do not launch with this section
        var node = document.createElement('div');
        node.innerHTML = JSON.stringify(error);
        document.getElementById('token').appendChild(node);
    });
 });