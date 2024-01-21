const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  const employeeInfo = {...employee};
  employeeInfo[key] = value;
  return employeeInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

const newAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, '12 Broadway');

function deleteFromEmployeeByKey(employee, key, value){
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
  const newEmployee = employee;
  newEmployee[key] = value;
  return newEmployee;
}
