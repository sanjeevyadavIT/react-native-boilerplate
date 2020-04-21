import { Platform } from 'react-native';

const fontFamily = Platform.select({ android: 'sans-serif', ios: 'Helvetica' });
const fontWeightRegular = 'normal';
const fontWeightBold = 'bold';

export default {
  /**
   * Use the Heading style for card titles.
   */
  headingText: theme => ({
    fontFamily,
    color: theme.headingTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  headingTextBold: theme => ({
    fontFamily,
    color: theme.headingTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: theme => ({
    fontFamily,
    color: theme.subHeadingTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  subheadingTextBold: theme => ({
    fontFamily,
    color: theme.subHeadingTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * would generally use the Body style.
   */
  bodyText: theme => ({
    fontFamily,
    color: theme.bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  bodyTextBold: theme => ({
    fontFamily,
    color: theme.bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
  /**
   * Text style meant to be used only for Button component
   */
  buttonText: {
    fontFamily,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
  },
};
