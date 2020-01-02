# particalizor-3000

react library capable of particalizing images

[![Build Status](https://travis-ci.org/ArtemAlagizov/particalizor-3000.svg?branch=master)](https://travis-ci.org/ArtemAlagizov/particalizor-3000)
[![Coverage Status](https://img.shields.io/coveralls/github/ArtemAlagizov/particalizor-3000.svg)](https://coveralls.io/github/ArtemAlagizov/particalizor-3000?branch=master)
[![License Badge][license badge]][LICENSE]

# live demo
* predefined image for now
* available here at the moment => http://3.13.45.208:8080/ 
* github repo for the live demo app => [github repo](https://github.com/ArtemAlagizov/particalizor-showcase)

# installation

```
yarn add particalizor-3000
```

|  original                      | particalized-3000                      | 
| ------------------------------ |:--------------------------------------:|
|![testImage](/src/assets/testImage.png)|![particalizedImage](https://raw.githubusercontent.com/ArtemAlagizov/images-for-repos/master/particalizor-image-particalized.gif)|

**settings used to create the example image above**
```tsx
import React from "react";
import MovingPicture from "particalizor-3000";
import testImage from "./testImage.png";

export const MovingPictureApp: React.FC<IMovingPictureAppProps> = ({}) => {
  return (
    <MovingPicture
      imageSource={testImage}
      particleNumber={700}
      particleTraceWidth={2}
      particleLifeTime={7000}
      particleVelocity={1.3}
      directionChannel={"saturation"}
      hueChannel={"blue"}
    />
  );
}
```

# api

| property          |type|required|default|acceptable values|description                                                                            |
| ----------------- |------|---|---------|--------|--------------------------------------------------------------------------|
| imageSource       |string|yes| --      | valid image source|  source of the image,<br>either imported image (.png, .jpg),<br>either base64 representation (i.e.  "data:image/jpeg;base64,/9j/4A..") |
| particleNumber    |number|no | 7000    |  > 0 | number of particles                                    |
| particleTraceWidth|number|no | 1       |  > 0|width of a particle trace, essentially [canvas lineWidth](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)                    |
| particleLifeTime  |number|no | 700     | > 0| lifetime of a particle                                   |
| particleVelocity  |number|no | 1       | > 0| velocity of particles                                    |
| directionChannel  |string|no | "hue"   | "red","green",<br>"blue","hue",<br>"saturation","light" | enum of {"red","green","blue",<br>"hue","saturation","light"}|
| hueChannel        |string|no | "blue"  | "red","green"<br>,"blue","hue",<br>"saturation","light" | enum of {"red","green","blue",<br>"hue","saturation","light"}|
| reverseDirection  |boolean|no| false   | true,false | reverse direction                                |
| reverseHue        |boolean|no| false   | true,false | reverse hue                                      |
| randomizeSettings*|boolean|no| false   | true,false | randomize properties that are not passed in      |

\* not available yet

**property value falls back to default if provided proprety value is not acceptable**  
  
# example usage
```tsx
import React from "react";
import MovingPicture from "particalizor-3000";
import testImage from "./testImage.png";

export const MovingPictureApp: React.FC<IMovingPictureAppProps> = ({}) => {
  return (
    <MovingPicture
      imageSource={testImage}
    />
  );
}
```
# license

[MIT License](LICENSE)

[LICENSE]: https://github.com/ArtemAlagizov/particalizor-5000/blob/master/LICENSE
[license badge]: https://img.shields.io/badge/license-MIT-blue.svg
