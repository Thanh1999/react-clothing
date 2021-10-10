import { all, call, takeLatest, put } from 'redux-saga/effects';
import { Item } from '../../model/Item';
import { CartService } from '../../services';
import { ReduxAction } from '../action';
import { UserActionTypes } from '../user/user.types';
import { clearCart, fetchCartStart, fetchCartSuccess } from './cart.action';
import { CartActionTypes } from './cart.types';
import { convertFromJsonItem } from './cart.utils';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

type UserCart = {
  items: Array<any>
}

export function* fetchCart() {
  const cart: UserCart = yield CartService.getUserCart();
  const items: Array<Item> = yield convertFromJsonItem(cart.items);
  yield put(fetchCartSuccess(items));
}

export function* signInSuccess() {
  yield put(fetchCartStart());
  yield fetchCart();
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, signInSuccess);
}

export function* addItem(action: ReduxAction) {
  yield put(fetchCartStart());
  yield CartService.addItemToCart(action.payload.id);
  yield fetchCart();
}

export function* subtractItem(action: ReduxAction) {
  yield put(fetchCartStart());
  yield CartService.updateItemToCart(action.payload.id, --action.payload.quantity);
  yield fetchCart();
}

export function* removeItem(action: ReduxAction) {
  yield put(fetchCartStart());
  yield CartService.deleteItemFromCart(action.payload);
  yield fetchCart();
}

export function* onAddItem() {
  yield takeLatest(CartActionTypes.ADD_ITEM, addItem);
}

export function* onSubtractItem() {
  yield takeLatest(CartActionTypes.SUBTRACT_ITEM, subtractItem);
}

export function* onRemoveItem() {
  yield takeLatest(CartActionTypes.REMOVE_ITEM, removeItem);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess),
  call(onSignInSuccess),
  call(onAddItem),
  call(onSubtractItem),
  call(onRemoveItem)
  ]);
}
