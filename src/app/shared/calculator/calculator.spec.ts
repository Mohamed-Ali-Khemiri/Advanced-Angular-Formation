import { waitForAsync } from "@angular/core/testing";
import { Calculator } from "./calculator";

describe('Calculator', () => {

  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should evaluate 2 + 3 + 4 to 9', () => {
    expect(calculator.evaluate('2 + 3 + 4')).toEqual(9);
  });

});
