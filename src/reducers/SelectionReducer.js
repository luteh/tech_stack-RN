/**
 * Created by Luteh on 13/06/2017.
 */
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
}