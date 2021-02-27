import React, { useState } from "react";
import Title from "../Course/CourseCard/Component/Title";
import Topic from "../Course/CourseCard/Component/Topic";
import Header from "../Header/Header";
import Avatar from "../Course/CourseCard/Component/avatar";
import Output from "./Component/Output";
import "./IDP.css";
import CourseData from "../Course/CourseData/CourseData";
import CardOnline from "../Course/CourseCard/CardOnline";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "./Component/Input";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

import { CCallout } from '@coreui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AnnualCourse(props) {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        console.log(id);
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                className={className}
                style={{ width: "50px", height: "50px",right: "-10px",top:'530px'}}
                onClick={onClick}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3My42NTQgNDczLjY1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMjM2LjgyNyIgY3k9IjIzNi44MjciIHI9IjIzNi44MjciIGZpbGw9IiM0YWJjOTYiIGRhdGEtb3JpZ2luYWw9IiM0YWJjOTYiIGNsYXNzPSIiPjwvY2lyY2xlPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0zNTguMDc1LDIxNi4wOTFjLTI3LjAxMS0yNy4wMTEtNTQuMDE4LTU0LjAyMi04MS4wMjktODEuMDMzICBjLTI1LjU2LTI1LjU2NC02NS4wOCwxNC4yNTktMzkuNDU2LDM5Ljg4M2MxMS4wMDksMTEuMDA5LDIyLjAxOSwyMi4wMTksMzMuMDI4LDMzLjAzMmMtNDMuMzUzLDAtODYuNzA2LDAtMTMwLjA1NSwwICBjLTM2LjIyNSwwLTM2LjU0Myw1Ni4xMDktMC40MDQsNTYuMTA5YzQzLjQ5MSwwLDg2Ljk4MiwwLDEzMC40NywwYy0xMS4wODQsMTEuMDg0LTIyLjE2OCwyMi4xNjgtMzMuMjUyLDMzLjI1MiAgYy0yNS41NjQsMjUuNTYsMTQuMjU5LDY1LjA4LDM5Ljg4MywzOS40NTZjMjcuMDExLTI3LjAwNyw1NC4wMTgtNTQuMDE0LDgxLjAyOS04MS4wMjUgIEMzNjkuMTMzLDI0NC45MTYsMzY4LjgzOCwyMjYuODUsMzU4LjA3NSwyMTYuMDkxeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                className={className}
                style={{
                    width: "50px",
                    height: "50px",
                    transform: "rotate(180deg)",
                    left: "20px",
                    top:"505px"         
                }}
                onClick={onClick}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3My42NTQgNDczLjY1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMjM2LjgyNyIgY3k9IjIzNi44MjciIHI9IjIzNi44MjciIGZpbGw9IiM0YWJjOTYiIGRhdGEtb3JpZ2luYWw9IiM0YWJjOTYiIGNsYXNzPSIiPjwvY2lyY2xlPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0zNTguMDc1LDIxNi4wOTFjLTI3LjAxMS0yNy4wMTEtNTQuMDE4LTU0LjAyMi04MS4wMjktODEuMDMzICBjLTI1LjU2LTI1LjU2NC02NS4wOCwxNC4yNTktMzkuNDU2LDM5Ljg4M2MxMS4wMDksMTEuMDA5LDIyLjAxOSwyMi4wMTksMzMuMDI4LDMzLjAzMmMtNDMuMzUzLDAtODYuNzA2LDAtMTMwLjA1NSwwICBjLTM2LjIyNSwwLTM2LjU0Myw1Ni4xMDktMC40MDQsNTYuMTA5YzQzLjQ5MSwwLDg2Ljk4MiwwLDEzMC40NywwYy0xMS4wODQsMTEuMDg0LTIyLjE2OCwyMi4xNjgtMzMuMjUyLDMzLjI1MiAgYy0yNS41NjQsMjUuNTYsMTQuMjU5LDY1LjA4LDM5Ljg4MywzOS40NTZjMjcuMDExLTI3LjAwNyw1NC4wMTgtNTQuMDE0LDgxLjAyOS04MS4wMjUgIEMzNjkuMTMzLDI0NC45MTYsMzY4LjgzOCwyMjYuODUsMzU4LjA3NSwyMTYuMDkxeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Header bgColor='#63B995' />
            <div className="topicBackground" style={{ backgroundColor: '#63B995' }}>
                <div className="container-xl" style={{ paddingBottom: "20px" }}>
                    <div
                        className="titleBox"
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: "0px",
                            width: "100%",
                        }}
                    >
                        <img
                            style={{
                                width: "30px",
                                height: "30px",
                                display: "inline",
                                position: "relative",
                                top: "-7px",
                            }}
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                        />
                        <Title
                            name="Annual Course Plan"
                            color="white"
                            display="inline"
                            marginLeft="2%"
                            marginRight="2%"
                        />
                        <img
                            style={{
                                width: "30px",
                                height: "30px",
                                display: "inline",
                                position: "relative",
                                top: "-7px",
                            }}
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                        />
                    </div>
                </div>
            </div>

            <div className="lightGreen">
                <div className="container-box IDPBox">       
                    <CCallout color="success" style={{ marginBottom: '0px', marginTop: '0px', marginLeft: '4%' }}>
                        <h3 style={{ color: 'black',fontWeight:'400',"font-family": "Kanit, sans-serif"}}>Mandatory</h3>
                    </CCallout>                 

                    <Slider {...settings} style={{marginBottom:'100px'}}>
                        {CourseData.filter((id) => id.courseType === "online").map(
                            (courseItem) => (
                                <div>
                                    <center>
                                        <CardOnline
                                            id={courseItem.id}
                                            key={courseItem.id}
                                            coursename={courseItem.title}
                                            category1={courseItem.category1}
                                            category2={courseItem.category2}
                                            people={courseItem.people}
                                            time={courseItem.time}
                                            rating={courseItem.rating}
                                            teacher={courseItem.teacher}
                                            img={courseItem.img}
                                            hot={courseItem.hot}
                                        />
                                    </center>
                                </div>
                            )
                        )}
                    </Slider>

                    <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%'}}>
                        <h3 style={{ color: 'black',fontWeight:'400',"font-family": "Kanit, sans-serif" }}>Annual Learning Plan</h3>
                    </CCallout>                 

                    <Slider {...settings} style={{marginBottom:'100px'}}>
                        {CourseData.filter((id) => id.courseType === "online").map(
                            (courseItem) => (
                                <div>
                                    <center>
                                        <CardOnline
                                            id={courseItem.id}
                                            key={courseItem.id}
                                            coursename={courseItem.title}
                                            category1={courseItem.category1}
                                            category2={courseItem.category2}
                                            people={courseItem.people}
                                            time={courseItem.time}
                                            rating={courseItem.rating}
                                            teacher={courseItem.teacher}
                                            img={courseItem.img}
                                            hot={courseItem.hot}
                                        />
                                    </center>
                                </div>
                            )
                        )}
                    </Slider>

                    <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%' }}>
                        <h3 style={{ color: 'black',fontWeight:'400',"font-family": "Kanit, sans-serif" }}>On Job Training List</h3>
                    </CCallout>

                    <center>
                        <Output no="1" value="React.js" />
                        <Output no="2" value="Database Design" />
                        <Output no="3" value="ASP.net" />
                    </center>
                   

                    <CCallout color="warning" style={{ marginBottom: '0px', marginTop: '80px', marginLeft: '4%' }}>
                        <h3 style={{ color: 'black' ,fontWeight:'600',"font-family": "Kanit, sans-serif"}}>My Selected Add-on Year</h3>
                    </CCallout>

                    <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%'}}>
                        <h3 style={{ color: 'black',fontWeight:'400' ,"font-family": "Kanit, sans-serif"}}>Online</h3>
                    </CCallout>                 

                    <Slider {...settings} style={{marginBottom:'100px'}}>
                        {CourseData.filter((id) => id.courseType === "online").map(
                            (courseItem) => (
                                <div>
                                    <center>
                                        <CardOnline
                                            id={courseItem.id}
                                            key={courseItem.id}
                                            coursename={courseItem.title}
                                            category1={courseItem.category1}
                                            category2={courseItem.category2}
                                            people={courseItem.people}
                                            time={courseItem.time}
                                            rating={courseItem.rating}
                                            teacher={courseItem.teacher}
                                            img={courseItem.img}
                                            hot={courseItem.hot}
                                        />
                                        <FormControl component="fieldset">
                                            <FormGroup aria-label="position" row>
                                                <FormControlLabel
                                                    value={courseItem.id}
                                                    control={<Checkbox color="primary" />}
                                                    label="select"
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </center>
                                </div>
                            )
                        )}
                    </Slider>

                    <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%'}}>
                        <h3 style={{ color: 'black',fontWeight:'400',"font-family": "Kanit, sans-serif" }}>Classroom</h3>
                    </CCallout>                 

                    <Slider {...settings} style={{marginBottom:'100px'}}>
                        {CourseData.filter((id) => id.courseType === "online").map(
                            (courseItem) => (
                                <div>
                                    <center>
                                        <CardOnline
                                            id={courseItem.id}
                                            key={courseItem.id}
                                            coursename={courseItem.title}
                                            category1={courseItem.category1}
                                            category2={courseItem.category2}
                                            people={courseItem.people}
                                            time={courseItem.time}
                                            rating={courseItem.rating}
                                            teacher={courseItem.teacher}
                                            img={courseItem.img}
                                            hot={courseItem.hot}
                                        />
                                        <FormControl component="fieldset">
                                            <FormGroup aria-label="position" row>
                                                <FormControlLabel
                                                    value={courseItem.id}
                                                    control={<Checkbox color="primary" />}
                                                    label="select"
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </center>
                                </div>
                            )
                        )}
                    </Slider>

                    <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%' }}>
                        <h3 style={{ color: 'black' ,fontWeight:'400',"font-family": "Kanit, sans-serif"}}>On Job Training List</h3>
                    </CCallout>

                    <center>
                        <Output no="1" value="React.js" />
                        <Output no="2" value="Database Design" />
                        <Output no="3" value="ASP.net" />
                    </center>
                    {notes.map((noteItem, index) => {
                        return (
                            <Input
                                key={index}
                                id={index}
                                no={index + 4}
                                onDelete={deleteNote}
                                name={noteItem.name}
                                placeholder="On Job Training List"
                            />
                        );
                    })}

                    <button style={{ backgroundColor: props.bgColor, border: 'none', boxShadow: 'none', marginLeft: '87%' }} variant="contained" onClick={addNote}>
                        <img width="40px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE1MiAxNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9Il8wMS5BZGQiIGRhdGEtbmFtZT0iMDEuQWRkIj48cGF0aCBkPSJtMTE3IDBoLTgyYTM1LjEgMzUuMSAwIDAgMCAtMzUgMzV2ODJhMzUuMSAzNS4xIDAgMCAwIDM1IDM1aDgyYTM1LjEgMzUuMSAwIDAgMCAzNS0zNXYtODJhMzUuMSAzNS4xIDAgMCAwIC0zNS0zNXptLTkuNzkgODIuNTVoLTIzLjA3YTEuMzQgMS4zNCAwIDAgMCAtMS4zNSAxLjM1djIzLjFhNi43OSA2Ljc5IDAgMCAxIC0xMy41OCAwdi0yMy4xYTEuMzQgMS4zNCAwIDAgMCAtMS4zNS0xLjM1aC0yMy4wN2E2Ljc5IDYuNzkgMCAxIDEgMC0xMy41OGgyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNS0xLjM1di0yMy4wN2E2Ljc5IDYuNzkgMCAwIDEgMTMuNTggMHYyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNSAxLjM4aDIzLjA3YTYuNzkgNi43OSAwIDAgMSAwIDEzLjU4eiIgZmlsbD0iIzM2NjI4OCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
                    </button>
                    <center>
                        {/* go to AnnualCourse */}
                        <div>
                            <Button variant="contained" className="addButton">
                                <SaveIcon className="addIcon" />  &nbsp; Save
                            </Button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default AnnualCourse;
