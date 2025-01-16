import register from "../registry";

register((moonmap) => {
  const name = "classnames";
  moonmap.register({
    name,
    find: "window.classNames=",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
