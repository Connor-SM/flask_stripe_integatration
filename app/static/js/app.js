function updateTotal() {
  let total = $('#amount').val();
  total = Math.round(total*100);
  console.log(total);

  $.getJSON('/getKey', function(data) {
    console.log(data);
    let button = $('#stripe-script');
    button.html(`<script src="https://checkout.stripe.com/checkout.js"
      class="stripe-button"
      data-key="${data.key}"
      data-description="Flask Stripe Tutorial"
      data-amount="${total}"
      data-locale="auto"></script>`)
  })

}
