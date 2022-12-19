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
  mrgRgt1Rem: {
    marginRight: REM,
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

export const Home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GREY,
  },
  header: {
    padding: REM,
    backgroundColor: colors.SEMI_GREY,
  },
  listHeader: {
    paddingHorizontal: REM,
    paddingBottom: REM,
    backgroundColor: colors.SEMI_GREY,
    borderBottomLeftRadius: REM,
    borderBottomRightRadius: REM,
  },
  refreshButton: {
    height: 2 * REM,
    width: 2 * REM,
    borderRadius: 0.5 * REM,
    borderWidth: 1,
    borderColor: colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    padding: 0.5 * REM,
    width: 8 * REM,
    backgroundColor: '#000',
    borderRadius: REM,
    paddingHorizontal: 0.5 * REM,
  },
});

export const Post = StyleSheet.create({
  container: {
    padding: REM,
    backgroundColor: colors.SEMI_GREY,
    borderRadius: REM,
  },
  image: {
    width: '100%',
    height: 12 * REM,
    borderRadius: REM,
    ...Common.mrgBtmHalfRem,
  },
  profileIcon: {
    height: 2 * REM,
    width: 2 * REM,
    borderRadius: REM,
    ...Common.mrgRgtHalfRem,
  },
});
