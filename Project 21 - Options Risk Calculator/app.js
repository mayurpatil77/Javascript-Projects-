function getValues() {
   let selectElement = document.getElementById("selectIndex");
   let stopLossInput = document.getElementById("stopLossInput");
   let selectedValue = selectElement.value;
   let lotSize = lotSizeInput.value;
   let premiumPrice = premiumPriceInput.value;
   let stopLoss = stopLossInput.value;
   let move10Span = document.getElementById("move10");
   let rs10Span = document.getElementById("rs10");

   if (selectedValue == "nifty") {
      let qty = lotSize * 50;
      let profit = qty * premiumPrice / stopLoss;
      move10Span.textContent = stopLoss;
      rs10Span.textContent = profit;
   }

   if (selectedValue == "banknifty") {
      let qty = lotSize * 25;
      let pnl = premiumPrice / 10;
      let profit = qty * pnl
      move10Span.textContent = stopLoss;
      rs10Span.textContent = profit;
   }

   if (selectedValue == "finnifty") {
      let qty = lotSize * 40;
      let pnl = premiumPrice / 10;
      let profit = qty * pnl
      move10Span.textContent = stopLoss;
      rs10Span.textContent = profit;
   }
}
