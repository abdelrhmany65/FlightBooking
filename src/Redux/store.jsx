import BookingReducer from "./bookinkReducer";

import { createStore } from "redux";

const store = createStore(BookingReducer);

export default store;