import { Observable } from 'rxjs';
import { changeChatStatus, CHAT_STATUS_CONNECTED, CONNECT_CHAT, DISCONNECT_CHAT, getChatUser } from '../chat';
import { addMessage, SEND_MESSAGE } from '../messages';

const socket$ = Observable.webSocket(
    "ws://localhost:11235"
);

const webSockectConnectionEpic = (action$, {getState}) =>
    action$.ofType(CONNECT_CHAT)
        .switchMap(action =>
            socket$
                .map(payload => {
                    console.log("RECEIVED MESSAGE:", JSON.parse(payload))
                    return addMessage(JSON.parse(payload))
                })
                .takeUntil(action$.ofType(DISCONNECT_CHAT))
        )
        .map(a => {
            console.log("^^^^^^^^^^^^^^^^", a)
            return a;
        })
        /*.mergeMap(action => {
            console.log("MAP TO", action)
            return changeChatStatus(CHAT_STATUS_CONNECTED, getChatUser(getState()))
        })*/

const webSockectMessageEpic = (action$, store) =>
    action$.ofType(SEND_MESSAGE)
        .mergeMap(action => {
            console.log("THE OTHER ONE1", action)
            const mess = {
                ...action.payload,
                date: new Date().getTime()
            };
            socket$.next(JSON.stringify(mess))
            console.log("THE OTHER ONE2", mess)
            return socket$;
        })
        .map(a => ({ type: 'NULL' }))

export { webSockectConnectionEpic, webSockectMessageEpic };