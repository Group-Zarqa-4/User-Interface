import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [userdata, setUserData] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [newComment, setNewComment] = React.useState("");
  console.log(props.post);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleCommentClick(id) {
    // axios.post("http://localhost:8000/api/storeComment");
  }
  //   console.log(newComment);
  return (
    <Card className="text-break" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            src={`${props.post.post.user.image}`}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.post.user.name}
        subheader={props.post.post.date}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.post.post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography style={{ cursor: "pointer" }} onClick={handleExpandClick}>
          Comments
        </Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Add new Comments:</Typography>
          <Typography paragraph>
            <TextField
              id="outlined-basic"
              label="Add Comment"
              variant="outlined"
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={(e) => handleCommentClick(props.post.post.id)}
              className=" btn btn-primary p-3 ms-2 rounded"
              style={{ display: "inline" }}>
              Send
              <ArrowForwardIosIcon
                style={{ color: "white", hover: "pointer" }}
              />
            </button>
          </Typography>
          {props?.post.post.comments.map((comment) => {
            return (
              <>
                <Box className="d-flex p-2">
                  <Avatar
                    src={`${comment.comment_by.image}`}
                    className=""
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe">
                    J
                  </Avatar>
                  <Typography className="p-2">
                    {comment.comment_by.name}
                  </Typography>
                </Box>
                <Typography
                  className="text-break p-2 rounded"
                  paragraph
                  style={{ backgroundColor: "#E8EDEF" }}>
                  {comment.content}
                  <Typography
                    style={{
                      color: "grey",
                      fontStyle: "italic",
                      fontSize: "12px",
                    }}>
                    {comment.date}
                  </Typography>
                </Typography>
              </>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
