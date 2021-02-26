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

function IDP(props) {
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
        <div style={{ "font-family": "Kanit, sans-serif" }}>
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
                            name="Individual Development Plan"
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
                    <div className="HeaderBox">
                        <div className="row justify-content-center">
                            <div className="col-xl-12" align="center">
                                <Avatar
                                    width="200px"
                                    height="200px"
                                    marginTop="45px"
                                    img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE5NC43MzcgMjkwLjM0N2gxMjQuMTM0djEyOC44NTJoLTEyNC4xMzR6IiBmaWxsPSIjZjlkN2FhIiBkYXRhLW9yaWdpbmFsPSIjZjlkN2FhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTk0LjA4NCAyOTAuMzQ3djIxLjAwNnMyNC4zMTkgNTUuNTE3IDczLjM3MiA1NS41MTdjMjMuNTQzIDAgMzkuOTk4LTkuMjQ3IDUwLjc2Mi0xOC44NjN2LTU3LjY2eiIgZmlsbD0iI2U4YWM2YiIgZGF0YS1vcmlnaW5hbD0iI2U4YWM2YiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NDguMzc5IDQ1NS4yODdjLTIuMzEtNTcuNTU4LTQ2LjYwMi03MC44NTItNzMuMTk3LTczLjYyNy0xMS41NC0xLjIwNC01OC41NTUtLjQyOC01OC41NTUtLjQyOC0xLjEyNiAxOS4yNjktMjQuMDI0IDM3LjcyMy01OS44MjQgMzguNDE1LTM1LjgtLjY5Mi02MS43NzktMjMuNDk4LTYxLjc3OS0zOC40MTUgMCAwLTQ1LjA2LS43NzYtNTYuNTk5LjQyOC0yNi41OTUgMi43NzUtNzAuODg3IDE2LjA2OS03My4xOTcgNzMuNjI3LTEuOTg4IDE0LjM1NCAwIDM0Ljg1OSAwIDM0Ljg1OXM2NC43MzQgMTkuODEzIDE4Ny4wODQgMjAuNDc0Yy45MTEuMDE0IDguMDcyLjAxNCA4Ljk4MyAwIDEyMi4zNS0uNjYxIDE4Ny4wODQtMjAuNDc0IDE4Ny4wODQtMjAuNDc0czEuOTg3LTIwLjUwNSAwLTM0Ljg1OXoiIGZpbGw9IiMxMjI3M2YiIGRhdGEtb3JpZ2luYWw9IiMxMjI3M2YiIHN0eWxlPSIiPjwvcGF0aD48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMTYuNjI4IDM4MS4xOTdjLTEuMTI2IDE5LjI2OS0yNC4wMjMgMjkuNjA1LTU5LjgyNCAzMC4yOTctMzUuOC0uNjkyLTYxLjc3OS0xNS4zOC02MS43NzktMzAuMjk3IDAgMC01Ljc2LS4wOTktMTMuNjc1LS4xNzFsNTAuMzExIDEyOS4yNThjNi42OTMuMTU5IDEzLjU3MS4yNjQgMjAuNjUxLjMwMi45MTEuMDE0IDguMDcyLjAxNCA4Ljk4MyAwIDYuNjQyLS4wMzYgMTMuMTA0LS4xMzIgMTkuNDA2LS4yNzRsNTAuODc5LTEyOS4yOTJjLTguNTk5LjA3My0xNC45NTIuMTc3LTE0Ljk1Mi4xNzd6IiBmaWxsPSIjOGFjMWQ2IiBkYXRhLW9yaWdpbmFsPSIjOGFjMWQ2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2Y5ZDdhYSI+PHBhdGggZD0ibTM1OC44NzcgMjAwLjU4NyA4Ljc2Ny0yOC4wNDdzMTUuNDI2LTQuMjgyIDIzLjU2MiAxMi4zMTEtMTMuMTU0IDUwLjY4Ni0zMS41MTkgNTMuNTUxYy01LjA5Mi0xMi45NzktLjgxLTM3LjgxNS0uODEtMzcuODE1eiIgZmlsbD0iI2Y5ZDdhYSIgZGF0YS1vcmlnaW5hbD0iI2Y5ZDdhYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNTMuNzI0IDIwMC41ODctOC43NjctMjguMDQ3cy0xNS40MjYtNC4yODItMjMuNTYyIDEyLjMxMSAxMy4xNTQgNTAuNjg2IDMxLjUxOSA1My41NTFjNS4wOTItMTIuOTc5LjgxLTM3LjgxNS44MS0zNy44MTV6IiBmaWxsPSIjZjlkN2FhIiBkYXRhLW9yaWdpbmFsPSIjZjlkN2FhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTM2Ny4wMyAyMDAuNjY0Yy4wMzktMS4xNzIuMDU5LTIuMzQzLjA1OS0zLjUxNSAwLTcyLjgzNiAyMS4yNTQtMTU1LjAxNC0xMDguMDQzLTE1Ni4yMjEtLjU5NC0uMDEyLTIuODg5LS4wMjgtMi44OTUtLjAyOHMtMi4zMDEuMDE3LTIuODk1LjAyOGMtMTI5LjI5NyAxLjIwNy0xMDguMDQzIDgzLjM4NS0xMDguMDQzIDE1Ni4yMjEgMCAxLjE3Mi4wMiAyLjM0NC4wNTkgMy41MTVzLS4xMyA1NC4yMDUgNy44NzggNjcuNzU2IDU1LjQzNyA3NS40ODMgMTAwLjQwMiA3NS40ODNjLjA0Mi0uMDQyIDUuMjM1LS4wNDQgNS4yNzkgMCA0NC45NjUgMCA5Mi4zOTUtNjEuOTMxIDEwMC40MDItNzUuNDgzIDguMDA4LTEzLjU1MSA3Ljg3Ny02Ny43NTYgNy44NzctNjcuNzU2eiIgZmlsbD0iI2Y5ZDdhYSIgZGF0YS1vcmlnaW5hbD0iI2Y5ZDdhYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYuNDc4IDQyNS4yMTQtMjAuMjg3IDIzLjE0OCAxMC4yMjUgNjIuMjM5aDIwLjEyM2wxMC4yMjYtNjIuMjM5eiIgZmlsbD0iIzA5MWUyNiIgZGF0YS1vcmlnaW5hbD0iIzA5MWUyNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI3My45MDkgNDE1LjgwM2MwLTEwLjc4Ny0xMC4xNTEtMTQuNTA2LTE3LjQyNy0xNC41MmwtLjAwMS0uMDAxYy0uMDA3IDAtLjAxNC4wMDEtLjAyMS4wMDFzLS4wMTQtLjAwMS0uMDIxLS4wMDFsLS4wMDEuMDAxYy03LjI3Ni4wMTQtMTcuNDI3IDMuNzMzLTE3LjQyNyAxNC41MiAwIDkuNjUzIDkuNDM0IDE3Ljg4NyAxNS43MzUgMTkuNTQuNDM1LjIwMSAyLjk5My4yMDEgMy40MjcgMCA2LjMwMi0xLjY1MyAxNS43MzYtOS44ODcgMTUuNzM2LTE5LjU0eiIgZmlsbD0iIzA5MWUyNiIgZGF0YS1vcmlnaW5hbD0iIzA5MWUyNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ni40NzggNDAxLjAyNSA2Mi4zOTMtNDEuNTQ3IDEzLjkwNCAxOS4yNTMtMzguMTQ5IDU0LjAwNHoiIGZpbGw9IiNiM2VkZmYiIGRhdGEtb3JpZ2luYWw9IiNiM2VkZmYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYuNDc4IDQwMS4wMjUtNjEuNzQxLTQxLjU0Ny0xNC41NTYgMTkuMjUzIDM4LjE0OCA1NC4wMDR6IiBmaWxsPSIjYjNlZGZmIiBkYXRhLW9yaWdpbmFsPSIjYjNlZGZmIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTgwLjE4MSAzNzguNzMxLTE5LjkyMyAxLjQ1OHMxLjUgMjAuNjAzIDMuMDkxIDUzLjU2MmgyNS40NjZsLTE5Ljc0OSAxOS4zMzcgNDcuNTM5IDU2Ljc2IDE1LjUzLjUyOCAxNy43MDMuMTg1eiIgZmlsbD0iIzQ1NzM4ZCIgZGF0YS1vcmlnaW5hbD0iIzQ1NzM4ZCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzMi43NzUgMzc4LjczMSAyMC40MjUgMS40NThzLTEuNSAyMC42MDMtMy4wOTEgNTMuNTYyYy0xNS44NTUgMC0yNS40NjYgMC0yNS40NjYgMGwxOS43NDkgMTkuMzM3LTQ3LjUzOSA1Ni43Ni0xNS40NjcuNDg1LTE3Ljc2Ni4yMjh6IiBmaWxsPSIjNDU3MzhkIiBkYXRhLW9yaWdpbmFsPSIjNDU3MzhkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTMyLjE5OSAxNzMuNzY5YzcuNzQ5LTEuNzE1IDE1LjI5LTEuNzUyIDIzLjIwOSAxMS44LjUyNy0yMC45NDMtMy4xNDgtMzYuOTU4IDQuODQ5LTQxLjg4NiA1LjUzNCA2LjE2IDUuNTM0IDEzLjU1MSA1LjUzNCAxMy41NTEgOS44NTUtMTYuMDE1IDI3LjAyLTI4LjMzNCAyOC4yOTMtNTYuNjY5IDguNjY1IDE2LjAxNSA0MC4wMzEgNjEuNTk3IDEyNC4xMzQgNTIuOTczLTcuMDYtOC42MjQtOS44MDktMTguNDc5LTkuODA5LTE4LjQ3OXMxNC42NTEgMTMuNTE3IDM3LjI0MyAxNi4wMTVjLTEuMjMyLTQuOTI4IDAtMTcuMjQ3IDAtMTcuMjQ3czE1LjEzIDEwLjk2OSAxNy45MTkgNTEuNzQxYzQuMDczLTEzLjAyOSA4LjM3My0xNS41MzYgMTQuMjMtMTIuNzQgMi45NjEtMTAuNjY2IDIzLjM1OS05Ni4yMDMtMTMuNjctMTMxLjkyOS0zOS4xMjUtMzcuNzQ5LTE0Ny44MzItNjUuODI2LTE5My40MTMgMC0yNC42MzggMi45OTgtNDkuOTM3IDIyLjUxNi0zOC41MTkgMTMyLjg3eiIgZmlsbD0iIzI0MDcwMyIgZGF0YS1vcmlnaW5hbD0iIzI0MDcwMyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                                />
                            </div>

                            <div className="col-xl-12" style={{ textAlign: "center" }}>
                                <Topic
                                    fontWeight="400"
                                    name="พุทธินันท์ ม่วงประเสริฐ"
                                    display="block"
                                    marginLeft="0px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name="HR Manager"
                                    display="block"
                                    marginLeft="20px"
                                />

                                <Topic
                                    fontWeight="300"
                                    name="Department :"
                                    display="inline-block"
                                    marginLeft="0px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name=" HR"
                                    display="inline"
                                    marginLeft="0px"
                                />

                                <Topic
                                    fontWeight="300"
                                    name="Section :"
                                    display="inline-block"
                                    marginLeft="30px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name=" HR"
                                    display="inline"
                                    marginLeft="0px"
                                />

                                <Topic
                                    fontWeight="300"
                                    name="Job Level :"
                                    display="inline-block"
                                    marginLeft="30px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name=" M1"
                                    display="inline"
                                    marginLeft="0px"
                                />
                                <div style={{ display: "block" }} />
                                <Topic
                                    fontWeight="300"
                                    name="Age :"
                                    display="inline-block"
                                    marginLeft="0px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name=" 36/4"
                                    display="inline"
                                    marginLeft="0px"
                                />

                                <Topic
                                    fontWeight="300"
                                    name="ESY :"
                                    display="inline-block"
                                    marginLeft="30px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name=" 13/4"
                                    display="inline"
                                    marginLeft="0px"
                                />
                                <Topic
                                    fontWeight="300"
                                    name="Service Y :"
                                    display="inline-block"
                                    marginLeft="30px"
                                />
                                <Topic
                                    fontWeight="200"
                                    name=" 10/2"
                                    display="inline"
                                    marginLeft="0px"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="titleBox"
                        style={{ textAlign: "left", marginTop: "30px" }}
                    >
                        <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                            <h3 style={{ color: 'black' }}>เป้าหมายงานปีนี้</h3>
                        </CCallout>
                    </div>

                    <center>
                        <Output no="1" value="Complete Learning Web Application" />
                        <Output no="2" value="Complete Learning Web Application" />
                        <Output no="3" value="Complete Learning Web Application" />
                    </center>

                    <div
                        className="titleBox"
                        style={{ textAlign: "left", marginTop: "30px" }}
                    >
                        <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                            <h3 style={{ color: 'black' }}>Course Suggestion</h3>
                        </CCallout>
                    </div>

                    <Slider {...settings} style={{marginBottom:'50px'}}>
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

                    <div
                        className="titleBox"
                        style={{ textAlign: "left", marginTop: "30px" }}
                    >
                        <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                            <h3 style={{ color: 'black' }}>Mandatory</h3>
                        </CCallout>
                    </div>

                    <Slider {...settings}>
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

                    <div
                        className="titleBox"
                        style={{ textAlign: "left", marginTop: "30px" }}
                    >
                        <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                            <h3 style={{ color: 'black' }}>From Gaol</h3>
                        </CCallout>
                    </div>

                    <Slider {...settings}>
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

                    <div
                        className="titleBox"
                        style={{ textAlign: "left", marginTop: "30px" }}
                    >
                        <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                            <h3 style={{ color: 'black' }}>On Job Training List</h3>
                        </CCallout>
                    </div>

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

                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default IDP;
