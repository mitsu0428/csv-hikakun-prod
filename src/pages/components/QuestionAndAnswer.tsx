import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "../../styles/QuestionAndAnswer.module.css";

type Props = {
  title: string;
  children?: ReactNode;
};

export const Menu: FC<Props> = ({ title, children }) => {
  const childElement = useRef<HTMLDivElement>(null);
  const [showChildren, setshowChildren] = useState(false);
  const [childHeight, setChildHeight] = useState(0);

  useEffect(() => {
    if (childElement.current) {
      const height = childElement.current?.clientHeight;
      setChildHeight(height);
    }
  }, []);

  const handleClick = () => {
    if (childElement.current) {
      setshowChildren(!showChildren);
    }
  };

  return (
    <div className={styles.itemRoot}>
        <div className={styles.itemChild}>
            <h3 
              onClick={handleClick} 
              className={styles.item}>
                {title}
            </h3>
            <div
              className={styles.childItem}
              style={{
                height: children && showChildren ? `${childHeight}px` : "0px",
                opacity: children && showChildren ? 1 : 0,
              }}
            >
                <div
                  className={styles.item}
                  ref={childElement}>{children}
                </div>
            </div>
        </div>
    </div>
  );
};