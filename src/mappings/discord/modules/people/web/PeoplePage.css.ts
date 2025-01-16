// the module where this is used has `location:"PeoplePage"`
// mobile has `modules/people(/native)`
import register from "../../../../../registry";

export type PeoplePageCSS = {
  addFriend: string;
  badge: string;
  container: string;
  inviteToolbar: string;
  item: string;
  nowPlayingColumn: string;
  peopleColumn: string;
  tabBar: string;
  tabBody: string;
};

register((moonmap) => {
  const name = "discord/modules/people/web/PeoplePage.css";
  moonmap.register({
    name,
    find: "nowPlayingColumn:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default PeoplePageCSS;
