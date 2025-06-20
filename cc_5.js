const employees = [
    { name: "Alice", hourlyRate: 25, hoursWorked: 38 },
    { name: "Bob", hourlyRate: 20, hoursWorked: 45 },
    { name: "Carlos", hourlyRate: 30, hoursWorked: 50 },
    { name: "Diana", hourlyRate: 22, hoursWorked: 40 },
  ];
  
  function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40);
    return baseHours * rate;
  }
  
  function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(hours - 40, 0);
    return overtimeHours * rate * 1.5;
  }
  
  function calculateTaxes(grossPay) {
    return grossPay * 0.15;
  }
  
  function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
  
    return {
      name: employee.name,
      basePay: basePay.toFixed(2),
      overtimePay: overtimePay.toFixed(2),
      grossPay: grossPay.toFixed(2),
      netPay: netPay.toFixed(2),
    };
  }
  
  employees.forEach(emp => {
    const payroll = processPayroll(emp);
    console.log(payroll);
  });
  