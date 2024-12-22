import { createAction } from "@ngrx/store"

export const increment=createAction(
    '[counter] increment count'
)

export const decrement=createAction(
    '[counter] decrement count'
)

export const reset=createAction(
    '[counter] reset count'
)