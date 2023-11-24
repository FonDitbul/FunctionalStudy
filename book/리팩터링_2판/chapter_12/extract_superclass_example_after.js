class Party {
  constructor(name, monthlyCost) {
    this._name = name;
    this._monthlyCost = monthlyCost
  }

  get name() {
    return this._name;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  get id() {
    return this._id;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }

  get staff() {
    return this._staff;
  }

  get totalMonthlyCost() {
    return this.staff.map((e) => e.monthlyCost).reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }
}

