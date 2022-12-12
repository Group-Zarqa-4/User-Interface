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
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

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
  const auth_user_id = localStorage.getItem("userId");
  const [comments, setComments] = React.useState();
  const [editComment, setEditComment] = React.useState(false);

  useEffect(() => {
    axios
      .get(`/api/comments/${props.post.post.id}`)
      .then((res) => {
        setComments(res.data.comments);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [checkComments]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(editComment);

  function handleSubmit(event, id) {
    event.preventDefault();
    console.log(id);
    const data = new FormData(event.currentTarget);

    data.append("content", editComment);
    data.append("id", id);

    // console.log(data.get("role"));
    // console.log(data.get("is_premium"));

    axios
      .post(`http://localhost:8000/api/updateComment/${id}`, data)
      .then((res) => {
        Swal.fire("comment updated", "success");

        setTimeout(() => {
          window.location.reload(false);
        }, 1000);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
    <Card
      style={{ minWidth: "50rem" }}
      className="text-break"
      sx={{ maxWidth: 345 }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={`${props.post.post.user.image}`}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.post.user.name}
        subheader={format(new Date(props.post.post.date), "dd/mm/yyyy hh:mm a")}
      />
      {/* {console.log(props.post.post)} */}
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
          aria-label="show more"
        >
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
              component="form"
            >
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
                style={{ display: "inline" }}
              >
                Send
                <ArrowForwardIosIcon
                  style={{ color: "white", hover: "pointer" }}
                />
              </button>
            </Box>
          </Typography>
          {comments?.map((comment) => {
            return (
              <>
                {props.post.post.id == comment.post_id ? (
                  <>
                    <Box className="d-flex justify-content-between p-2">
                      <div className="d-flex">
                        <Avatar
                          src={`${comment.user.image}`}
                          className=""
                          sx={{ bgcolor: red[500] }}
                          aria-label="recipe"
                        >
                          J
                        </Avatar>
                        <Typography className="p-2">
                          {comment.user.name}
                        </Typography>
                      </div>
                      {comment.user.id == auth_user_id ? (
                        <Link
                          type="button"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          className="btn btn-info text-white text-decoration-nsone m-1"
                          data-bs-toggle="modal"
                          data-bs-target={`#exampleModal${comment.id}`}
                        >
                          <p
                            style={{
                              marginBottom: "-4rem",
                            }}
                            className="text-primary "
                          >
                            Edit
                          </p>
                        </Link>
                      ) : (
                        ""
                      )}
                    </Box>
                    <Typography
                      className="text-break p-2 rounded"
                      paragraph
                      style={{ backgroundColor: "#E8EDEF" }}
                    >
                      {comment.content}
                      {comment.user.id == auth_user_id ? (
                        <>
                          <div
                            className="modal fade"
                            id={`exampleModal${comment.id}`}
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <Box
                              component="form"
                              noValidate
                              onSubmit={(event) =>
                                handleSubmit(event, comment.id)
                              }
                              sx={{ mt: 3 }}
                            >
                              <div className="modal-dialog">
                                <div className="modal-content p-5">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Edit User info
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    {/* <form onSubmit={handleSubmit}> */}
                                    <div className="mb-3">
                                      <div class="form-floating">
                                        <textarea
                                          onChange={(e) =>
                                            setEditComment(e.target.value)
                                          }
                                          class="form-control"
                                          name="commentupdate"
                                          placeholder="Leave a comment here"
                                          id="floatingTextarea2"
                                          style={{
                                            height: "100px",
                                          }}
                                        >
                                          {comment.content}
                                        </textarea>
                                        <label for="floatingTextarea2">
                                          Comments
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary publishTourBtn"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-primary publishTourBtn"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <Typography
                        style={{
                          color: "grey",
                          fontStyle: "italic",
                          fontSize: "12px",
                        }}
                      >
                        {format(
                          new Date(comment.created_at),
                          "dd/mm/yyyy hh:mm a"
                        )}
                      </Typography>
                    </Typography>
                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
