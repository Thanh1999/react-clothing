import { all, call } from "@redux-saga/core/effects"
import { fetchCollectionStart } from "./shop/shop.sagas"
import { userSagas } from "./user/user.saga"

export default function* (){
    yield all([
        call(fetchCollectionStart),
        call(userSagas)
    ])
}