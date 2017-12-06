import {
  ACCENT_COLORS,
  MUTED_COLOR,
  TEXT_COLOR
} from '../styles/global';

const placeholderImage = 'https://via.placeholder.com/' +
  '350x350/' +
  `${MUTED_COLOR.replace('#', '')}/` +
  `${TEXT_COLOR.replace('#', '')}/` +
  '?text=Placeholder+Image+';

const content = [
  'Welcome to RNNYT!',
  'With this app, you can learn all about the news!',
  'And you get to experiment with React Native!',
  'And aren\'t animations fun !'
];

export default content.map((message, i) => ({
  message,
  color: '#fff',
  backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
  uri: `${placeholderImage}${i + 1}`
}));
