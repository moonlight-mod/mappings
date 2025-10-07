import register from "../../../../../registry";

type Exports = {
  markup: string;
  inlineFormat: string;
  codeContainer: string;
  codeActions: string;
  blockquoteContainer: string;
  blockquoteDivider: string;
  slateBlockquoteContainer: string;
  roleMention: string;
  rolePopout: string;
  roleHeader: string;
  roleScroller: string;
  timestamp: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/messages/web/Markup.css";
  moonmap.register({
    name,
    find: ["markup:", "inlineFormat:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
