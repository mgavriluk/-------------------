function calculate() {
    // Получаем значения инпутов
    // const orderAmount = parseFloat(document.getElementById('orderAmount').value);
    const discount = parseFloat(document.getElementById('discount').value);
    const myDiscount = parseFloat(document.getElementById('myDiscount').value);
    const retailPrice = parseFloat(document.getElementById('retailPrice').value);
  
    // Проверяем, чтобы значения были корректными
    if (isNaN(retailPrice) || isNaN(discount)) {
      alert('Пожалуйста, введите корректные данные');
      return;
    }
      
    const priceWithMyDiscount = retailPrice - (retailPrice * myDiscount / 100)
    const orderAmountWithDiscount = retailPrice - (retailPrice * discount / 100)
    const proPrice = retailPrice - (retailPrice * 20 / 100)
    const cashback = orderAmountWithDiscount - priceWithMyDiscount - (proPrice * 5 / 100)
    const sellerAmount = orderAmountWithDiscount - cashback
  
    // Обновляем значения на странице
    //document.getElementById('proPrice').innerText = proPrice.toFixed(2);
    document.getElementById('orderAmountWithDiscount').innerText = orderAmountWithDiscount.toFixed(2);
    document.getElementById('sellerAmount').innerText = sellerAmount.toFixed(2);
    document.getElementById('cashback').innerText = cashback.toFixed(2);

    document.getElementById('resultTable').style.display = 'table';
  }
  