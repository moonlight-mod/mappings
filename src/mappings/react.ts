import register from "../registry";

type React = typeof import("react");

register((moonmap) => {
  const name = "react";
  moonmap.register({
    name,
    find: [
      "__SECRET_INTERNALS_DO_NOT_USE" + "_OR_YOU_WILL_BE_FIRED",
      /\.?version(?:=|:)/,
      /\.?createElement(?:=|:)/
    ],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default React;
