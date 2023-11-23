/* eslint-disable react/prop-types */
import styles from "./Tab.module.css";

export function Tab({ tabs, currentTab, onChange }) {
  return (
    <div className={styles["tabs"]}>
      {tabs.map((tab) => {
        return (
          <button
            key={tab.key}
            className={
              currentTab === tab.key
                ? styles["btn-active-style"]
                : styles["btn-not-active-style"]
            }
            onClick={() => onChange(tab.key)}
          >
            <span>{tab.title}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
export default Tab;
