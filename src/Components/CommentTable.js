// import * as React from 'react';
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteComment, getAllComments} from "../redux/actions/commentsActions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {COMMENT_DELETE_RESET} from "../constants/Constant";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {

    const dispatch = useDispatch();

    const getCommentsData = useSelector((state) => state.commentsReducer);
    console.log(getCommentsData, "203");

    const {commentsInfo,loading: loadingAllComments,error: errorAllComments} = getCommentsData;

    const commentDelete = useSelector((state) => state.commentDelete);
    const {loading: loadingDelete,error: errorDelete,success: successDelete} = commentDelete;

    const deleteHandler=(deleteId)=>{
        dispatch(deleteComment(deleteId));
    }

    useEffect(() => {
        dispatch(getAllComments());
        if (successDelete) {
            toast.success("Comment Deleted Successfully!", {
                autoClose: 2000,
            });
            dispatch(getAllComments());
            dispatch({ type: COMMENT_DELETE_RESET });
        }
    }, [dispatch, successDelete]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Comment</TableCell>
                        <TableCell >Created At</TableCell>
                        <TableCell >Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {commentsInfo.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.comment}
                            </TableCell>
                            <TableCell >{row.created}</TableCell>
                            <TableCell ><DeleteIcon color='error' onClick={() => {
                                deleteHandler(row.id);
                            }}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}