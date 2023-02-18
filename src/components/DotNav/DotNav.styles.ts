import { CSSProperties } from "react";

export const styles: {
  [key in string]: CSSProperties;
} = {
  mainNav: {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
},
singleDotNav: {
  backgroundColor: '#EBEBEB',
  height: 30,
  width: 30,
  borderRadius: 15,
},
logoContainer: {
  maxWidth: 100,
},
titleContainer: {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
linkContainer: {
},
}
