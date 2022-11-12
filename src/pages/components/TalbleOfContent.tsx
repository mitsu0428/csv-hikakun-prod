/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const TableOfContents = ({ toc }: { toc: any }) => {
  return (
    <div>
      <p>目次</p>
      <ul>
        {toc?.map(
          (data: {
            id: Key | null | undefined;
            text:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => (
            <li key={data.id}>
              <a href={`#${data.text}`}>{data.text}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TableOfContents;
