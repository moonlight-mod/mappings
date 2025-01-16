import register from "../../../../registry";

type MarkupCSS = {
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
  timestampTooltip: string;
};

register((moonmap) => {
  const name = "discord/styles/shared/Markup.css";
  moonmap.register({
    name,
    find: ["markup:", "inlineFormat:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default MarkupCSS;
