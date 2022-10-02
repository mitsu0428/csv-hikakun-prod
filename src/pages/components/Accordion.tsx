import React from 'react'
import {useEffect} from "react";
import styles from '../../styles/QuestionAndAnswer.module.css'

function Accordion() {
  useEffect(() => {
    const triggers = document.querySelectorAll(".accordiontrigger");
    triggers.forEach((trigger) => {
      const controls: any = trigger.getAttribute("aria-controls");
      const panel: any = document.getElementById(controls);
  
      trigger.addEventListener("click", (e) => {
        const target: any = e.currentTarget;
        const isOpen: Boolean = target.getAttribute("aria-expanded") === "true";
  
        if (isOpen) {
          // アコーディオンを閉じる
          target.setAttribute("aria-expanded", "false");
          panel.classList.add("__close");
        } else {
          // アコーディオンを開く
          target.setAttribute("aria-expanded", "true");
          panel.classList.remove("__close");
        }
      });
  }, []);
});
  return (
    <div>
      <h1 className={styles.title}>
        よくある質問
      </h1>
      <div className={styles.accordion}>
        <h2 className={styles.accordionheader}>
          <button className={styles.accordiontrigger} aria-expanded="false" aria-controls="accordion-panel-1">
            CSVとは??<span className={styles.accordionicon}></span>
          </button>
        </h2>
        <div id="accordion-panel-1" className={styles.accordionpanel__close}>
          <p className={styles.accordionpanel__text}>
            comma separated valuesファイルです。カンマによって値が分けられているものを指します。
          </p>
        </div>
        <h2 className={styles.accordionheader}>
          <button className={styles.accordiontrigger} aria-expanded="false" aria-controls="accordion-panel-2">
          CSVの行だけの差分を調べたい。<span className={styles.accordionicon}></span>
          </button>
        </h2>
        <div id="accordion-panel-2" className={styles.accordionpanel__close}>
          <p className={styles.accordionpanel__text}>
            比較したいCSVを二つ選択し、行だけを比較するを押下することで比較することができます。
          </p>
        </div>
        <h2 className={styles.accordionheader}>
          <button className={styles.accordiontrigger} aria-expanded="false" aria-controls="accordion-panel-3">
            CSVの値だけの差分を調べたい。<span className={styles.accordionicon}></span>
          </button>
        </h2>
        <div id="accordion-panel-3" className={styles.accordionpanel__close}>
          <p className={styles.accordionpanel__text}>
            比較したいCSVを二つ選択し、値だけを比較するを押下することで比較することができます。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion