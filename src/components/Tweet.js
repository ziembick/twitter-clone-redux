import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons";

const Tweet = (props) => {
  const toParent = (e, id) => {
    e.preventDefault();

    // TODO: Redirect to parent Tweet
  };

  if (props.tweet === null) {
    return <p>This Tweet doesn't exist</p>;
  }

  const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } =
    props.tweet;

  return (
    <div className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <span>{name}</span>
        <div>{formatDate(timestamp)}</div>
        {parent && (
          <button
            className="replying-to"
            onClick={(e) => toParent(e, parent.id)}
          >
            Replying to @{parent.author}
          </button>
        )}
        <p>{text}</p>
      </div>
    </div>
  );
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
