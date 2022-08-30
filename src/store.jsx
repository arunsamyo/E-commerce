import {roootreducer} from "./Services/Reducers/Index";
import {legacy_createStore } from "redux";

export const store=legacy_createStore(
    roootreducer
);