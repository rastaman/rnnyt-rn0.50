import { AsyncStorage } from 'react-native';
import { BOOKMARK, LOADED_BOOKMARKS } from './actionTypes';

export const addBookmark = url => {
  AsyncStorage.getItem('bookmarks').then(bookmarks => {
    if (bookmarks) {
      const bookmarkArray = JSON.parse(bookmarks);
      if (bookmarkArray.indexOf(url) === -1) {
        return AsyncStorage.setItem(
          'bookmarks',
          JSON.stringify([...bookmarkArray, url])
        );
      }
      return true;
    }
    return AsyncStorage.setItem('bookmarks', JSON.stringify([url]));
  });
  return {
    type: BOOKMARK,
    payload: url
  };
};

export const loadBookmarks = () => ({
  type: LOADED_BOOKMARKS,
  payload: AsyncStorage.getItem('bookmarks').then(bookmarks => {
    if (bookmarks) {
      return JSON.parse(bookmarks);
    }
    return [];
  })
});
