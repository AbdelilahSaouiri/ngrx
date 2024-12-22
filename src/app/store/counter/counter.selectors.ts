import { createSelector } from "@ngrx/store"
import { counterModel } from "./counter.model"

interface appstate{
    counter:counterModel
}

export const trackCounter=(state:appstate)=>state.counter

export const selectCount=createSelector(trackCounter,(state)=>state.count)