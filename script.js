function calculate() {
    // Получаем значения инпутов
    const warehouseprice = parseFloat(document.getElementById('warehouseprice').value);
    // const orderAmount = parseFloat(document.getElementById('orderAmount').value);
    const discount = parseFloat(document.getElementById('discount').value);
  
    // Проверяем, чтобы значения были корректными
    if (isNaN(warehouseprice) || isNaN(discount)) {
      alert('Пожалуйста, введите корректные данные');
      return;
    }
  
    const retailPrice = warehouseprice + (warehouseprice * 25 / 100)
    const orderAmountWithDiscount = retailPrice - (retailPrice * discount / 100)
    const proPrice = retailPrice - (retailPrice * 20 / 100)
    const sellerAmount = proPrice + (proPrice * 5 / 100)
    const cashback = retailPrice - (retailPrice * discount / 100) - sellerAmount
  
    // Обновляем значения на странице
    //document.getElementById('proPrice').innerText = proPrice.toFixed(2);
    document.getElementById('retailPrice').innerText = retailPrice.toFixed(2);
    document.getElementById('orderAmountWithDiscount').innerText = orderAmountWithDiscount.toFixed(2);
    document.getElementById('sellerAmount').innerText = sellerAmount.toFixed(2);
    document.getElementById('cashback').innerText = cashback.toFixed(2);

    document.getElementById('resultTable').style.display = 'table';
  }
  