/**
 * Created by Luteh on 13/06/2017.
 */
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};