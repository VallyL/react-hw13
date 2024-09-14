import styles from "../../components/UserItem/styles.module.css";

const UserItem = ({ user }) => {
  return (
    <div>
      <li className={styles.userItem}>{user.name}</li>
      <hr className={styles.line}></hr>
    </div>
  );
};

export default UserItem;
