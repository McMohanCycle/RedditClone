import {StyleSheet} from 'react-native';
import colors from '../assets/constants/colors';

const REM = 16;

export const Common = StyleSheet.create({
  container: {
    flex: 1,
    padding: REM,
    backgroundColor: colors.DARK_GREY,
  },
  h1: {
    fontSize: 2 * REM,
    fontWeight: '700',
    color: colors.WHITE,
  },
  h2: {
    fontSize: 1.2 * REM,
    fontWeight: '700',
    color: colors.WHITE,
  },
  h3: {
    fontSize: 1.2 * REM,
    fontWeight: '500',
    color: colors.WHITE,
  },
  h4: {
    fontSize: REM,
    fontWeight: '400',
    color: colors.WHITE,
  },
  subtext: {
    fontSize: 0.8 * REM,
    fontWeight: '400',
    color: colors.OFF_WHITE,
  },
  mrgBtm1Rem: {
    marginBottom: REM,
  },
  mrgBtmHalfRem: {
    marginBottom: 0.5 * REM,
  },
  mrgRgtHalfRem: {
    marginRight: 0.5 * REM,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCntr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const login = StyleSheet.create({
  container: {
    padding: 1.5 * REM,
  },
  header: {
    flex: 1,
  },
  ctaContainer: {
    flex: 0.2,
  },
  cta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingVertical: 0.5 * REM,
    borderColor: colors.REDDIT_RED,
    borderWidth: 0.25 * REM,
    borderRadius: 0.75 * REM,
  },
  ctaLogo: {
    marginRight: 8,
  },
  ctaText: {
    color: colors.DARK_GREY,
  },
});
