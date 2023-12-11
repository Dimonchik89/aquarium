import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.fish;

export const maxWidth = createSelector(baseState, state => state.maxWidth);
export const maxHeight = createSelector(baseState, state => state.maxHeight);