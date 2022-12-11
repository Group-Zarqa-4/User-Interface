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
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

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
  const [newComment, setNewComment] = React.useState("");
  const [checkComments, setCheckComments] = React.useState(false);
  const auth_user_id = localStorage.getItem("user");
  const [comments, setComments] = React.useState();
  useEffect(() => {
    axios.get(`/api/comments/${props.post.post.id}`).then((res) => {
      setComments(res.data);
      console.log(res);
    });
  }, [checkComments]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleCommentClick(post_id, user_id, e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.append("post_id", post_id);
    data.append("user_id", user_id);
    data.append("content", newComment);
    axios
      .post("http://localhost:8000/api/storeComment", data)
      .then((res) => {
        setNewComment("");
        setCheckComments(!checkComments);

        Swal.fire("Review Submitted", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
      {console.log(props.post.post)}
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
            <Box
              onSubmit={(e) =>
                handleCommentClick(props.post.post.id, auth_user_id, e)
              }
              component="form">
              <TextField
                id="outlined-basic"
                label="Add Comment"
                variant="outlined"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                type="submit"
                className=" btn btn-primary p-3 ms-2 rounded"
                style={{ display: "inline" }}>
                Send
                <ArrowForwardIosIcon
                  style={{ color: "white", hover: "pointer" }}
                />
              </button>
            </Box>
          </Typography>
          {comments?.map((comment) => {
            console.log(comment);
            return (
              <>
                <Box className="d-flex p-2">
                  <Avatar
                    src={`${comment.image}`}
                    className=""
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe">
                    J
                  </Avatar>
                  <Typography className="p-2">{comment.name}</Typography>
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
