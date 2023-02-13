import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
    });
  };
}
