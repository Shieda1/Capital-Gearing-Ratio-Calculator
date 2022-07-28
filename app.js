// https://calculator.swiftutors.com/capital-gearing-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const capitalGearingRatioRadio = document.getElementById('capitalGearingRatioRadio');
const equityShareCapitalRadio = document.getElementById('equityShareCapitalRadio');
const fixedInterestBearingFundsRadio = document.getElementById('fixedInterestBearingFundsRadio');

let capitalGearingRatio;
let equityShareCapital = v1;
let fixedInterestBearingFunds = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

capitalGearingRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Depreciation Rate';
  variable2.textContent = 'Fixed Interest Bearing Funds';
  equityShareCapital = v1;
  fixedInterestBearingFunds = v2;
  result.textContent = '';
});

equityShareCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity Share Capital';
  variable2.textContent = 'Fixed Interest Bearing Funds';
  capitalGearingRatio = v1;
  fixedInterestBearingFunds = v2;
  result.textContent = '';
});

fixedInterestBearingFundsRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity Share Capital';
  variable2.textContent = 'Depreciation Rate';
  capitalGearingRatio = v1;
  equityShareCapital = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(capitalGearingRatioRadio.checked)
    result.textContent = `Equity Share Capital = ${computeEquityShareCapital().toFixed(2)}`;

  else if(equityShareCapitalRadio.checked)
    result.textContent = `Depreciation Rate = ${computeDepreciationRate().toFixed(2)}`;

  else if(fixedInterestBearingFundsRadio.checked)
    result.textContent = `Fixed Interest Bearing Funds = ${computeFixedInterestBearingFunds().toFixed(2)}`;
})

// calculation

function computeEquityShareCapital() {
  return Number(equityShareCapital.value) / Number(fixedInterestBearingFunds.value);
}

function computeDepreciationRate() {
  return Number(capitalGearingRatio.value) * Number(fixedInterestBearingFunds.value);
}

function computeFixedInterestBearingFunds() {
  return Number(equityShareCapital.value) / Number(capitalGearingRatio.value);
}