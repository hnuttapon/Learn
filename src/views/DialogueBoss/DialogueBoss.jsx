import React, { useState } from "react";
import Title from "../Course/CourseCard/Component/Title";
import Header from "../Header/Header";
import Input from "../DialogueUser/Component/Input";
import Button from '@material-ui/core/Button';
import "./DialogueBoss.css";
import { CCallout } from '@coreui/react';
import SaveIcon from '@material-ui/icons/Save';


function Dialogue(props) {

    const [notes, setNotes] = useState(["0", "1", "2"]);

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

    const [target, setTarget] = useState(["0", "1", "2"]);

    function addTarget(newTarget) {
        setTarget(prevTarget => {
            return [...prevTarget, newTarget];
        });
    }

    function deleteTarget(id) {
        console.log(id);
        setTarget(prevTarget => {
            return prevTarget.filter((targetItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header bgColor='#63B995' />
            <div className="topicBackground" style={{ backgroundColor: '#63B995' }}>
                <div className="container-xl" style={{ paddingBottom: '20px' }}>
                    <div className="titleBox" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', width: '100%' }}>
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                        <Title name="Dialogue & Gap" color="white" display="inline" marginLeft="2%" marginRight="2%" />
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                </div>
            </div>

            <div className="IDPBox">
                <div className="container-xl">
                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px' }}>
                        <h3 style={{ color: 'black' }}>Boss Suggest Gap</h3>
                    </CCallout>
                    {notes.map((noteItem, index) => {
                        return (
                            <Input
                                key={index}
                                id={index}
                                no={index + 1}
                                onDelete={deleteNote}
                                name={noteItem.name}
                                placeholder="Boss Suggest Gap"
                            />
                        );
                    })}
                    {/* {addNote()} */}
                    <button style={{ backgroundColor: props.bgColor, border: 'none', boxShadow: 'none', marginLeft: '87%'}} variant="contained" onClick={addNote}>
                        <img width="40px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE1MiAxNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9Il8wMS5BZGQiIGRhdGEtbmFtZT0iMDEuQWRkIj48cGF0aCBkPSJtMTE3IDBoLTgyYTM1LjEgMzUuMSAwIDAgMCAtMzUgMzV2ODJhMzUuMSAzNS4xIDAgMCAwIDM1IDM1aDgyYTM1LjEgMzUuMSAwIDAgMCAzNS0zNXYtODJhMzUuMSAzNS4xIDAgMCAwIC0zNS0zNXptLTkuNzkgODIuNTVoLTIzLjA3YTEuMzQgMS4zNCAwIDAgMCAtMS4zNSAxLjM1djIzLjFhNi43OSA2Ljc5IDAgMCAxIC0xMy41OCAwdi0yMy4xYTEuMzQgMS4zNCAwIDAgMCAtMS4zNS0xLjM1aC0yMy4wN2E2Ljc5IDYuNzkgMCAxIDEgMC0xMy41OGgyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNS0xLjM1di0yMy4wN2E2Ljc5IDYuNzkgMCAwIDEgMTMuNTggMHYyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNSAxLjM4aDIzLjA3YTYuNzkgNi43OSAwIDAgMSAwIDEzLjU4eiIgZmlsbD0iIzM2NjI4OCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
                    </button>

                    {/* <Topic name="My Target This Year" marginTop="40px" marginLeft="0%"/> */}
                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', clear: 'both' }}>
                        <h3 style={{ color: 'black' }}>Boss Need OJT This Year</h3>
                    </CCallout>
                    {target.map((targetItem, index) => {
                        return (
                            <Input
                                key={index}
                                id={index}
                                no={index + 1}
                                onDelete={deleteTarget}
                                name={targetItem.name}
                                placeholder="Boss Need OJT This Year"
                            />
                        );
                    })}
                    <button style={{ backgroundColor: props.bgColor, border: 'none', boxShadow: 'none', marginLeft: '87%'}} variant="contained" onClick={addTarget}>
                        <img width="40px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE1MiAxNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9Il8wMS5BZGQiIGRhdGEtbmFtZT0iMDEuQWRkIj48cGF0aCBkPSJtMTE3IDBoLTgyYTM1LjEgMzUuMSAwIDAgMCAtMzUgMzV2ODJhMzUuMSAzNS4xIDAgMCAwIDM1IDM1aDgyYTM1LjEgMzUuMSAwIDAgMCAzNS0zNXYtODJhMzUuMSAzNS4xIDAgMCAwIC0zNS0zNXptLTkuNzkgODIuNTVoLTIzLjA3YTEuMzQgMS4zNCAwIDAgMCAtMS4zNSAxLjM1djIzLjFhNi43OSA2Ljc5IDAgMCAxIC0xMy41OCAwdi0yMy4xYTEuMzQgMS4zNCAwIDAgMCAtMS4zNS0xLjM1aC0yMy4wN2E2Ljc5IDYuNzkgMCAxIDEgMC0xMy41OGgyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNS0xLjM1di0yMy4wN2E2Ljc5IDYuNzkgMCAwIDEgMTMuNTggMHYyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNSAxLjM4aDIzLjA3YTYuNzkgNi43OSAwIDAgMSAwIDEzLjU4eiIgZmlsbD0iIzM2NjI4OCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
                    </button>

                    <div>
                    </div>

                    <center>
                        <div style={{display:'block'}}>
                            <Button variant="contained" onClick={addTarget} className="addButton">
                                <SaveIcon className="addIcon" />  &nbsp; Save
                        </Button>
                        </div>

                    </center>
                </div>
            </div>


        </div>);
}

export default Dialogue;
