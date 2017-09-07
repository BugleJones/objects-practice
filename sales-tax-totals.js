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

//   function calculateSalesTaxCompanies(index) {
//     var openObject = {};
//     var saleAdd = 0;
//     var province = companySalesData[index].province;  // e.g. "AB"
//     var tax = salesTaxRates[province];
//       for (var j = 0; j < companySalesData[index].sales.length; j++) {
//         saleAdd += companySalesData[index].sales[j];
//         }
//       }
//       for (var i = 0; i < companySalesData.length; i++) {
//     // console.log(companySalesData[i].name);
//       var name = companySalesData[i].name;
//       openObject[name] = {'Totalsales': saleAdd,
//                           'Totaltaxes': saleAdd * tax};
//       return (saleAdd * tax);
//     }

//   console.log(openObject);

// var results = calculateSalesTax(companySalesData, salesTaxRates);
// // function calculateSalesTaxTelusAb(index) {
// //   var saleAdd = 0;
// //   var tax = salesTaxRates.SK;
// //   for (var i = 0; i < companySalesData[index].sales.length; i++) {
// //     saleAdd += companySalesData[index].sales[i];
// //   }
// //   return saleAdd * tax;
// // }


// // function calculateBalesTaxTelus(index) {
// //   var saleAdd = 0;
// //   var bcTax = salesTaxRates.BC;
// //   var abTax = salesTaxRates.AB;
// //   var skTax = salesTaxRates.SK;
// //   for (var i = 0; i < companySalesData.length; i++) {
// //     saleAdd += companySalesData[i].sales[0];
// //   }

// //   return saleAdd * bcTax
// // }

// // console.log(calculateBalesTaxTelus())

// // function calculateTax() {

// // }


// // console.log(companySalesData[0].sales[0] * salesTaxRates.BC);
// // console.log(companySalesData[0].sales[1] * salesTaxRates.BC);
// // console.log(companySalesData[0].sales[2] * salesTaxRates.BC);
// // console.log(companySalesData[1].sales[0] * salesTaxRates.BC);
// // console.log(companySalesData[1].sales[1] * salesTaxRates.BC);
// // console.log(companySalesData[1].sales[2] * salesTaxRates.BC);
// // console.log(companySalesData[2].sales[0] * salesTaxRates.BC);
// // console.log(companySalesData[2].sales[1] * salesTaxRates.BC)






// function  () {}
//   if (companySalesData[1].province === salesTaxRates[2]) {
//   return "gotcha";
//   }
// //  }

// // console.log(first())

// function calculateSalesTax(salesData, taxRates) {
//   function calculateTax(sales, taxRate) {
//     for (i = 0; i < salesTaxRates.length; i++) {
//       if (companySalesData[1].province === salesTaxRates[2])
//     }
//   }
//   return
// }
  // First bring in keys and combine with their province

// }

// var results = calculateSalesTax(companySalesData, salesTaxRates);

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
// console.log(salesTaxRates.calculateSalesTax(salesData, taxRates));

