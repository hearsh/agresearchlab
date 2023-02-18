import { CSSProperties } from "react";

export const styles: {
  [key in string]: CSSProperties;
} = {
  mainNav: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '1px 2px 5px 2px #888888',
    zIndex: 999,
  },
  titleText: {
    textAlign: 'center',
  },
}
