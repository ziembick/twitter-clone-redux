import { connect } from "react-redux";

const Dashboard = (props) => {
    console.log(props)
  return <div>Dashboard</div>;
};

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => (tweets[b].timestamp = tweets[a].timestamp)
  ),
});

export default connect(mapStateToProps)(Dashboard);
