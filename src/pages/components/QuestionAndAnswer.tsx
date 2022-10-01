import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "../../styles/QuestionAndAnswer.module.css";

type Props = {
  title: string;
  withIcon?: boolean;
  children?: ReactNode;
};

export const Menu: FC<Props> = ({ title, withIcon, children }) => {
  const childElement = useRef<HTMLDivElement>(null);
  const [showChildren, setshowChildren] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const [reverseIcon, setReverseIcon] = useState(false);

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
    setReverseIcon(!reverseIcon);
  };

  return (
    <>
      <div onClick={handleClick} className={styles.item}>
        {title}
        {withIcon && (
          <div className={`${styles.icon} ${reverseIcon && styles.reverse}`}>
            <img
              style={{ height: 24, width: 24 }}
              src="images/expand_more.svg"
            />
          </div>
        )}
      </div>
      <div
        className={styles.childItem}
        style={{
          height: children && showChildren ? `${childHeight}px` : "0px",
          opacity: children && showChildren ? 1 : 0,
        }}
      >
        <div ref={childElement}>{children}</div>
      </div>
    </>
  );
};