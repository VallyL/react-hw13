import { connect } from "react-redux";
import UserItem from "../UserItem";
import styles from "../../components/UserList/styles.module.css";

const UserList = ({ users, filter }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.namesContainer}>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
