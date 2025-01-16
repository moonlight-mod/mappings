import register from "../../../registry";

declare class Record {
  toJS(): this;
  set(key: string, value: unknown): this;
  merge(record: this): this;
  update(
    key: string,
    defaultValue: unknown,
    reducer: (value: unknown) => unknown
  ): this;
  update(key: string, reducer: (value: unknown) => unknown): this;
}

register((moonmap) => {
  const name = "discord/lib/BaseRecord";
  moonmap.register({
    name,
    find: "{toJS(){return{...this}}set(",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default Record;
