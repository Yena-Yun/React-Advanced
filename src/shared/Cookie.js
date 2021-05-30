// 쿠키에 저장된 value를 가져오는 함수 (key값이 기준)
const getCookie = (name) => {

	//쿠키 값을 가져온다.
	//document.cookie = '; MY_COOKIE=here;'
	let value = "; " + document.cookie;

	//키 값(name)을 기준으로 파싱한다.
	//(split: ()안의 내용을 기준으로 나누어서 새로운 배열로 반환)
	let parts = value.split("; " + name + "=");
	//["; MY_COOKIE=", "here;"]

	//value를 반환한다.
	if (parts.length == 2) {
		//parts 배열의 마지막 값을 꺼내(pop) ';'로 나눈 후(split) => ["here", ";"]
		//첫 번째 값(key)을 반환(shift) (=> value만 반환됨)
		//(push(): 배열의 맨 뒤에 값 '추가', unshift(): 배열의 맨 앞에 값 '추가')
		return parts.pop().split(";").shift();
	}
};

// 쿠키에 key와 value, 만료일을 저장하는 함수 (exp= 5 : 5일 후 만료)
const setCookie = (name, value, exp= 5) => {
	//날짜 객체 생성
	let date = new Date();

	//Date 객체에 만료일 날짜 지정
	//getTime(): 1970년 1월 1일 0시 0분 0초부터 현재까지의 시간 (= 현재 시간(밀리초))
	//현재 시간 + 만료될 날짜까지의 일수(밀리초)
	date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
	
	//쿠키에 key, value, 만료일 저장
	//(만료일에는 date 객체를 문자열로 바꾸어 저장)
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

// 쿠키 삭제(key값이 기준) => 만료일을 예전일로 설정 
const deleteCookie = (name) => {
	document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

export { getCookie, setCookie, deleteCookie };
