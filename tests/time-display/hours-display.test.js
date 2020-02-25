const hoursDisplay = require('../../berlin-clock/time-display/hours-display');

describe ('Should throw an error if hours are not valid', () => {
  it ('Should throw error when hours are not a numeric value', () => {
    expect(() => {
      hoursDisplay.display('aa');
    }).toThrow(Error);
  });

  it ('Should throw error when hours are a negative number', () => {
    expect(() => {
      hoursDisplay.display('-40');
    }).toThrow(Error);
  });
});

describe ('Display hours of the berlin clock', () => {
  it ('Should display correctly 0 hours', () => {
    let expectedDisplayedHours = `OOOO\nOOOO`;

    let displayedHours = hoursDisplay.display('00');

    expect(displayedHours).toBe(expectedDisplayedHours);
  });

  it ('Should display correctly 3 hours', () => {
    let expectedDisplayedHours = `OOOO\nRRRO`;
  
    let displayedHours = hoursDisplay.display('03');
  
    expect(displayedHours).toBe(expectedDisplayedHours);
  });

  it ('Should display correctly 19 hours', () => {
    let expectedDisplayedHours = `RRRO\nRRRR`;
  
    let displayedHours = hoursDisplay.display('19');
  
    expect(displayedHours).toBe(expectedDisplayedHours);
  });

  it ('Should display correctly 29 hours', () => {
    let expectedDisplayedHours = `ROOO\nOOOO`;
  
    let displayedHours = hoursDisplay.display('29');
  
    expect(displayedHours).toBe(expectedDisplayedHours);
  });
});
