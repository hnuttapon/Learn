import React, { useState } from "react";
import Topic from "../Course/CourseCard/Component/Topic";
import { makeStyles } from "@material-ui/core/styles";
import "./BuyCourse.css";
import Header from "../Header/Header";
import Button from '@material-ui/core/Button';
import CardBank from "./Component/CardBank";
import CourseInput from "./Component/CourseInput";
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    detailFont: {
        color: "white",
        "font-family": "Kanit, sans-serif",
        fontWeight: "450",
        fontSize: "20px",
        marginTop: "20px",
        position: "relative",
        top: "12px",
    },
    sectionButton: {
        "font-family": "Kanit, sans-serif",
        color: "white",
        fontSize: "20px",
        fontWeight: "500",
        width: "95%",
        textDecoration: "none",
    },
}));

const BuyCourseClass = (props) => {
    const classes = useStyles();

    const [notes, setNotes] = useState(["0"]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }


    function deleteNote(id) {
        console.log(id);
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', paddingBottom: '40px' }}>
            <Header bgColor='#63B995' />
            <div>
                <div className="container">
                    <div className="row margin5">
                        <div
                            className="col-xl-8 col-lg-8 col-md-8 col-sm-12"
                            style={{ paddingRight: "0%", paddingLeft: "0%" }}
                        >
                            <img
                                alt="Online"
                                className="courseImg"
                                src={
                                    "https://image.freepik.com/free-vector/gradient-geometric-background_52683-54352.jpg"
                                }
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 courseDetail">
                            <h2
                                style={{
                                    color: "#235789",
                                    "font-family": "Kanit, sans-serif",
                                    fontWeight: "450",
                                    fontSize: "20px",
                                    marginTop: "20px",
                                }}
                            >
                                Online
                            </h2>
                            <Topic
                                name="Storytelling for Project Pitching"
                                fontSize="30px"
                                color="black"
                                fontWeight="500"
                            />
                            <h2
                                style={{
                                    color: "black",
                                    "font-family": "Kanit, sans-serif",
                                    fontWeight: "300",
                                    fontSize: "20px",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                }}
                            >
                                Pitch งานเข้าเป้า แค่เล่าเรื่องเป็น
                            </h2>
                            <Topic
                                name="4,990.00 บาท"
                                marginLeft="0.1%"
                                fontSize="30px"
                                color="black"
                                fontWeight="500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <center>
                    <Topic name="ช่องทางการชำระเงิน" fontSize="30px" color="black" fontWeight="500" marginTop="40px" marginLeft="auto" marginRight="auto" />
                    <div className="row">
                        <div className="col-xl-4">
                            <CardBank account="054-X-XXXXX-X" branch="ตลาดพลู" img="https://assets.moneyguru.co.th/blog/th_TH/wp-content/uploads/2020/02/%E0%B9%81%E0%B8%88%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-19-%E0%B8%9F%E0%B8%A3%E0%B8%B5.png" />
                        </div>
                        <div className="col-xl-4">
                            <CardBank account="058-X-XXXXX-X" branch="ตลาดพลู" img="https://www.matichon.co.th/wp-content/uploads/2020/04/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%9E%E0%B8%B2%E0%B8%93%E0%B8%B4%E0%B8%8A%E0%B8%A2%E0%B9%8C.jpg" />
                        </div>
                        <div className="col-xl-4">
                            <CardBank account="155-X-XXXXX-X" branch="ตลาดพลู" img="https://www.thairath.co.th/media/HCtHFA7ele6Q2dUK3zFOTjoPDX29CBVDMs0YEZd0e6L7sICJ2fm3O2NBkweRpo6F9J.webp" />
                        </div>
                    </div>
                    <Topic name="แจ้งชำระเงิน" fontSize="30px" color="black" fontWeight="500" marginTop="40px" marginLeft="auto" marginRight="auto" />
                    <img alt="" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1024px-LINE_logo.svg.png"} width="70" height="70" />
                    <h2 style={{ color: "black", 'font-family': 'Kanit, sans-serif', fontWeight: '300', fontSize: '40px', paddingTop: '5px', paddingBottom: '5px', display: 'inline' }}>
                        &nbsp; @ThaiPolyethylene
                    </h2>
                    <Topic name="ข้อมูลผู้เข้าอบรม" fontSize="30px" color="black" fontWeight="500" marginTop="40px" marginLeft="auto" marginRight="auto" />
                    {notes.map((noteItem, index) => {
                        return (
                            <CourseInput
                                key={index}
                                id={index}
                                no={index + 1}
                                onDelete={deleteNote}
                                name={noteItem.name}
                                email={noteItem.email}
                                phone={noteItem.phone}
                                position={noteItem.position}
                            />
                        );
                    })}
                    <button style={{ border: 'none', boxShadow: 'none', float:'right' }} variant="contained" onClick={addNote}>
                        <img width="40px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE1MiAxNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9Il8wMS5BZGQiIGRhdGEtbmFtZT0iMDEuQWRkIj48cGF0aCBkPSJtMTE3IDBoLTgyYTM1LjEgMzUuMSAwIDAgMCAtMzUgMzV2ODJhMzUuMSAzNS4xIDAgMCAwIDM1IDM1aDgyYTM1LjEgMzUuMSAwIDAgMCAzNS0zNXYtODJhMzUuMSAzNS4xIDAgMCAwIC0zNS0zNXptLTkuNzkgODIuNTVoLTIzLjA3YTEuMzQgMS4zNCAwIDAgMCAtMS4zNSAxLjM1djIzLjFhNi43OSA2Ljc5IDAgMCAxIC0xMy41OCAwdi0yMy4xYTEuMzQgMS4zNCAwIDAgMCAtMS4zNS0xLjM1aC0yMy4wN2E2Ljc5IDYuNzkgMCAxIDEgMC0xMy41OGgyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNS0xLjM1di0yMy4wN2E2Ljc5IDYuNzkgMCAwIDEgMTMuNTggMHYyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNSAxLjM4aDIzLjA3YTYuNzkgNi43OSAwIDAgMSAwIDEzLjU4eiIgZmlsbD0iIzM2NjI4OCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
                    </button>

                    <div>
                        <Button variant="contained" className="addButton">
                            <SaveIcon className="addIcon" />  &nbsp; Save
                        </Button>
                    </div>
                </center>

            </div>
        </div>
    );
};

export default BuyCourseClass;
