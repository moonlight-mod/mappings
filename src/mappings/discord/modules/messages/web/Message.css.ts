import register from "../../../../../registry";

type Exports = {
  wrapper: string;
  compact: string;
  cozy: string;
  contentOnly: string;
  repliedMessage: string;
  threadMessageAccessory: string;
  executedCommand: string;
  latin12CompactTimeStamp: string;
  latin24CompactTimeStamp: string;
  asianCompactTimeStamp: string;
  contextCommandMessage: string;
  messageSpine: string;
  repliedMessageClickableSpine: string;
  repliedMessageContentHovered: string;
  threadMessageAccessoryAvatar: string;
  replyAvatar: string;
  replyBadge: string;
  executedCommandAvatar: string;
  replyChatIconContainer: string;
  replyIcon: string;
  clanTagChiplet: string;
  userJoinSystemMessageIcon: string;
  ticketIcon: string;
  commandIcon: string;
  username: string;
  roleDot: string;
  commandName: string;
  appsIcon: string;
  appLauncherOnboardingCommandName: string;
  targetUsername: string;
  executedCommandSeparator: string;
  repliedTextPreview: string;
  threadMessageAccessoryPreview: string;
  repliedTextContent: string;
  clickable: string;
  repliedMessageClickableSpineHovered: string;
  threadMessageAccessoryContent: string;
  repliedTextPlaceholder: string;
  threadMessageAccessoryPlaceholder: string;
  repliedTextContentTrailingIcon: string;
  threadMessageAccessoryContentTrailingIcon: string;
  repliedTextContentLeadingIcon: string;
  threadMessageAccessoryContentLeadingIcon: string;
  contents: string;
  zalgo: string;
  messageContent: string;
  header: string;
  buttonContainer: string;
  avatar: string;
  avatarDecoration: string;
  roleIcon: string;
  timestamp: string;
  timestampInline: string;
  alt: string;
  timestampTooltip: string;
  timestampVisibleOnHover: string;
  nitroAuthorBadgeTootip: string;
  headerText: string;
  hasRoleIcon: string;
  hasBadges: string;
  botTagCompact: string;
  botTagCozy: string;
  nitroBadgeSvg: string;
  nitroAuthorBadgeContainer: string;
  separator: string;
  hasThread: string;
  isSystemMessage: string;
  hasReply: string;
  markupRtl: string;
  isSending: string;
  isFailed: string;
  isUnsupported: string;
  edited: string;
  communicationDisabled: string;
  compactCommunicationDisabled: string;
  communicationDisabledOpacity: string;
  badgesContainer: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/messages/web/Message.css";
  moonmap.register({
    name,
    find: ["messageContent:", "edited:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
