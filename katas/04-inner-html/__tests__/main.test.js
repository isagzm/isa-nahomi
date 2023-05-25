import { getByText, prettyDOM } from "@testing-library/dom";
import { readRelativeIndex } from "../../../__test__/utils.js";
import prettier from "prettier";

import { kata } from "../kata.js";

const html = readRelativeIndex(__dirname);

test("structure is ok", async () => {
  document.body.innerHTML = html;
  kata();
  document.body.innerHTML = prettier.format(document.body.innerHTML, {
    parser: "html",
  });

  expect(document.body).toMatchSnapshot();
});
