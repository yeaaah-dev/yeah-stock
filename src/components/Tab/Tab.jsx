/* eslint-disable react/prop-types */
import styles from "./Tab.module.css";

export function Tab({ tabs, currentTab, onChange }) {
  return (
    <div className={styles["conteiner"]}>
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
              {tab.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Tab;
