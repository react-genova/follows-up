import { Observable } from 'rxjs';
import { changeChatStatus, CHAT_STATUS_CONNECTED, CONNECT_CHAT, DISCONNECT_CHAT, getChatUser } from '../chat';
import { addMessage, SEND_MESSAGE } from '../messages';

const socket$ = Observable.webSocket(
    "ws://localhost:11235"
);

const webSockectMessageEpic = (action$, {getState}) =>
    action$
        .ofType(CONNECT_CHAT)
        .switchMap(() => 
            socket$
                .map(payload => addMessage(JSON.parse(payload)))
                .takeUntil(action$.ofType(DISCONNECT_CHAT))
                .startWith(changeChatStatus(CHAT_STATUS_CONNECTED, getChatUser(getState())))
                .merge(
                    action$
                        .ofType(SEND_MESSAGE)
                        .mergeMap(action => {
                            const mess = { ...action.payload, date: new Date().getTime() };
                            socket$.next(JSON.stringify(mess))
                            return Observable.empty();
                        })
                )
        );

export default webSockectMessageEpic;