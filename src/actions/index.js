export const seleectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
