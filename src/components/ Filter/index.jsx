import { connect } from "react-redux";
import { setFilter } from "../../redux/ actions";
import styles from "../../components/ Filter/styles.module.css";

const Filter = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.filterInput}
        type="text"
        placeholder="Filter by name ..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
