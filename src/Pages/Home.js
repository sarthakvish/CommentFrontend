import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Grid} from "@mui/material";
import BasicTable from "../Components/CommentTable";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createComment, getAllComments} from "../redux/actions/commentsActions";
import {toast} from "react-toastify";
import {COMMENT_CREATE_RESET, COMMENT_DELETE_RESET} from "../constants/Constant";
import 'react-toastify/dist/ReactToastify.css';




export default function Home() {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const commentCreate = useSelector((state) => state.commentCreate);
    const {
        error: errorCommentCreate,
        loading: loadingCommentCreate,
        success: successCommentCreate,
    } = commentCreate;

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = {
            comment: comment,
        };
        dispatch(createComment(formData))
        setComment("")
    }

    useEffect(() => {
        dispatch(getAllComments());
        if (successCommentCreate) {
            toast.success("Comment Created Successfully!", {
                autoClose: 2000,
            });
            dispatch(getAllComments());
            dispatch({ type: COMMENT_CREATE_RESET });
        }
    }, [dispatch, successCommentCreate]);
    return (
        <Box  sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1>Create New Comment</h1>
                    <form onSubmit={submitHandler}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Enter the comment"
                            value={comment}
                            multiline
                            rows={7}
                            defaultValue=""
                            fullWidth={true}
                            onChange={(event => setComment(event.target.value))}
                        />
                        <Button sx={{ m: 2 }} type={"submit"} variant="contained" color="success">
                            Submit
                        </Button>
                    </form>


                </Grid>
                <Grid item xs={6}>
                    <BasicTable/>

                </Grid>

            </Grid>
        </Box>


    );
}