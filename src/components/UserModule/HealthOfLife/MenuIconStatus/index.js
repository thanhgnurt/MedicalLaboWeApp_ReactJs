import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { IconButton} from "@material-ui/core";

import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

function MenuIconStatus(props) {
  return (
    <div>
      <IconButton aria-label="add to favorites">
        <FavoriteBorderOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="share">
        <ModeCommentOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="share">
        <ShareOutlinedIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
export default withStyles(styles)(MenuIconStatus);
