import React, { useEffect, useState } from 'react';
import { Icon, Message } from 'semantic-ui-react';

import css from "src/lib/snackbar/snackbar.css";

const SemanticUiReactSnackbar: React.FC<{ variant: 'error' | 'info' | 'success'}> = ({ variant, children }) => {
  const { visible, setVisible } = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(false), 3000);
  }, [])

  return visible ? (
    <Message
      info={variant === "info"}
      error={variant === "error"}
      success={variant === "success"}
      className={css.message}
    >
      <Icon
        name={
          variant === "success"
            ? "check circle"
            : variant === "error"
            ? "times circle"
            : variant === "info"
            ? "info circle"
            : null
        }
      />
      <b>
        {variant === "success"
          ? "Hurray! "
          : variant === "error"
          ? "Oops! "
          : variant === "info"
          ? "Heads Up! "
          : null}
      </b>
      <span>{children}</span>
      <Icon
        name="times"
        style={{ float: "right", cursor: "pointer" }}
        onClick={() => setVisible(false)}
      />
    </Message>
  ) : null;
}

export default SemanticUiReactSnackbar;
