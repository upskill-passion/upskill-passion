import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import { Parser } from "html-to-react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function BlogPost() {
  const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [postedBy, setPostedBy] = useState("student");
  const [minQualificaton, setMinQualification] = useState("");
  const [numberTags, setNumberTags] = useState(0);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
  }, [editorState]);

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (tagToDelete) => () => {
    const val = numberTags;
    setNumberTags(val - 1);
    setTags((tags) => tags.filter((tag) => tag.key !== tagToDelete.key));
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundImage: `url(${Image1})`,
            // height: "100vh",
            // width: "100%",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <div>
              <h1
                style={{
                  color: "#3B5998",
                  fontFamily: "'Alkatra', cursive",
                  fontWeight: "bolder",
                  fontSize: "30px",
                }}
              >
                Blog Post
              </h1>
            </div>
            <div style={{ marginTop: "5px" }}>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  marginTop: "8px",
                  marginBottom: "6px",
                  fontWeight: "bolder",
                }}
              >
                Title{" "}
              </p>
              <TextField
                style={{ width: "300px" }}
                id="outline-basic"
                size="small"
                label="Enter the title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                inputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  marginTop: "16px",
                  marginBottom: "6px",
                  fontWeight: "bolder",
                }}
              >
                Content{" "}
              </p>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                editorStyle={{ lineHeight: "10px" }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  marginBottom: "6px",
                  fontWeight: "bolder",
                  display: "inline-block",
                  marginRight: "20px",
                  marginTop: "8.5px",
                }}
              >
                Role{" "}
              </p>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={postedBy}
                  onChange={(e) => setPostedBy(e.target.value)}
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="organization"
                    control={<Radio />}
                    label="Organization"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div style={{ marginTop: "5px" }}>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  marginTop: "8px",
                  marginBottom: "6px",
                  fontWeight: "bolder",
                }}
              >
                Minimum Qulification{" "}
              </p>
              <TextField
                style={{ width: "300px" }}
                id="outline-basic"
                size="small"
                label="Minimum Qualification"
                value={minQualificaton}
                onChange={(e) => {
                  setMinQualification(e.target.value);
                }}
                inputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  marginTop: "8px",
                  marginBottom: "10px",
                  fontWeight: "bolder",
                }}
              >
                Tags{" "}
                {numberTags === 5 && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    Added all tags
                  </span>
                )}
                {numberTags < 5 && (
                  <span style={{ color: "green", fontSize: "14px" }}>
                    Can add {5 - numberTags} tags
                  </span>
                )}
              </p>
              <TextField
                style={{ width: "300px" }}
                id="outline-basic"
                size="small"
                label="Tags"
                value={currentTag}
                onChange={(e) => {
                  setCurrentTag(e.target.value);
                }}
                inputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (currentTag !== "") {
                      if (numberTags < 5) {
                        setTags([
                          ...tags,
                          { key: numberTags, label: currentTag },
                        ]);
                        const val = numberTags + 1;
                        setNumberTags(val);
                        setCurrentTag("");
                      }
                    }
                  }
                }}
              />
              <Paper
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                }}
                component="ul"
              >
                {tags.map((data) => {
                  return (
                    <ListItem key={data.key}>
                      <Chip label={data.label} onDelete={handleDelete(data)} />
                    </ListItem>
                  );
                })}
              </Paper>
            </div>
          </div>
        </div>
        <div>
          <Button
            style={{
              marginLeft: "18px",
              marginTop: "10px",
              backgroundColor: "#3B5998",
              marginBottom: "25px",
            }}
            variant="contained"
          >
            Post
          </Button>
        </div>
      </div>
    </>
  );
}
