import register from "../../../registry";

register((moonmap) => {
  const name = "discord/uikit/ListSectionItem";
  moonmap.register({
    name,
    find: '("ListSectionItem")',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
