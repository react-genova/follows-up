import { createSelector } from 'reselect';

let getSettingsRoot = state => state;

export const setSettingsRoot = (getter) => {
    getSettingsRoot = getter;
};

const getSettings = state => getSettingsRoot(state);

const getPlayer1 = createSelector([getSettings], settings => settings.get('player1'));

const getPlayer2 = createSelector([getSettings], settings => settings.get('player2'));

const getOptions = createSelector([getSettings], settings => settings.get('options'));

export const getPlayer1Name = createSelector([getPlayer1], player1 => player1.get('name'));

export const getPlayer1Symbol = createSelector([getPlayer1], player1 => player1.get('symbol'));

export const getPlayer1Ready = createSelector([getPlayer1], player1 => player1.get('ready'));

export const getPlayer1Type = createSelector([getPlayer1], player1 => player1.get('type'));

export const getPlayer2Name = createSelector([getPlayer2], player2 => player2.get('name'));

export const getPlayer2Symbol = createSelector([getPlayer2], player2 => player2.get('symbol'));

export const getPlayer2Ready = createSelector([getPlayer2], player2 => player2.get('ready'));

export const getPlayer2Type = createSelector([getPlayer2], player2 => player2.get('type'));

export const getAutoplay = createSelector([getOptions], options => options.get('autoplay'));

export const getBotSpeed = createSelector([getOptions], options => options.get('botSpeed'));
