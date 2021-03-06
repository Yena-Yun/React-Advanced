// 로그인 상태를 알기 위해 매번 쿠키를 체크하지 않고
// 로그인 상태를 리덕스에 저장해놓고 
// 어떤 컴포넌트에서든 편히 볼 수 있게 하기
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setCookie, getCookie, deleteCookie } from '../../shared/Cookie';


const LOG_IN = 'user/LOG_IN';
const LOG_OUT = 'user/LOG_OUT';
const GET_USER = 'user/GET_USER';

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const initialState = {
	user: null,
	is_login: false,
};

export default handleActions(
		{
			[LOG_IN]: (state, action) =>
					produce(state, (draft) => {
						setCookie("is_login", "success");
						draft.user = action.payload.user;
						draft.is_login = true;
					}),
			[LOG_OUT]: (state, action) =>
					produce(state, (draft) => {
						deleteCookie("is_login");
						draft.user = null;
						draft.is_login = false;
					}),
			[GET_USER]: (state, action) =>
					produce(state, (draft) => { }),
		},
		initialState,
);

const actionCreators = {
	logIn,
	logOut,
	getUser,
}

export { actionCreators };