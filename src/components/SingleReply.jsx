import { useState } from "react";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import ReplyThread2 from "./ReplyThread2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SingleReply({
  answer,
  vote,
  laterSaved,
  upvotes,
  replyToReplies,
}) {
  const [upvoted, setUpvoted] = useState(vote);
  const [complete, showComplete] = useState(false);
  const [bookmarked, setBookMarked] = useState(laterSaved ? true : false);
  const [comments, setComments] = useState(false);
  const [addComment, setAddComment] = useState(false);

  return (
    <div>
      <div>
        <p
          style={{ marginTop: "10px", fontSize: "14px", marginBottom: "10px" }}
        >
          {answer.length >= 100 && !complete
            ? answer.substr(0, 100) + "..."
            : answer}
          <span
            style={{
              cursor: "pointer",
              marginLeft: "1000px",
              fontSize: "14px",
            }}
            onClick={() => showComplete(!complete)}
          >
            {answer.length >= 100 && complete
              ? "(show less)"
              : answer.length >= 100 && !complete
              ? "(show more)"
              : ""}
          </span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "4px",
          flexDirection: "row",
        }}
      >
        <span>
          {
            <div>
              <BiUpvote
                style={{
                  fontSize: "16px",
                  marginTop: "7px",
                  cursor: "pointer",
                }}
                fill={upvoted === "up" ? "green" : ""}
                onClick={() => {
                  if (upvoted !== "up") setUpvoted("up");
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  marginLeft: "5px",
                }}
              >
                {upvotes}
              </span>
            </div>
          }
        </span>
        <span>
          {
            <div>
              <BiDownvote
                style={{
                  fontSize: "16px",
                  marginTop: "8px",
                  cursor: "pointer",
                  marginLeft: "20px",
                }}
                fill={upvoted === "down" ? "red" : ""}
                onClick={() => {
                  if (upvoted !== "down") setUpvoted("down");
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  marginLeft: "5px",
                }}
              >
                {upvotes}
              </span>
            </div>
          }
        </span>
        <span>
          {
            <BsFillBookmarkFill
              style={{
                fontSize: "14px",
                marginTop: "9px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              color={bookmarked ? "#3B5998" : ""}
              onClick={() => setBookMarked(!bookmarked)}
            />
          }
        </span>
      </div>
      {comments && (
        <div style={{ marginTop: "10px" }}>
          <ReplyThread2 replies={replyToReplies} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5px",
        }}
      >
        <p>
          <span
            style={{
              fontSize: "12px",
              marginTop: "5px",
              color: "black",
              cursor: "pointer",
              textDecoration: "underline",
              marginRight: "10px",
            }}
            onClick={() => {
              // clickAnswer(!answer);
              setComments(!comments);
            }}
          >
            {comments ? "hide comments" : "show comments"}
          </span>
        </p>

        <p>
          <span
            style={{
              fontSize: "12px",
              marginTop: "5px",
              color: "black",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              // setAllReplies(!allReplies);
              setAddComment(!addComment);
            }}
          >
            {addComment ? "cancel" : "add comment"}
          </span>
        </p>
      </div>
      {addComment && (
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <TextField
            id="outline-basic"
            label="Enter your comment here"
            variant="outlined"
            style={{ width: "94%", borderRadius: "50px !important" }}
            size="small"
            inputProps={{
              style: {
                borderRadius: "50px",
              },
            }}
          />
        </div>
      )}
      {addComment && (
        <Button variant="contained" style={{ marginBottom: "10px" }}>
          Post
        </Button>
      )}
    </div>
  );
}
