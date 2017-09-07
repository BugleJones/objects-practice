//Implement a function that calculates the total sales
//and total tax, grouped by company

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
function calculateSalesTax(salesData, taxRates) {
  var salesTaxInfo = {};

//Loop through our salesTaxRate data
  for (var i = 0; i < salesData.length; i++) {

    if (!salesTaxInfo[salesData[i]["name"]]) {
      salesTaxInfo[salesData[i]["name"]] = {};
      salesTaxInfo[salesData[i]["name"]]["totalSales"] = 0;
      salesTaxInfo[salesData[i]["name"]]["totalTaxes"] = 0;
    }
    for (var j = 0; j < salesData[i]["sales"].length; j++) {
      var calculateTax = 0;
      salesTaxInfo[salesData[i]["name"]]["totalSales"] = salesTaxInfo[salesData[i]["name"]]["totalSales"] + salesData[i]["sales"][j];
      calculateTax = salesData[i]["sales"][j] * taxRates[salesData[i]["province"]];
      salesTaxInfo[salesData[i]["name"]]["totalTaxes"] = salesTaxInfo[salesData[i]["name"]]["totalTaxes"] + calculateTax;
    }
  }
  return salesTaxInfo;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)

