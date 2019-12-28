import { rgbToHsl } from "./ColorUtils";

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
