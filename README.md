# Firefox parent focus prevents child from receiving proper focus

## Instructions

To run locally:

```
git clone https://github.com/scottrabin/focus-firefox-repro.git
cd focus-firefox-repro
yarn install
yarn start
```

To view on Github Pages:
[https://scottrabin.github.io/focus-firefox-repro/index.html](https://scottrabin.github.io/focus-firefox-repro/index.html)

## How to Reproduce

### Steps:

1. Click the button in the child `<iframe>` element at the top of the page
2. Click the input element now visible in the top frame
3. Enter text into the input element

### Expected Result:

Text is properly entered into the input element

### Actual Result:

Text is not entered into the input element

## Other Information

If you click outside of the `<iframe>` element, and then focus again on the
`<input>` element, text entry works as expected. The bug only appears when the
interaction which causes focus to be reset to the parent frame is followed by
further interactions within the child frame only; interactions which would
ordinarily cause the parent frame to receive focus cause the issue to disappear.

## Explanation

The top `<iframe>` element does not have the `allow-same-origin` property in the
`sandbox` attribute. This apparently prevents secondary clicks within the frame
from correctly granting focus to the targeted elements, which (in this case)
prevents text entry.
