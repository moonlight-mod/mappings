import register from "../../../registry";

// TODO
type NativeUtils = {
  copyImage: (url: string) => void;
};

register((moonmap) => {
  const name = "discord/utils/NativeUtils";
  moonmap.register({
    name,
    find: "Data fetch unsuccessful",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default NativeUtils;
