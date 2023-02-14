import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons";

const Tweet = (props) => {
  if (props.tweet === null) {
    return <p>This Tweet doesn't exist</p>;
  }

  const { name, avatar, timestamp, text, hasLiked, likes, replies, parents } =
    props.tweet;

  return <div className="tweet">
    <img src={avatar} alt={`Avatar of ${name}`} className="avatar"/>
  </div>;
};

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);
