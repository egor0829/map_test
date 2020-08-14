import { getCookie, getJSONP } from "../utils/utils";

import * as userActions from "../redux/userReducer";

interface IUserResponse {
  UserId: number,
  UserName: string,
  UserLogin: string,
  UserEmail: string,
  DomainName: string,
  IP: string,
}

const authService = () => {
  return async (dispatch) => {
    // Получаем информацию пользователя из куки
    const currentUser = getCookie("currentUser");

    // Если же куков нет,
    if (!currentUser) {
      dispatch(userActions.toggleLoading());

      // // то запрашиваем информацию о пользователе
      // const data = await getJSONP<IUser>('https://xn--80awhdgm.xn--d1aqf.xn--p1ai/api/user_info.php?callback=?');
      
      // const res = await fetch('/auth', {
      //     method: 'GET'
      // });
      // if (!res.ok) {
      //   dispatch(userActions.setError(res.statusText));
      // }

      const data = {
        UserId: 70619,
        UserName: "Егор Григорьев",
        UserLogin: "E.Grigorev",
        UserEmail: "Egor.Grigorev@domrf.ru",
        DomainName: "AHML1",
        IP: "10.60.1.17",
      };

      // и записываем в куки
      document.cookie = `currentUser=${data.UserEmail}`;
      dispatch(userActions.setData(data.UserEmail));
    } else {
      dispatch(userActions.setData(currentUser));
    }
  };
};

export default authService;
