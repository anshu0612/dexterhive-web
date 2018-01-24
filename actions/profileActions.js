/**
 * Created by anshu on 24/07/17.
 */
import * as types from '../constants/ActionTypes';

export function addTodo(data) {
    return { type: types.ADD_EXPERIENCE, data };
}