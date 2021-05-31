// 스토어 만들기
//1. combineReducers(): export한 reducers = rootReducer 생성
//2. middleware 적용
//3. createStore(): rootReducer + middleware = store 생성

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";


//스토어에 히스토리 넣기
export const history = createBrowserHistory();

//만든 리듀서들을 모아서 루트리듀서 만들기
const rootReducer = combineReducers({
	user: User,
	router: connectRouter(history),
});

//미들웨어 준비
//const middlewares = [thunk];
//thunk에 더해서 history를 추가 인자로 넣음
const middlewares = [thunk.withExtraArgument({ history: history })];

//지금이 어떤 환경인지 알려줌 (개발환경인지, 배포환경인지, ...)
const env = process.env.NODE_ENV;

//개발환경일 경우 로거 사용하는 코드
//logger: 로그를 기록할 때 사용하는 라이브러리 (근데 개발자도구를 더 많이 쓰긴 함)
if (env === "development") {
	// require는 Node.js 문법, React의 import와 동일
	// 아래 코드 뜻: 'redux-logger에서 logger 라이브러리를 임포트한 후
	const { logger } = require("redux-logger");
	// 미들웨어에 logger 추가'
	middlewares.push(logger);
}

//크롬 확장 프로그램, redux devTools 사용 설정
const composeEnhancers =
	// window의 타입이 "객체(object)"이고
	// window에 redux_devTools 확장 프로그램이 있다면
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		// window의 redux_devTools 확장 프로그램 실행 
		// ({} 안에는 확장 프로그램의 옵션 넣기)
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension's options like name, actionsBlacklist, actionsCreators, serialize, ...
		})
		// window의 타입이 객체가 아니거나 확장 프로그램이 없다면
		// redux에서 임포트한 compose 실행
		: compose;

//미들웨어 묶기 (enhancer 생성)
const enhancer = composeEnhancers(
	//위에서 만든 middlewares를 redux에서 임포트한 applyMiddleware에 넣어줌
	applyMiddleware(...middlewares)
);

//스토어 생성 
// => initialStore(기존에 이미 있던 store)를 인자로 받고(재료로 해서)
//		createStore로 위에서 만든 rootReducer와 middleware(enhancer)를 합침
let store = (initialStore) => createStore(rootReducer, enhancer);

// 만든 스토어 내보내기 (주의: store에 반드시 '()')
export default store();