import {
  getRandomIntNumberInRange,
  getRandomNumberInRange,
  isValidColor,
  rgbToHsl
} from "./ColorCalculator";

describe("Returns correct hsl value when passed rgb values", () => {
  it("returns [0,0,0] for input of [0,0,0]", () => {
    const red = 0;
    const green = 0;
    const blue = 0;

    const [hue, saturation, light] = rgbToHsl(red, green, blue);

    expect(hue).toBe(0);
    expect(saturation).toBe(0);
    expect(light).toBe(0);
  });
  it("returns [0,0,1] for input of [255,255,255]", () => {
    const red = 255;
    const green = 255;
    const blue = 255;

    const [hue, saturation, light] = rgbToHsl(red, green, blue);

    expect(hue).toBe(0);
    expect(saturation).toBe(0);
    expect(light).toBe(1);
  });
  it("returns [0,1,1/2] for input of [255,0,0]", () => {
    const red = 255;
    const green = 0;
    const blue = 0;

    const [hue, saturation, light] = rgbToHsl(red, green, blue);

    expect(hue).toBe(0);
    expect(saturation).toBe(1);
    expect(light).toBe(1 / 2);
  });
  it("returns [1/3,1,1/2] for input of [0,255,0]", () => {
    const red = 0;
    const green = 255;
    const blue = 0;

    const [hue, saturation, light] = rgbToHsl(red, green, blue);

    expect(hue).toBe(1 / 3);
    expect(saturation).toBe(1);
    expect(light).toBe(1 / 2);
  });
  it("returns [2/3,1,1/2] for input of [0,0,255]", () => {
    const red = 0;
    const green = 0;
    const blue = 255;

    const [hue, saturation, light] = rgbToHsl(red, green, blue);

    expect(hue).toBe(2 / 3);
    expect(saturation).toBe(1);
    expect(light).toBe(1 / 2);
  });
});

describe("getRandomNumberInRange works as expected", () => {
  it("returns random number large or equal than provided min and less or equal than provided max", () => {
    const min = 0;
    const max = 12;

    const randomNumberInRange = getRandomNumberInRange(min, max);

    expect(randomNumberInRange).toBeLessThanOrEqual(max);
    expect(randomNumberInRange).toBeGreaterThanOrEqual(min);
  });
});

describe("getRandomIntNumberInRange works as expected", () => {
  it("returns random int number large or equal than provided min and less or equal than provided max", () => {
    const min = 0;
    const max = 12;

    const randomNumberInRange = getRandomIntNumberInRange(min, max);

    expect(randomNumberInRange).toBe(Math.floor(randomNumberInRange));
  });
});

describe("isValidColor works as expected", () => {
  it("returns true if color is valid", () => {
    const validColorString0 = "#333333";
    const validColorString1 = "red";
    const validColorString2 = "#000";
    const validColorString3 = "black";

    expect(isValidColor(validColorString0)).toBeTruthy();
    expect(isValidColor(validColorString1)).toBeTruthy();
    expect(isValidColor(validColorString2)).toBeTruthy();
    expect(isValidColor(validColorString3)).toBeTruthy();
  });
  it("returns false if color is valid", () => {
    const validColorString0 = "#3333333";
    const validColorString1 = "redy";
    const validColorString2 = "#00";
    const validColorString3 = "blackk";

    expect(isValidColor(validColorString0)).toBeFalsy();
    expect(isValidColor(validColorString1)).toBeFalsy();
    expect(isValidColor(validColorString2)).toBeFalsy();
    expect(isValidColor(validColorString3)).toBeFalsy();
  });
});
