import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    BookPaper: {
        width: '230px',
        height: '275px',
        display: 'flex',
        flexDirection: 'column',
        marginRight: '30px',
        marginBottom: '20px',
        border: '1px solid #E2E2E2',
        borderRadius: '3px',
        opacity: '1',
    },

    BookImageContent: {
        width: '233px',
        height: '172px',
        background: '#00000029',
        background: '#F5F5F5 0% 0% no-repeat padding-box',
        borderRadius: '2px 2px 0px 0px',
        opacity: '1',
    },
    BookImage: {
        width: '50%',
        height: '82%',
        position: 'relative',
        top: '15px'
    },
    BookTextContent: {
        width: '100%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: '15px'
    },
    bookTitle: {
        font: 'normal normal normal 14px/19px Roboto',
        marginTop: '14px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#0A0102',
        letterSpacing: '0px',
    },
    bookAuthor: {
        fontSize: '10px',
        color: '#878787',
    },
    bookRatings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '14px',

    },
    bookRating: {
        display: 'flex',
        flexDirection: 'row',
        font: 'normal normal normal 10px/13px Roboto',
        color: '#FFFFFF',
        opacity: '1',
        width: '33px',
        height: '13px',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#388E3C 0% 0% no-repeat padding-box',
        paddingLeft: '2px',
    },
    bookQuantity: {
        font: 'normal normal normal 10px/13px Roboto',
        color: '#878787',
        width: '30px',
    },
    bookPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90px',
        height: '17px',
    },
    bookDiscountedPrice: {
        width: '48px',
        height: '16px',
        font: 'normal normal bold 12px/16px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
    },
    bookRegularPrice: {

        color: '#878787',
        width: '36px',
        height: '13px',
        font: 'normal normal normal 10px/13px Roboto',
        textDecorationLine: 'line-through',
    },
})



function BookCard(props) {

    const classes = useStyles()

    const navigate = useNavigate()
    const navigateBookDetails = () => {
        const bookId = props.books.bookID
        localStorage.setItem("bookId",JSON.stringify(bookId))
        //console.log("calling bookdetails", bookId)
        navigate("/bookdetails")
    }

    console.log("props", props.books.bookName)
    //console.log("props", props.books.bookID)
    return (

        <Paper elevation={2} className={classes.BookPaper}>
            <Box className={classes.BookImageContent}>
                <img onClick={navigateBookDetails} src="./imgDontThink.png" className={classes.BookImage} />
            </Box>
            <Box className={classes.BookTextContent}>
                <Box onClick={navigateBookDetails} className={classes.bookTitle}>
                {/* {console.log("calling bookdetails", props.books.bookId)} */}
                    {/* Don't Make Me Think */}
                    {props.books.bookName}
                </Box>
                <Box className={classes.bookAuthor}>

                    {/* by Steve Krug */}
                    {props.books.authorName}
                </Box>
                <Box className={classes.bookRatings}>
                    <Box className={classes.bookRating}>
                        4.5
                        <StarIcon sx={{ height: '8px', width: '8.5px' }} />
                    </Box>
                    <Box className={classes.bookQuantity}>
                        {/* (10) */}
                        (
                        {
                            props.books.bookQuantity
                        }
                        )
                    </Box>

                </Box>
                <Box className={classes.bookPrice}>
                    <Box className={classes.bookDiscountedPrice}>
                        Rs. {props.books.discountPrice}
                    </Box>
                    <Box className={classes.bookRegularPrice}>
                        {
                            <span>Rs. {props.books.originalPrice}</span>
                        }

                    </Box>

                </Box>

            </Box>
        </Paper>

    )
}

export default BookCard