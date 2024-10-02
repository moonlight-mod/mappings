import register from "../../../../registry";

export type MarginsCSS = {
  marginReset: string;
  marginTop4: string;
  marginBottom4: string;
  marginTop8: string;
  marginBottom8: string;
  marginTop20: string;
  marginBottom20: string;
  marginTop40: string;
  marginBottom40: string;
  marginTop60: string;
  marginBottom60: string;
  marginCenterHorz: string;
  marginLeft8: string;
};

register((moonmap) => {
  const name = "discord/styles/shared/Margins.css";
  moonmap.register({
    name,
    find: "marginCenterHorz:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default MarginsCSS;
