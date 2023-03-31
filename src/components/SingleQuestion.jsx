import { useState, useEffect } from "react";
import SingleReply from "./SingleReply";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "@mui/material/Button";
import useQuery from "../hooks/useQuery";

export default function SingleQuestion({ ind, question }) {
  const [allReplies, setAllReplies] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [answer, clickAnswer] = useState(false);
  const [convertedContent, setConvertedContent] = useState(null);
  const { query } = useQuery();

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  return (
    <>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#3B5998",
            padding: "5px",
            borderRadius: "25px",
            display:
              query !== "" && !question.question.includes(query) ? "none" : "",
          }}
        >
          {query === "" && (
            <p
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                color: "white",
              }}
            >
              {question.question}
            </p>
          )}
          {query !== "" && (
            <p
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                color: "white",
              }}
            >
              <span>
                {question.question.substr(0, question.question.indexOf(query))}
              </span>
              <span style={{ color: "black" }}>
                {question.question.substr(
                  question.question.indexOf(query),
                  query.length
                )}
              </span>
              <span>
                {question.question.substr(
                  question.question.indexOf(query) + query.length
                )}
              </span>
            </p>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {question.replies.map((key, index) => {
            return (
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  backgroundColor: "#EBECF0",
                  padding: "10px",
                  borderRadius: "5px",
                  display:
                    query === "" && ((index === 0 && !allReplies) || allReplies)
                      ? ""
                      : query !== "" && !question.question.includes(query)
                      ? "none"
                      : query !== "" && question.question.includes(query)
                      ? ""
                      : "none",
                }}
                key={index}
              >
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "14px",
                    color: "#3B5998",
                  }}
                >
                  {key.name}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    marginTop: "2px",
                    fontWeight: "bold",
                  }}
                >
                  {key.designation}
                </p>
                <SingleReply
                  answer={key.answer}
                  bookMark={key.bookMark}
                  vote={key.vote}
                  laterSaved={key.laterSaved}
                  upvotes={key.upvotes}
                  replyToReplies={key.replyToReplies}
                />
              </div>
            );
          })}
          {answer && (
            <div style={{ marginLeft: "10px" }}>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
          )}
          <div
            style={{ marginLeft: "20px", marginTop: "5px", display: "flex" }}
          >
            <p>
              <span
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  color: "#3B5998",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginRight: "10px",
                  display:
                    query !== "" && !question.question.includes(query)
                      ? "none"
                      : "",
                }}
                onClick={() => {
                  clickAnswer(!answer);
                }}
              >
                {answer ? "cancel" : "add answer"}
              </span>
              {answer && (
                // <button
                //   style={{
                //     display: "block",
                //     padding: "5px",
                //     marginTop: "10px",
                //     backgroundColor: "green",
                //     borderRadius: "5%",
                //     color: "white",
                //   }}
                //   color="white"
                // >
                //   Save
                // </button>
                <Button
                  style={{
                    display: "block",
                    marginTop: "10px",
                    backgroundColor: "green",
                  }}
                  variant="contained"
                >
                  Save
                </Button>
              )}
            </p>
            {query === "" && (
              <p>
                <span
                  style={{
                    fontSize: "12px",
                    marginTop: "5px",
                    color: "#3B5998",
                    cursor: "pointer",
                    textDecoration: "underline",
                    display:
                      query !== "" && !question.question.includes(query)
                        ? "none"
                        : "",
                  }}
                  onClick={() => {
                    setAllReplies(!allReplies);
                  }}
                >
                  {allReplies ? "hide replies" : "show all replies"}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
